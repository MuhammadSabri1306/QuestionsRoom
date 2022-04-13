<template>
	<div class="alert-wrapper d-flex justify-content-center align-items-center">
		<div class="alert alert-danger bg-light alert-content d-flex align-items-center p-5" role="alert">
			<i class="fas fa-sync-alt fa-spin fa-3x"></i>
			<div class="alert-message ms-5">
				<h3>You are offline.</h3>
				<p class="small ms-1 mb-0"><b>Make sure your device<br>has internet connection.</b></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FormLogin'
}
</script>
