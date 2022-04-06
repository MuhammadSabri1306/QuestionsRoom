<template>
	<div id="app" class="container-lg">
		<div v-if="hasRoom" class="panel-wrapper">
			<PanelUser :userId="loggedUser.userId" :isAdmin="loggedUser.isAdmin" :username="loggedUser.username" :email="loggedUser.email" />
			<PanelForum :forumName="room.name" :questions="questions" :loggedUserId="loggedUser.userId" />
		</div>
		<FormNewRoom v-else :userId="loggedUser.userId" :username="loggedUser.username" :email="loggedUser.email" :loginStatus="loginStatus"></FormNewRoom>
	</div>
</template>

<script>
import firebase from "./services/firebase.js";
import urlParams from "./services/url-params.js";

import PanelUser from "./components/PanelUser.vue";
import PanelForum from "./components/PanelForum.vue";
import FormNewRoom from "./components/FormNewRoom.vue";

export default {
	name: "App",
	components: {
		PanelUser,
		PanelForum,
		FormNewRoom
	},
	data() {
		return {
			hasRoom: false,
			loginStatus: "",
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
	},
	methods: {
		setData(data){
			this.room = data.room;
			this.loggedUser = data.loggedUser;
			this.questions = data.questions;
		},
		getData(){
			return {
				hasRoom: this.hasRoom,
				loginStatus: this.loginStatus,
				room: this.room,
				loggedUser: this.loggedUser,
				questions: this.questions
			};
		},
		setHasRoom(val){
			this.hasRoom = Boolean(val);
		},
		login(){
			firebase.login(user => {
				this.loggedUser.userId = user.uid;
				this.loggedUser.username = user.displayName.replaceAll(" ", "_");
				this.loggedUser.email = user.email;
				this.loggedUser.isAdmin = true;
				this.loginStatus = "valid";

				console.log("App.loggedUser.userId = " + user.uid);
				console.log("Set idGen in App.mounted() to follow userId format");
			});
		},
		newRoom(roomName){
			firebase.newRoom(roomName, room => {
				this.room.id = room.id;
				this.room.name = room.name;

				this.hasRoom = true;
				urlParams.set("room", data.room.id);

				firebase.event.onQuestionChanged(this.room.id, question => {
					this.questions.push(question);
				}, question => {
					const questionIndex = this.questions.indexOf(question);
					if(questionIndex >= 0)
						this.questions.splice(questionIndex, 1);
				});
			});
		},
		closeRoom(){
			firebase.deleteRoom(this.room.id, () => {
				const id = name = userId = username = email = "",
					isAdmin = false;
				urlParams.delete("room");

				this.hasRoom = false;
				this.loginStatus = "";
				this.room = { id, name };
				this.loggedUser = { userId, isAdmin, username, email };
				this.questions = [];
			});
		},
		addQuestion(content){
			if(this.loggedUser.username.length < 1) this.loggedUser.username = "Anonymous";
			firebase.pushQuestion(this.room.id, this.loggedUser.userId, this.loggedUser.username, content);
		},
		changeUsername(username){
			firebase.changeUsername.(this.room.id, this.loggedUser.userId, username);
		},
		changeEmail(email, userId){
			this.login();
		},
		toggleAdminMode(){
			this.loggedUser.isAdmin = !this.loggedUser.isAdmin;
		},
		test(){
			alert("Test success!");
		}
	},
	created(){
		const roomId = urlParams.get("room");
		if(this.hasRoom && roomId != null){
			firebase.getRoomQuestions(roomId, questions => {
				this.questions = questions;
			});
		}
	},
	mounted(){
		const isEmailRegistered = this.loggedUser.email.length > 0;
		if(this.hasRoom && isEmailRegistered){
			this.loggedUser.username = "Anonymous";

			const idGen = () => (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1);
			this.loggedUser.userId = idGen() + idGen() + "-" + idGen() + idGen() + idGen() + idGen();
		}
	}
};
</script>
