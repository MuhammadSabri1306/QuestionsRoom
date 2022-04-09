<template>
	<div class="form-login-wrapper">
		<div class="card bg-primary mt-4"><div class="card-body d-flex flex-column align-items-center">
			<p class="text-light small m-0">Use your Google account to use the App.&nbsp;
				<button type="button" class="btn btn-sm btn-outline-light" @click="$parent.login"><i class="fab fa-google"></i> Login</button>
			</p>
		</div></div>
	</div>
</template>

<style>
.form-login-wrapper {
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,.9);
	display: flex;
	justify-content: center;
	align-items: flex-start;
}
</style>

<script>
export default {
	name: 'FormLogin'
}
</script>
