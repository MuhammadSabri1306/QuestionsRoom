<template>
	<div class="new-room-wrapper">
		<form name="new-room">
			<div class="brand lead">
				<h3><i class="fas fa-comment fa-flip-horizontal"></i>QueRoom?</h3>
				<small>-Questions Room-</small>
			</div>
			<div class="row g-3 align-items-center mb-3">
				<label class="col-5 text-light">Login to your Gmail</label>
				<div class="col">
					<button type="button" class="btn btn-sm d-block w-100 btn-primary" @click="login"><i class="fab fa-google"></i> Login</button>
				</div>
				<div class="col-auto d-flex" v-bind:data-valid="loginStatus">
					<i class="fas fa-ban text-danger"></i>
					<i class="fas fa-check text-success"></i>
				</div>
			</div>
			<div class="row g-3 mb-5">
				<label class="col-5 text-light">Room's name</label>
				<div class="col">
					<input type="text" class="form-control form-control-sm" placeholder="Type here..." @input="roomNameValidity" v-model="roomName">
				</div>
				<div class="col-auto d-flex" v-bind:data-valid="roomNameStatus">
					<i class="fas fa-ban text-danger"></i>
					<i class="fas fa-check text-success"></i>
				</div>
			</div>
			<button type="button" class="btn d-block w-100 btn-success" @click="newRoom">New Room</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'FormNewRoom',
	data(){
		return {
			roomName: "",
			userId: "",
			username: "",
			email: "",
			loginStatus: "",
			roomNameStatus: ""
		};
	},
	methods: {
		roomNameValidity(event){
			this.roomNameStatus = event.target.value.length > 0 ? "valid" : "unvalid";
		},
		login(){
			this.loginStatus = "valid";

			this.userId = "1";
			this.username = "Sabri";
			this.email = "muhammadsabri1306@gmail.com";
		},
		newRoom(){
			if(this.userId.length < 1 || this.roomName.length < 1){
				if(this.userId.length < 1)
					this.loginStatus = "unvalid";
				if(this.roomName.length < 1)
					this.roomNameStatus = "unvalid";
				return;
			}

			this.$parent.newRoom({
				roomName: this.roomName,
				userId: this.userId,
				username: this.username,
				email: this.email
			});

			console.log(this.roomName);
		}
	}
}
</script>
