<template>
	<div v-if="message" :class="['alert', message.type]">
		<p class="alert-title" >{{ title }}</p>
		<p>{{ message.value }}</p>
		<span class="alert-close" @click="close">&times;</span>
	</div>
</template>

<script>

export default {
	name: "AppMessage",
	data () {
		return {
			TITLE_MAP: {
				primary: 'Успешно',
				danger: 'Ошибка!',
				warning: 'Внимание!',
			}
		}
	},
	methods: {
		close() {
			this.$store.commit('clearMessage')
		}
	},
	computed: {
		title() {
			if (this.$store.state.message.value) {
				return 	this.TITLE_MAP[this.$store.state.message.type]
			} else {
				return null
			}
		},
		message() {
			return this.$store.state.message
		}
	}

}
</script>

<style scoped>

</style>
