<template>
	<div id="test-panel" class="border border-success rounded p-3">
		<div class="row align-items-center g-3">
			<div class="col">
				<label><b>Testing Mode!</b></label>
			</div>
			<div class="col-auto">
				<div class="form-check form-switch">
					<input name="testing-as-admin" type="checkbox" class="form-check-input" :checked="isAdmin" @change="toggleIsAdmin">
					<label class="form-check-label">Testing as Admin</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PanelTest',
	props: {
		isAdmin: Boolean
	},
	methods: {
		toggleIsAdmin(){
			this.$parent.$parent.toggleAdminMode();
		}
	}
}
</script>
