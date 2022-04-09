<template>
	<div id="app" class="container-lg">
		<div v-if="hasRoom" class="panel-wrapper">
			<PanelUser :userId="loggedUser.userId" :isAdmin="loggedUser.isAdmin" :username="loggedUser.username" :email="loggedUser.email" />
			<PanelForum :forumName="room.name" :questions="questions" :loggedUserId="loggedUser.userId" />
		</div>
		<FormNewRoom v-else />
		<FormLogin v-if="loginStatus != 'valid'" />
	</div>
</template>

<script>
import firebase from "./services/firebase.js";
import urlParams from "./services/url-params.js";
import myLocalStorage from "./services/my-local-storage.js";

import PanelUser from "./components/PanelUser.vue";
import PanelForum from "./components/PanelForum.vue";
import FormNewRoom from "./components/FormNewRoom.vue";
import FormLogin from "./components/FormLogin.vue";

export default {
	name: "App",
	components: {
		PanelUser,
		PanelForum,
		FormNewRoom,
		FormLogin
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
				myLocalStorage.set({
					loggedUser_userId: user.uid,
					loggedUser_username: user.displayName.replaceAll(" ", "_"),
					loggedUser_email: user.email,
					loggedUser_isAdmin: "true",
					loginStatus: "valid"
				});
			});
		},
		changeEmail(){
			firebase.logout(() => {
				this.login();
			});
		},
		newRoom(roomName){
			firebase.newRoom(roomName)
				.then(res => {
					this.hasRoom = true;
					myLocalStorage.set({ hasRoom: "true" });
					urlParams.set({
						id: res.value.roomId,
						name: res.value.roomName
					});

					res.onRoomDeleted(() => {
						if(!this.loggedUser.isAdmin)
							alert("This room was no longer available");

						this.hasRoom = this.loggedUser.isAdmin = false;
						this.loginStatus = this.room.id = this.room.name = this.loggedUser.userId = this.loggedUser.username = this.loggedUser.email = "" ;
						this.questions = [];

						myLocalStorage.set({ hasRoom: "false" }); // harusnya delete
						urlParams.delete(["id", "name"]);
					});

					res.onQuestionAdded(question => {
						this.questions.push(question);
					});

					res.onQuestionRemoved(removedQuestionKey => {
						const questionIndex = this.questions.findIndex(question => question.key == removedQuestionKey);
						if(questionIndex >= 0)
							this.questions.splice(questionIndex, 1);
					});
				}).catch(error => {
					console.log(`Firebase error code: ${error.code}\n${error.message}`);
				});
		},
		closeRoom(){
			firebase.deleteRoom(this.room.id);
		},
		addQuestion(content){
			if(this.loggedUser.username.length < 1)
				this.loggedUser.username = "Anonymous";
			firebase.pushQuestion(this.room.id, this.loggedUser.userId, this.loggedUser.username, content)
				.then(res => {
					res.onQuestionChildChanged(changedQuestion => {
						const questionIndex = this.questions.findIndex(question => question.key == changedQuestion.key);
						if(questionIndex >= 0)
							this.questions[questionIndex] = changedQuestion;
					});

					/*res.onUsersHandsUpAdded((addedQuestionKey, addedUsersHandsUp) => {
						const questionIndex = this.questions.findIndex(question => question.key == addedQuestionKey);
						if(questionIndex >= 0)
							this.questions[questionIndex].usersHandsUp.push(addedUsersHandsUp);
					});

					res.onUsersHandsUpRemoved((usersHandsUpKey) => {
						const questionIndex = this.questions.findIndex(question => question.key == addedQuestionKey);
						
						if(questionIndex < 0) return;
						const usersHandsUpIndex = this.questions[questionIndex].usersHandsUp.findIndex(user => user.key == usersHandsUpKey);

						if(usersHandsUpIndex < 0) return;
						this.questions[questionIndex].usersHandsUp.splice(usersHandsUpIndex, 1);
					});*/
				});
		},
		changeUsername(username){
			const questionsKey = this.questions.filter(question => question.userId == this.loggedUser.userId).map(question => question.key);
			if(questionsKey.length > 0)
				firebase.changeUsername(this.room.id, questionsKey, username);
		},
		changeUsersHandsUp(questionKey, newVal){
			if(newVal){
				firebase.addUsersHandsUp(this.room.id, questionKey, this.loggedUser.userId);
				return;
			}

			const usersHandsUpInd = this.questions[questionKey].usersHandsUp.findIndex(user => user.id == this.loggedUser.userId);
			if(usersHandsUpInd >= 0 && !newVal){
				const usersHandsUpKey = this.questions[questionKey].usersHandsUp[usersHandsUpInd].key;
				firebase.removeUsersHandsUp(this.room.id, questionKey, usersHandsUpKey);
			}
		},
		toggleAdminMode(){
			this.loggedUser.isAdmin = !this.loggedUser.isAdmin;
		},
		checkHasRoom(){
			const localData = myLocalStorage.get(["hasRoom"]);

			if(hasOwnProperty.call(localData, "hasRoom"))
				this.hasRoom = localData.hasRoom === "true";

			if(!this.hasRoom)
				document.location.href = new URL(document.location.href).host;
		},
		checkLogin(){
			const localData = myLocalStorage.get(["loggedUser_userId", "loggedUser_username", "loggedUser_email", "loggedUser_isAdmin", "loginStatus"]);

			if(hasOwnProperty.call(localData, "loggedUser_userId"))
				this.loggedUser.userId = localData.loggedUser_userId;
			if(hasOwnProperty.call(localData, "loggedUser_username"))
				this.loggedUser.username = localData.loggedUser_username;
			if(hasOwnProperty.call(localData, "loggedUser_username"))
				this.loggedUser.email = localData.loggedUser_email;
			if(hasOwnProperty.call(localData, "loggedUser_isAdmin"))
				this.loggedUser.isAdmin = localData.loggedUser_isAdmin === "true";
			if(hasOwnProperty.call(localData, "loginStatus"))
				this.loginStatus = localData.loginStatus;
		},
		test(){
			alert("Test success!");
		}
	},
	mounted(){
		const room = urlParams.get(["id", "name"]);

		if(room.id !== null)
			this.room.id = room.id;
		if(room.name !== null)
			this.room.name = room.name;

		this.checkHasRoom();
		this.checkLogin();

		if(this.loggedUser.email === null)
			this.loginStatus = "";
	}
};
</script>
