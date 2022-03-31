import { db } from "./test-init-firebase.js";
import { ref, child, get, push, set } from "firebase/database";

export default {
	newRoom: (roomId, userId, username, email) => {
		const newRoomsRef = ref(db, "rooms/" + roomId);
		set(newRoomsRef, {
			loggedUser: {userId, username, email, isAdmin: true},
			questions: []
		});
	},
	getRoomsById: (roomId, callback) => {
		const dbRef = ref(db);
		get(child(dbRef, "rooms/" + roomId)).then(snapshot => {
			if(snapshot.exists())
				callback(snapshot.val());
			else
				console.log("No data available!");
		}).catch(err => console.error(err));
	},
	pushQuestion: (roomId, question) => {
		set(ref(db, "rooms/" + roomId + "/questions"), question);
	},
	onQuestionsValueChanged: (roomId, callback) => {
		const questionsRef = ref(db, "rooms/" + roomId + "/questions");
		onValue(questionsRef, snapshot => {
			const value = snapshot.map(item => item.val());
			callback(value);
		});
	}
};