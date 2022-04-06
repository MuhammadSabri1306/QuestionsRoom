import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, push, set, update, onValue, onChildAdded, onChildRemoved, query, orderByChild } from "firebase/database";
import firebaseConfig from "./firebase-config";

initializeApp(firebaseConfig);

const createId = () => {
	const s4 = () => (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1);
	return s4() + s4() + "-" + s4() + s4() + s4() + s4();
};

const createEmptyDataRoom = (params = null) => {
	const data = {
		room: {
			id: "",
			name: ""
		},
		loggedUser: {
			userId: "",
			isAdmin: false,
			username: "",
			email: ""
		},
		questions: []
	};

	if(params === null) return data;

	data.room.id = createId();
	data.room.name = params.roomName;
	data.loggedUser.userId = params.userId;
	data.loggedUser.isAdmin = true;
	data.loggedUser.username = params.username;
	data.loggedUser.email = params.email;
	return data;
};

const createQuestionsItem = (username, userId, content) => {
	return {
		username: username,
		userId: userId,
		content: content,
		isHandsUp: false,
		time: Date.now()
	};
};

/* --------------------------- FIXED FIREBASE --------------------------- */

const dateToTimeString = date => {
	let hours = date.getHours().toString(),
		minutes = date.getMinutes().toString();

	if(hours.length < 2) hours = "0" + hours;
	if(minutes.length < 2) minutes = "0" + minutes;

	return hours + "." + minutes;
};

const login = callback => {
	const provider = new GoogleAuthProvider(),
		auth = getAuth();
	signInWithPopup(auth, provider)
		.then(result => callback(result.user))
		.catch(error => console.error(`Error Code: ${error.code}\n${error.message}`));
};

const newRoom = (roomName, callback) => {
	const db = getDatabase();
	const roomsListRef = ref(db, "rooms");
	const newRoomPush = push(roomsListRef);

	set(newRoomPush, { roomName }).then(() => {
		callback({ id: newRoomPush.key, name: roomName });
	});
};

const deleteRoom = (roomId, callback) => {
	// return createEmptyDataRoom();
	const db = getDatabase();
	set(ref(db, "rooms/" + roomId), null)
		.then(callback)
		.catch(error => console.error(`Error Code: ${error.code}\n${error.message}`));
};

const getRoomQuestions = (roomId, loggedUserId, callback) => {
	const db = getDatabase();
	const questionsRef = ref(db, "rooms/" + roomId + "/questions");
	const orderedQuestionsQuery = query(questionsRef, orderByChild("time"));

	console.log(orderedQuestionsQuery);

	onValue(orderedQuestionsQuery, snapshot => {
		if(!snapshot.exists()){
			console.log("No one questions yet!");
			return;
		}
		const key = snapshot.key;
		let { userId, username, content, usersHandsUp, time } = snapshot.val();

		const isHandsUp = Object.keys(usersHandsUp).indexOf(loggedUserId) >= 0;
		const timeObj = new Date(time);
		time = dateToTimeString(timeObj);

		callback({ key, userId, username, content, isHandsUp, time });
	});
};

const pushQuestion = (roomId, userId, username, content) => {
	const db = getDatabase(),
		time = Date.now();

	const questionsListRef = ref(db, "rooms/" + roomId + "/questions");
	const newQuestionQuery = push(questionsListRef);

	set(newQuestionQuery, { userId, username, content, time });
};

const event = {
	onRoomAdded: callback => {
		const db = getDatabase();
		const roomsListRef = ref(db, "rooms");

		onChildAdded(roomsListRef, data => {
			callback({
				id: data.key,
				name: data.val().roomName
			});
		});
	},
	onQuestionChanged: (roomId, onAddedCallback, onremovedCallback) => {
		const db = getDatabase();
		const questionsListRef = ref(db, "rooms/" + roomId + "/questions");
		const getTargetQuestion = question => {
			let { userId, username, content, time } = question;

			const isHandsUp = false;
			time = dateToTimeString(time);

			return {userId, username, content, isHandsUp, time};
		};

		onChildAdded(questionsListRef, data => {
			onAddedCallback( getTargetData(data.val()) );
		});

		onChildRemoved(questionsListRef, data => {
			onremovedCallback( getTargetData(data.val()) );
		});
	}
};

const changeUsername = (roomId, userId, username) => {
	const db = getDatabase();
	onValue(ref(db, "rooms/" + roomId + "/questions"), snapshot => {
		if(!snapshot.exists()){
			console.log("No one questions yet!");
			return;
		}

		const updates = [];
		snapshot.val().forEach(item => {
			if(item.userId == userId)
				updates["/questions/" + item.key + "/username"] = username;
			if(Object.keys(item.usersHandsUp).indexOf(userId) >= 0)
				updates["/questions/" + item.key + "/usersHandsUp/" + userId] = username;
		});
		// update(ref(db), updates) return Promise
		update(ref(db, "rooms/" + roomId), updates);
	});
};

export default { login, newRoom, deleteRoom, getRoomQuestions, pushQuestion, event, changeUsername };
