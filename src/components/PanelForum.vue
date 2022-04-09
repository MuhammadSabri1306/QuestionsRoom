<template>
	<div id="panel-forum">
		<div id="forum-wrapper" class="card border-0">
			<div class="card-header">
				<h3 class="card-title text-white mt-2">{{ forumName }}</h3>
			</div>
			<div id="content" class="card-body d-flex d-flex flex-column align-items-stretch">
				<QuestionCard v-for="(q, index) in questions" :key="index" :question="q" :isMine="isMyQuestion(q.userId)" :loggedUserId="loggedUserId" />
			</div>
		</div>
	</div>
</template>

<script>
import QuestionCard from './QuestionCard.vue';

export default {
	name: 'PanelForum',
	components: {
		QuestionCard
	},
	props: {
		forumName: String,
		questions: Array,
		loggedUserId: String
	},
	methods: {
		isMyQuestion(userId){
			return userId === this.loggedUserId;
		}
	}
};
</script>
