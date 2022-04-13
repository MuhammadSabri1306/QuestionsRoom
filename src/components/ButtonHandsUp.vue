<template>
	<div class="handsup-wrapper">
		<button v-if="!isMine" :class="{ active: isHandsUp }" type="button" class="btn-handsup btn rounded-pill reset-focus-shadow" @click="toggleIsHandsUp">
			<i class="fas fa-star"></i><span class="small ms-2">{{ count }}&nbsp;users</span>
		</button>
		<span v-if="isMine" class="btn-handsup btn rounded-pill is-mine">
			<i class="fas fa-star"></i><span class="small ms-2">{{ count }}&nbsp;users</span>
		</span>
	</div>
</template>

<script>
export default {
	name: 'ButtonHandsUp',
	props: {
		isMine: Boolean,
		isHandsUp: Boolean,
		count: Number
	},
	methods: {
		toggleIsHandsUp(){
			this.$parent.toggleIsHandsUp(!this.isHandsUp);
		}
	}
}
</script>
