<template>
	<div class="question-card position-relative border rounded shadow py-2 px-3 mx-4 my-2" :class="{ 'is-mine': isMine }">
		<div v-if="isMine" class="position-absolute top-0 end-0 p-3">
			<button type="button" class="btn btn-remove reset-focus-shadow" @click="removeQuestion"><i class="fas fa-times"></i></button>
		</div>
		<p class="question-username">@{{ question.username }}</p>
		<p class="question-content">{{ question.content }}</p>
		<div class="d-flex align-items-center">
			<ButtonHandsUp :isMine="isMine" :isHandsUp="isHandsUp" :count="numUsersHandsUp" />
			<p class="question-time ms-auto">at {{ question.time }}</p>
		</div>
	</div>
</template>

<script>
import ButtonHandsUp from './ButtonHandsUp.vue';

export default {
	name: 'QuestionCard',
	components: {
		ButtonHandsUp
	},
	props: {
		question: Object,
		loggedUserId: String
	},
	computed: {
		isMine: function(){
			return this.question.userId == this.loggedUserId;
		},
		numUsersHandsUp: function(){
			return this.question.usersHandsUp.length;
		},
		isHandsUp: function(){
			return this.question.usersHandsUp.findIndex(user => user.userId == this.loggedUserId) >= 0;
		}
	},
	methods: {
		removeQuestion(){
			this.$parent.$parent.removeQuestion(this.question.key);
		},
		toggleIsHandsUp(value){
			this.$parent.$parent.changeUsersHandsUp(this.question.key, value);
		}
	}
}
</script>
