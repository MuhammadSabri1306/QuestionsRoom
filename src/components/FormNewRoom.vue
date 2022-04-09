<template>
	<div class="new-room-wrapper">
		<form name="new-room" @submit.prevent="newRoom">
			<!-- <div class="brand lead">
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
			</div> -->
			<p class="text-light text-center">Create new room</p>
			<div class="row mb-4">
				<div class="col">
					<input type="text" class="form-control form-control-sm" placeholder="Enter the room's name" @input="roomNameValidity" v-model="roomName">
				</div>
				<div class="col-auto d-flex" v-if="roomNameStatus.length > 0" :data-valid="roomNameStatus">
					<i class="fas fa-ban text-danger"></i>
					<i class="fas fa-check text-success"></i>
				</div>
			</div>
			<button type="button" class="btn d-block w-100 btn-success" @click="newRoom">New Room</button>
		</form>
		<footer class="position-fixed bottom-0 w-100 d-flex justify-content-center py-4">
			<small class="text-muted"><b><i class="fab fa-github"></i> <a href="https://github.com/MuhammadSabri1306/QuestionsRoom#readme" class="text-muted text-decoration-none">MuhammadSabri1306/QuestionsRoom</a> - 2022</b></small>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'FormNewRoom',
	data(){
		return {
			roomName: "",
			roomNameStatus: ""
		};
	},
	methods: {
		roomNameValidity(event){
			this.roomNameStatus = event.target.value.length > 0 ? "valid" : "unvalid";
		},
		newRoom(){
			if(this.roomName.length < 1){
				this.roomNameStatus = "unvalid";
				return;
			}

			this.$parent.newRoom(this.roomName);
		}
	}
}
</script>
