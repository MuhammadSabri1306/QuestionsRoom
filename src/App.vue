<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "./assets/fontawesome/css/all.min.css";
@import "./assets/style.css";
</style>

<template>
	<div id="app" class="container-lg">
		<div v-if="hasRoom" class="panel-wrapper">
			<PanelUser :userId="loggedUser.userId" :isAdmin="loggedUser.isAdmin" :username="loggedUser.username" :email="loggedUser.email" />
			<PanelForum :forumName="room.name" :questions="questions" :loggedUserId="loggedUser.userId" />
		</div>
		<FormNewRoom v-else />
		<FormLogin v-if="loginStatus != 'valid'" />
		<OfflineAlert v-if="!isOnline" />
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
import OfflineAlert from "./components/OfflineAlert.vue";

export default {
	name: "App",
	components: {
		PanelUser,
		PanelForum,
		FormNewRoom,
		FormLogin,
		OfflineAlert
	},
	data() {
		return {
			hasRoom: false,
			loginStatus: "",
			isOnline: navigator.onLine,
			isLoaded: false,
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
		login(){
			firebase.login(user => {
				myLocalStorage.set({
					loggedUser_userId: user.uid,
					loggedUser_username: user.displayName.replaceAll(" ", "_"),
					loggedUser_email: user.email,
					loggedUser_isAdmin: "true",
					loginStatus: "valid"
				});

				this.checkLogin();
			});
		},
		newRoom(roomName){
			firebase.newRoom(roomName, room => {
				const roomId = room.roomId,
					roomName = room.roomName;

				this.hasRoom = true;
				myLocalStorage.set({ hasRoom: "true" });
				urlParams.set({
					id: roomId,
					name: roomName
				});
			});
		},
		closeRoom(){
			firebase.deleteRoom(this.room.id);
		},
		loadAllQuestions(){
			firebase.loadAllQuestion(this.room.id, res => {
				this.changeQuestions(res.questions, true);

				if(!this.isLoaded){
					res.onRoomDeleted(this.room.id, () => {
						console.log("TEST");
						myLocalStorage.set({ hasRoom: "false" });

						if(!this.loggedUser.isAdmin)
							alert("This room has closed by Admin.");
						document.location.href = document.location.origin;
					});
					this.isLoaded = true;
				}
			});
		},
		addQuestion(content){
			if(this.loggedUser.username.length < 1)
				this.loggedUser.username = "Anonymous";
			firebase.pushQuestion(this.room.id, this.loggedUser.userId, this.loggedUser.username, content);
		},
		removeQuestion(questionKey){
			firebase.delQuestion(this.room.id, questionKey);
		},
		changeQuestions(questions, order = false){
			if(!order){
				this.questions = questions;
				return;
			}

			const sortQuestions = questions => {
				const sorter = (a, b) => {
					if(a.usersHandsUp.length > b.usersHandsUp.length) return false;
					else if(a.usersHandsUp.length == b.usersHandsUp.length && a.time < b.time) return false;
					return true;
				};

				for(let i = 0; i < questions.length; i++){
					for(let j = 0; j < questions.length - i - 1; j++){
						if(sorter(questions[j], questions[j + 1])){
							[questions[j + 1], questions[j]] = [questions[j], questions[j + 1]];
						}
					}
				}

				return questions;
			};

			this.questions = sortQuestions(questions);
		},
		changeEmail(){
			firebase.logout(this.login);
		},
		changeUsername(username){
			const questionsKey = this.questions.filter(question => question.userId == this.loggedUser.userId).map(question => question.key);
			if(questionsKey.length > 0){
				firebase.changeUsername(this.room.id, questionsKey, username, () => {
					myLocalStorage.set({ loggedUser_username: username.replaceAll(" ", "_") });
				});
			}
		},
		changeUsersHandsUp(questionKey, newVal){
			if(newVal){
				firebase.addUsersHandsUp(this.room.id, questionKey, this.loggedUser.userId);
				return;
			}

			const questionsInd = this.questions.findIndex(question => question.key == questionKey);
			if(questionsInd < 0) return;

			const usersHandsUpInd = this.questions[questionsInd].usersHandsUp.findIndex(user => user.userId == this.loggedUser.userId);
			if(usersHandsUpInd >= 0 && !newVal){
				const usersHandsUpKey = this.questions[questionsInd].usersHandsUp[usersHandsUpInd].key;
				firebase.removeUsersHandsUp(this.room.id, questionKey, usersHandsUpKey);
			}
		},
		toggleAdminMode(){
			this.loggedUser.isAdmin = !this.loggedUser.isAdmin;
		},
		checkHasRoom(){
			let hasRoom = urlParams.has("id") && urlParams.has("name");

			const localData = myLocalStorage.get(["hasRoom"]);
			if(hasRoom && hasOwnProperty.call(localData, "hasRoom"))
				hasRoom = localData.hasRoom === "true";

			if(hasRoom) this.hasRoom = hasRoom;
			else {
				alert("This room has closed by Admin.");
				document.location.href = document.location.origin;
			}

			return hasRoom;
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
		updateOnlineStatus(event){
			this.isOnline = event.type === "online";
		}
	},
	watch: {
		isOnline(newVal, oldVal){
			if(newVal && !oldVal && !this.isLoaded)
				this.loadAllQuestions();
		}
	},
	beforeMount(){
		const room = urlParams.get(["id", "name"]);

		if(room.id !== null)
			this.room.id = room.id;
		if(room.name !== null)
			this.room.name = room.name;

		const hasRoomUrl = room.id !== null && room.name !== null;
		if(hasRoomUrl && this.checkHasRoom())
			this.hasRoom = true;
	},
	mounted(){
		this.checkLogin();
		if(this.loggedUser.email === null)
			this.loginStatus = "";

		window.addEventListener("online", this.updateOnlineStatus);
		window.addEventListener("offline", this.updateOnlineStatus);

		let webTitle = "QueRoom";
		if(this.hasRoom) webTitle = this.room.name + webTitle;
		document.title = webTitle;

		if(this.hasRoom && this.isOnline)
			this.loadAllQuestions();
	},
	beforeDestroy(){
		window.removeEventListener("online", this.updateOnlineStatus);
		window.removeEventListener("offline", this.updateOnlineStatus);
	}
};
</script>
