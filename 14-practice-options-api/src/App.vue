<template>
	<component :is="layout + '-layout'" v-if="layout"/>
</template>

<script>
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
export default {
	components: {AuthLayout, MainLayout},
	data() {
		return {

		}
	},
	 computed: {
		layout() {
			return this.$route.meta.layout
		}
	 }
}
</script>
