import firebase from "./test-firebase.js";

const newRoomId = () => {
	const s4 = () => (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1);
	return s4() + s4() + "-" + s4() + s4() + s4() + s4();
};

const openRoom = roomId => {
	firebase.getRoomsById(roomId, data => {
		console.log(data);
	});
};

document.getElementById("newRoom").addEventListener("click", function(){
	const roomId = newRoomId(),
		userId = "1",
		username = "Sabri",
		email = "Muhammad Sabri";
	firebase.newRoom(roomId, userId, username, email);

	openRoom(roomId);
});