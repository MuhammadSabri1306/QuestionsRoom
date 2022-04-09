<template>
	<div class="question-card position-relative bg-white text-dark border rounded shadow py-2 px-3 mx-4 my-2" :class="{ 'is-mine': isMine }">
		<p class="question-username">@{{ question.username }}</p>
		<p class="question-content">{{ question.content }}</p>
		<div class="d-flex align-items-center">
			<ButtonHandsUp v-if="!isMine" :isHandsUp="isHandsUp" />
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
		loggedUserId: String,
		isMine: Boolean
	},
	computed: {
		isHandsUp: function(){
			return this.question.usersHandsUp && Object.keys(this.question.usersHandsUp).indexOf(this.loggedUserId) >= 0;
		}
	},
	methods: {
		toggleIsHandsUp(newVal){
			this.$root.changeUsersHandsUp(this.question.key, newVal);
		}
	}
}
</script>
