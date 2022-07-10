<template>
	<form class="card" ref="authForm" @submit.prevent="onSubmit" novalidate="true">
		<h1>Войти в систему</h1>

		<div :class="['form-control', {invalid: errors.email}]">
			<label for="email">Email</label>
			<input type="email" id="email" autocomplete="on" v-model="email" @blur="formIsValid">
			<small v-if="errors.email">{{ errors.email }}</small>
		</div>

		<div :class="['form-control', {invalid: errors.password}]">
			<label for="password">Пароль</label>
			<input type="password" id="password" autocomplete="off" v-model="password" @blur="formIsValid" @input="formIsValid">
			<small v-if="errors.password">{{ errors.password }}</small>
		</div>
		<button
				class="btn primary"
				type="submit"
		>Войти
		</button>
	</form>
</template>

<script>

import {error} from "../utils/error";

export default {
	name: "Auth",
	mounted() {
		if(this.$route.query.message) {
			this.$store.dispatch('setMessage', {
				value: error(this.$route.query.message),
				type: 'warning'
			})
		}
	},
	data() {
		return {
			email: '',
			password: '',
			errors: {
				email: null,
				password: null
			}
		}
	},
	methods: {
		validEmail(email) {
			let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return re.test(email);
		},
		formIsValid() {
			let isValid = true
			if (!this.email.length) {
				this.errors.email = 'Email обязателен'
				isValid = false
			} else if (!this.validEmail(this.email)) {
				this.errors.email = 'Введите корректный адрес электронной почты'
				isValid = false
			}
			else {
				this.errors.email = null
			}

			if (!this.password.length) {
				this.errors.password = 'Пароль обязателен'
				isValid = false
			} else if (this.password.length <= 5 && this.password.length > 0) {
				this.errors.password = 'Пароль должен быть не меньше 6 символов'
				isValid = false
			} else {
				this.errors.password = null
			}
			return isValid
		},
		async onSubmit() {

			if (this.formIsValid()) {
				try {
					let formData = {}
					formData.email = this.email
					formData.password = this.password
					console.log('Form: ' +  formData)
					this.email = ''
					this.password = ''

					await  this.$store.dispatch('auth/login', formData)
					await this.$router.push('/')
				} catch (e) {
				}
			}
		},
	},
}
</script>
