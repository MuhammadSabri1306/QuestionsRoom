import { db } from "./test-init-firebase.js";
import { ref, set } from "firebase/database";

export default {
	newRoom: (roomId, userId, username, email) => {
		const newRoomsRef = ref(db, "rooms/" + roomId);
		set(newRoomsRef, {
			loggedUser: {userId, username, email, isAdmin: true},
			questions: []
		});
	},
	getRoomsById: (roomId, callback) => {
		const roomsRef = ref(db, "rooms/" + roomId);
		onValue(roomsRef, snapshot => callback(snapshot.val()));
	}
};