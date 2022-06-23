<template>
	<app-alert
			title="Работа с Composition"
			type="primary"
			v-if="alert"
			@close="close"
	></app-alert>
	<div class="card">
		<h1>Переиспользование</h1>

		<button class="btn primary" @click="toggle">{{ alert ? 'Закрыть' : 'Показать'}} сообщение</button>
		<button class="btn" @click="navigate">Перейти на главную</button>
	</div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import AppAlert from "./AppAlert";
import {useAlert} from "../use/alert";

export default {
	components: {AppAlert},
	setup() {
		// const {alert, close, toggle } = useAlert()

		const router = useRouter()
		const route = useRoute()
		const navigate = () => router.push('/')

		return {
			navigate,
			...useAlert(true)
		}
	},
}
</script>

<style scoped>

</style>
