import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, push, set, query, orderByChild, onChildAdded, onChildRemoved, onChildChanged } from "firebase/database";
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

const newRoom = roomName => {
	/*const db = getDatabase();
	const roomsListRef = ref(db, "rooms");
	const newRoomPush = push(roomsListRef);
	set(newRoomPush, { roomName }).then(() => {
		callback({ id: newRoomPush.key, name: roomName });
	});*/
	const roomsRef = getMainRef("rooms");
	const newRoomRef = push(roomsRef);
	const roomId = newRoomRef.key;

	const questionsRef = getMainRef(`rooms/${roomId}/questions`),
		value = { roomId, roomName };

	const onRoomDeleted: callback => {
		onChildRemoved(roomsRef, snapshot => {
			if(snapshot.key == roomId) callback();
		})
	};

	const onQuestionAdded = callback => {
		onChildAdded(questionsRef, snapshot => {
			const key = snapshot.key;
			let { userId, username, content, usersHandsUp, time } = snapshot.val();

			let tempArr = [];
			if(usersHandsUp)
				Object.entries(usersHandsUp).forEach(([key, userId]) => tempArr.push({ key, userId }));
			usersHandsUp = tempArr;

			const timeObj = new Date(time);
			time = dateToTimeString(timeObj);

			callback({ key, userId, username, content, usersHandsUp, time });
		});
	};

	const onQuestionRemoved: callback => {
		onChildRemoved(questionsRef, snapshot => {
			callback(snapshot.key);
		});
	};

	return new Promise((resolve, reject) => {
		set(newRoomRef, { roomName })
			.then(() => {
				resolve({ value, onRoomDeleted, onQuestionAdded, onQuestionRemoved });
			}).catch(error => {
				reject(error);
			});
	});
};

const deleteRoom = roomId => {
	/*const db = getDatabase();
	set(ref(db, "rooms/" + roomId), null)
		.then(callback)
		.catch(error => console.error(`Error Code: ${error.code}\n${error.message}`));*/
	const delRoomRef = getMainRef("rooms/" + roomId);
	set(delRoomRef, null);
};

const pushQuestion = (roomId, userId, username, content) => {
	/*const db = getDatabase(),
		time = Date.now();
	const questionsListRef = getMainRef("rooms/" + roomId);
	set(push(questionsListRef), { userId, username, content, time });*/
	const newQuestionRef = push(getMainRef(`rooms/${roomId}/questions`)),
	const questionKey = newQuestionRef.key;

	const time = Date.now(),
		questionItemRef = getMainRef(`rooms/${roomId}/questions/${questionKey}`),
		const usersHandsUpRef = getMainRef(`rooms/${roomId}/questions/${questionKey}/usersHandsUp`);

	const onQuestionChildChanged = callback => {
		/*onChildChanged(questionItemRef, snapshot => {
			const key = snapshot.key;
			let { userId, username, content, usersHandsUp, time } = snapshot.val();

			let tempArr = [];
			if(usersHandsUp)
				Object.entries(usersHandsUp).forEach(([key, userId]) => tempArr.push({ key, userId }));
			usersHandsUp = tempArr;

			const timeObj = new Date(time);
			time = dateToTimeString(timeObj);

			callback({ key, userId, username, content, usersHandsUp, time });
		});*/
		onValue(questionItemRef, snapshot => {
			const key = snapshot.key;
			let { userId, username, content, usersHandsUp, time } = snapshot.val();

			let tempArr = [];
			if(usersHandsUp)
				Object.entries(usersHandsUp).forEach(([key, userId]) => tempArr.push({ key, userId }));
			usersHandsUp = tempArr;

			const timeObj = new Date(time);
			time = dateToTimeString(timeObj);

			callback({ key, userId, username, content, usersHandsUp, time });
		});
	};

	/*const onUsersHandsUpAdded = onAddedcallback => {
		onChildAdded(usersHandsUpRef, snapshot => {
			onAddedcallback(questionKey, { key: snapshot.key, userId: snapshot.val()});
		});
	};

	const onUsersHandsUpRemoved = callback => {
		onChildRemoved(usersHandsUpRef, snapshot => {
			callback(snapshot.key);
		});
	};*/

	return New Promise((resolve, reject) => {
		set(newQuestionRef, { userId, username, content, time })
			.then(() => {
				resolve({ onQuestionChildChanged });
			}).catch(error => {
				reject(error);
			});
	});
};

const addUsersHandsUp = (roomId, questionKey, userId) => {
	const newUsersHandsUpRef = push(getMainRef(`rooms/${roomId}/questions/${questionKey}/usersHandsUp`));
	set(newUsersHandsUpRef, userId);
};

const removeUsersHandsUp = (roomId, questionKey, usersHandsUpKey) => {
	const delUsersHandsUpRef = getMainRef(`rooms/${roomId}/questions/${questionKey}/usersHandsUp/${usersHandsUpKey}`);
	set(delUsersHandsUpRef, null);
};

const changeUsername = (roomId, questionsKey, username) => {
	const roomsRef = getMainRef("rooms/" + roomId);
	let updates = {};
	questionsKey.forEach(questionKey => {
		updates["/questions/" + questionKey + "/username"] = username;
	});

	update(roomsRef, updates);

	/*onValue(ref(db, "rooms/" + roomId + "/questions"), snapshot => {
		if(!snapshot.exists()){
			console.log("No one questions yet!");
			return;
		}

		let updates = {};
		Object.entries(snapshot.val()).forEach(snapshotItem => {
			const [key, item] = snapshotItem;
			
			if(item.userId == loggedUserId)
				updates["/questions/" + key + "/username"] = username;
			if(item.usersHandsUp && Object.keys(item.usersHandsUp).indexOf(loggedUserId) >= 0)
				updates["/questions/" + item.key + "/usersHandsUp/" + loggedUserId] = username;
		});
		// update(ref(db), updates) return Promise
		update(ref(db, "rooms/" + roomId), updates).then(() => {
			getRoomQuestions(roomId, loggedUserId, callback);
		});
	});*/
};

export default { login, logout, newRoom, deleteRoom, pushQuestion, changeUsername };
