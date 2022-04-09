<template>
	<div id="panel-user" class="position-relative overflow-hidden">
		<div class="container-fluid vertical-scrolled">
			<div class="brand sticky-top bg-theme-dark border-bottom border-dark pt-5 pb-4">
				<h3><i class="fas fa-comment fa-flip-horizontal"></i>QueRoom?</h3>
				<small>-Questions Room-</small>
			</div>
			<div class="form-user-wrapper p-4 mb-5">
				<form class="form-layout" name="user-identity" autocomplete="off">
					<h5 class="text-light">Questions</h5>
					<div class="p-4 border border-dark rounded mb-4">
						<div class="animation1">
							<textarea name="question" v-model="question" class="form-control form-control-sm border-0 animation1-toggler" rows="8" placeholder="Type your questions here..." @keydown.enter="checkEnterKey" @focus="showQuestionsToolbar" @blur="hideQuestionsToolbar"></textarea>
							<div class="question-toolbar">
								<div class="form-check form-switch">
									<input name="use-enter" type="checkbox" class="form-check-input animation1-toggler" v-model="useEnter" @focus="showQuestionsToolbar" @blur="hideQuestionsToolbar">
									<label class="form-check-label"><span class="me-2">Use Enter</span><i class="fas fa-level-down-alt fa-rotate-90"></i></label>
								</div>
								<button type="button" class="btn btn-transparent ms-auto animation1-toggler" @focus="showQuestionsToolbar"><i class="far fa-image"></i></button>
								<button type="button" class="btn btn-sm btn-circle btn-success ms-2 me-3 animation1-toggler" @click="sendQuestion"><i class="far fa-paper-plane"></i></button>
							</div>
						</div>
					</div>
					<h5 class="text-light">User Identity</h5>
					<div class="p-4 border border-dark rounded mb-4">
						<div class="row g-1 align-items-center mb-3">
							<div class="col-auto"><label>Username @</label></div>
							<div class="col">
								<input name="username" type="text" class="form-control" placeholder="Anonymous" aria-label="Name" :value="username" @change="changeUsername">
							</div>
						</div>
						<div class="row g-3">
							<div class="col-auto">
								<label>Email</label>
							</div>
							<div class="col">
								<label>{{ email }}</label><br>
								<button type="button" class="btn btn-sm btn-success btn-animation rounded-pill mt-2" @click="changeEmail"><small>Change</small></button>
							</div>
						</div>
					</div>
					<div v-if="isAdmin">
						<h5 class="text-light">Rooms</h5>
						<div class="p-4 border border-dark rounded">
							<div class="d-flex flex-wrap align-items-center">
								<label>Close This Room</label>
								<button type="button" class="btn btn-sm btn-danger btn-animation rounded-pill ms-3" @click="closeRoom"><small>Close</small></button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<PanelTest :isAdmin="isAdmin" />
	</div>
</template>

<script>
import PanelTest from './PanelTest.vue';

export default {
	name: 'PanelUser',
	components: {
		PanelTest
	},
	props: {
		userId: String,
		isAdmin: Boolean,
		username: String,
		email: String
	},
	data(){
		return {
			question: "",
			useEnter: false
		};
	},
	methods: {
		changeUsername(event){
			this.$parent.changeUsername(event.target.value);
		},
		changeEmail(){
			this.$parent.login();
		},
		sendQuestion(){
			this.$parent.addQuestion(this.question);
			this.question = "";
		},
		closeRoom(){
			this.$parent.closeRoom();
		},
		showQuestionsToolbar(){
			const animation1Elm = document.querySelector(".animation1");
			if(!animation1Elm.classList.contains("show"))
				animation1Elm.classList.add("show");
		},
		hideQuestionsToolbar(){
			const animation1Elm = document.querySelector(".animation1");
			if(!document.activeElement.classList.contains("animation1-toggler") && animation1Elm.classList.contains("show"))
				animation1Elm.classList.remove("show");
		},
		checkEnterKey(event){
			if(this.useEnter){
				event.preventDefault();
				this.sendQuestion();
			}
		}
	}
}
</script>
