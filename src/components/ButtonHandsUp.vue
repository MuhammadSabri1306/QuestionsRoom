<template>
	<button :class="{ active: isHandsUp }" type="button" class="question-handsup btn btn-transparent" data-bs-toggle="tooltip" title="up this question" @click="childTest">
		<small class="text-muted">Had a same question? </small>
		<i class="fas fa-hand-point-up"></i>
	</button>
</template>

<script>
export default {
	name: 'ButtonHandsUp',
	props: {
		isHandsUp: Boolean
	},
	methods: {
		toggleIsHandsUp(){
			this.$parent.changeIsHandsUp(!this.isHandsUp);
		},
		childTest(){
			// this.$parent.$parent.$parent.test();
			this.$root.test();
		}
	}
}
</script>
