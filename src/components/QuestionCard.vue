<template>
	<div class="question-card position-relative bg-white text-dark border rounded shadow py-2 px-3 mx-4 my-2">
		<p class="question-username">@{{ question.username }}</p>
		<p class="question-content">{{ question.content }}</p>
		<div class="d-flex align-items-center">
			<ButtonHandsUp v-if="!isMine" :isHandsUp="question.isHandsUp" />
			<p class="question-time ms-auto">at {{ time }}</p>
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
		isMine: Boolean
	},
	data(){
		let hours = new Date(this.question.time).getHours().toString(),
			minutes = new Date(this.question.time).getMinutes().toString();
		if(hours.length < 2) hours = "0" + hours;
		if(minutes.length < 2) minutes = "0" + minutes;

		return {
			time: hours + "." + minutes
		};
	}
}
</script>
