<template>
	<div class="new-room-wrapper">
		<form name="new-room" @submit.prevent="newRoom" class="border border-success rounded p-4">
			<h4 class="text-light text-center mb-5">Create new room</h4>
			<div class="row mb-4">
				<div class="col">
					<input type="text" class="form-control form-control-sm" placeholder="Enter the room's name" @input="roomNameValidity" v-model="roomName">
				</div>
				<div class="col-auto d-flex" v-if="roomNameStatus != ''" :data-valid="roomNameStatus">
					<i class="fas fa-ban text-danger"></i>
					<i class="fas fa-check text-success"></i>
				</div>
			</div>
			<button type="button" class="btn d-block w-100 btn-light" @click="newRoom">New Room</button>
		</form>
		<footer class="position-fixed bottom-0 w-100 d-flex justify-content-center py-4">
			<small class="text-muted"><b><i class="fab fa-github"></i> <a href="https://github.com/MuhammadSabri1306/QuestionsRoom#readme" class="text-muted text-decoration-none">Questions Room</a> - 2022</b></small>
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
