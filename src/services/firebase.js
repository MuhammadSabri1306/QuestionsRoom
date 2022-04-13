import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, push, set, update, onValue, onChildRemoved } from "firebase/database";
import firebaseConfig from "./firebase-config";

initializeApp(firebaseConfig);

const dateToTimeString = date => {
	let hours = date.getHours().toString(),
		minutes = date.getMinutes().toString();

	if(hours.length < 2) hours = "0" + hours;
	if(minutes.length < 2) minutes = "0" + minutes;

	return hours + "." + minutes;
};

const getMainRef = path => {
	const db = getDatabase();
	return ref(db, path);
};

const login = callback => {
	const provider = new GoogleAuthProvider(),
		auth = getAuth();

	provider.setCustomParameters({
		prompt: "select_account"
	});

	signInWithPopup(auth, provider)
		.then(result => callback(result.user))
		.catch(error => console.error(`Error Code: ${error.code}\n${error.message}`));
};

const logout = callback => {
	const auth = getAuth();
	signOut(auth).then(callback);
};

const newRoom = (roomName, callback) => {
	const newRoomRef = push(getMainRef("rooms"));
	const value = { roomId: newRoomRef.key, roomName };

	set(newRoomRef, { roomName })
		.then(() => callback(value))
		.catch(error => console.log(`Firebase error code: ${error.code}\n${error.message}`));
			
};

const deleteRoom = roomId => {
	const delRoomRef = getMainRef("rooms/" + roomId);
	set(delRoomRef, null);
};

const pushQuestion = (roomId, userId, username, content) => {
	const newQuestionRef = push(getMainRef(`rooms/${roomId}/questions`));
	const time = Date.now();

	set(newQuestionRef, { userId, username, content, time });
};

const addUsersHandsUp = (roomId, questionKey, userId) => {
	const newUsersHandsUpRef = push(getMainRef(`rooms/${roomId}/questions/${questionKey}/usersHandsUp`));
	set(newUsersHandsUpRef, userId);
};

const removeUsersHandsUp = (roomId, questionKey, usersHandsUpKey) => {
	const delUsersHandsUpRef = getMainRef(`rooms/${roomId}/questions/${questionKey}/usersHandsUp/${usersHandsUpKey}`);
	set(delUsersHandsUpRef, null);
};

const changeUsername = (roomId, questionsKey, username, callback) => {
	const roomsRef = getMainRef("rooms/" + roomId);
	let updates = {};
	questionsKey.forEach(questionKey => {
		updates["/questions/" + questionKey + "/username"] = username;
	});

	update(roomsRef, updates).then(() => {
		callback();
	});
};

const loadAllQuestion = (roomId, callback) => {
	const roomsRef = getMainRef("rooms/" + roomId + "/questions");
	onValue(roomsRef, snapshot => {
		let questions = [];
		snapshot.forEach(childSnapshot => {
			const key = childSnapshot.key;
			let { userId, username, content, usersHandsUp, time } = childSnapshot.val();

			let tempArr = [];
			if(usersHandsUp)
				Object.entries(usersHandsUp).forEach(([key, userId]) => tempArr.push({ key, userId }));
			usersHandsUp = tempArr;

			const timeObj = new Date(time);
			time = dateToTimeString(timeObj);

			questions.push({ key, userId, username, content, usersHandsUp, time });
		});

		const onRoomDeleted = (roomId, callback) => {
			const roomsRef = getMainRef("rooms");
			onChildRemoved(roomsRef, snapshot => {
				if(snapshot.key == roomId) callback();
			})
		};

		callback({ questions, onRoomDeleted });
	});
};

/*const events = {
	onRoomDeleted: (roomId, callback) => {
		const roomsRef = getMainRef("rooms");
		onChildRemoved(roomsRef, snapshot => {
			if(snapshot.key == roomId) callback();
		})
	}
};*/

export default {
	login,
	logout,
	newRoom,
	deleteRoom,
	loadAllQuestion,
	pushQuestion,
	addUsersHandsUp,
	removeUsersHandsUp,
	changeUsername
};
