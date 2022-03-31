import firebase from "./test-firebase.js";

const app = {
	data: {
		roomId: "",
		loggedUser: {
			userId: "",
			username: "",
			email: "",
			isAdmin: false
		},
		questions: [],
	},
	newRoomId: function(){
		const s4 = () => (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1);
		return s4() + s4() + "-" + s4() + s4() + s4() + s4();
	},
	newRoom: function(){
		this.data.roomId = this.newRoomId();
		const userId = "1",
			username = "Sabri",
			email = "Muhammad Sabri";

		firebase.newRoom(this.data.roomId, userId, username, email);
		firebase.getRoomsById(roomId, data => {
			this.data.loggedUser = data.loggedUser;

			document.querySelector(".page[data-page='starter']").classList.add("hide");
			document.querySelector(".page[data-page='room']").classList.remove("hide");
		});

		firebase.onQuestionsValueChanged(this.data.roomId, app.updateRoomQuestions);
	},
	newQuestion: function(content){
		const userId = this.data.loggedUser.userId,
			username = this.data.loggedUser.username,
			isHandsUp = false;

		firebase.pushQuestion(this.data.roomId, {userId, content, username, isHandsUp});
	},
	updateRoomQuestions: function(questions){
		this.data.questions = questions;

		const target = document.getElementById("room");
		let elms = "";
		this.data.questions.forEach(q => {
			elms += `<p>userId = ${q.userId}<br>content = ${q.content}<br>username = ${q.username}<br>isHandsUp = ${q.isHandsUp}</p>`;
		});

		target.innerHTML = elms;
	}
};

document.getElementById("newRoom").addEventListener("click", function(){
	app.newRoom();
});

document.getElementById("addQuestion").addEventListener("click", function(){
	const question = document.addQuestion.question.value;
	if(question.length > 0) app.newQuestion(question);
});