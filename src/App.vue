<template>
	<div id="app" class="container-lg">
		<div v-if="hasRoom" class="panel-wrapper">
			<PanelUser :userId="loggedUser.userId" :isAdmin="loggedUser.isAdmin" :username="loggedUser.username" :email="loggedUser.email" />
			<PanelForum :forumName="room.name" :questions="questions" :loggedUserId="loggedUser.userId" />
		</div>
		<FormNewRoom v-if="!hasRoom"></FormNewRoom>
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
				room: this.room,
				loggedUser: this.loggedUser,
				questions: this.questions
			};
		},
		setHasRoom(val){
			this.hasRoom = Boolean(val);
		},
		newRoom(params){
			const data = firebase.newRoom(params);
			this.setData(data);
			urlParams.set("room", data.room.id);
			this.hasRoom = true;
		},
		closeRoom(){
			const data = firebase.deleteRoom();
			this.setData(data);
			urlParams.delete("room");
			this.hasRoom = false;
		},
		toggleAdminMode(){
			this.loggedUser.isAdmin = !this.loggedUser.isAdmin;
		},
		changeUsername(username, userId){
			firebase.changeUsername(this.getData(), username, userId, this.setData);
			console.log(this.getData().questions);
		},
		changeEmail(email, userId){
			firebase.changeEmail(this.getData(), email, userId, this.setData);
		},
		addQuestion(question){
			if(this.loggedUser.username.length < 1) this.loggedUser.username = "Anonymous";
			firebase.pushQuestion(this.getData(), this.loggedUser.username, this.loggedUser.userId, question, this.setData);
		},
		test(){
			alert("Test success!");
		}
	},
	mounted(){
		const roomId = urlParams.get("room");
		this.hasRoom = roomId != null; //sementara
		
		/*if(roomId != null){
			firebase.isRoomExists(this.setHasRoom)
		}*/

		if(this.hasRoom && this.loggedUser.email.length < 1){
			this.loggedUser.username = "Anonymous";

			const idGen = () => (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1);
			this.loggedUser.userId = idGen() + idGen() + "-" + idGen() + idGen() + idGen() + idGen();
		}
	}
};
</script>
