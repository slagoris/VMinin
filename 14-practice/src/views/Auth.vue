<template>
		<form class="card" @submit.prevent="onSubmit">
			<h1>Войти в систему</h1>

			<div :class="['form-control', { invalid: eError }]">
				<label for="email">Email</label>
				<input type="email" id="email" autocomplete="on" v-model="email" @blur="eBlur">
				<small v-if="eError">{{ eError }}</small>
			</div>

			<div :class="['form-control', { invalid: pError }]">
				<label for="password">Пароль</label>
				<input type="password" id="password" autocomplete="off" v-model="password" @blur="pBlur">
				<small v-if="pError">{{ pError }}</small>
			</div>
			<button
					class="btn primary"
					type="submit"
					:disabled="isSubmitting || isToManyAttempts"
			>Войти</button>
			<div v-if="isToManyAttempts" class="text-danger">Слишком частые попытки входа. Попробуйте позже.</div>
		</form>
</template>

<script>
import { useLoginForm } from "../use/login-form";
import { useRoute } from 'vue-router'
import {useStore} from "vuex";
import {error} from '../utils/error'
export default {
	name: "Auth",
	setup() {
		const route = useRoute()
		const store = useStore()
		if (route.query.message) {
			store.dispatch('setMessage', {
				value: error(route.query.message),
				type: 'warning'
			})
		}

		return {
			...useLoginForm()
		}
	}
}
</script>

<!--<template>-->
<!--	<Form-->
<!--			class="card"-->
<!--			@submit="onSubmit"-->
<!--			:validation-schema="schema"-->
<!--			v-slot="{ isSubmitting, submitCount}"-->
<!--			ref="myForm"-->
<!--	>-->
<!--		кол-во авторизаций {{ submitCount }}<br>-->
<!--		<h1>Войти в систему</h1>-->
<!--		<Field-->
<!--				type="email"-->
<!--				name="email"-->
<!--				v-slot="{ field, errors, errorMessage }"-->
<!--		>-->
<!--			<div class="form-control" :class="{ invalid: errors.length }">-->
<!--				<label for="email">Пароль</label>-->
<!--				<input v-bind="field" id="email" type="text" autocomplete="on"/>-->
<!--				<small v-if="errorMessage">{{ errorMessage }}</small>-->
<!--			</div>-->
<!--		</Field>-->

<!--		<Field type="password" name="password" #="{ field, errors, errorMessage }">-->
<!--			<div class="form-control" :class="{ invalid: errors.length}">-->
<!--				<label for="password">Пароль</label>-->
<!--				<input v-bind="field" id="password" type="password" autocomplete="off"/>-->
<!--				<small v-if="errors">{{ errorMessage }}</small>-->
<!--			</div>-->
<!--		</Field>-->

<!--		<button-->
<!--				class="btn primary"-->
<!--				type="submit"-->
<!--				:disabled="isSubmitting || submitCount > 3"-->
<!--		>Войти-->
<!--		</button>-->
<!--		<div v-if="submitCount > 3">Слишком много попыток входа. Попробуйте через 1 минуту</div>-->
<!--	</Form>-->

<!--</template>-->

<!--<script>-->
<!--import * as yup from 'yup';-->
<!--import {Form, Field, ErrorMessage} from 'vee-validate'-->

<!--export default {-->
<!--	name: "Auth",-->
<!--	components: {-->
<!--		Form, Field, ErrorMessage-->
<!--	},-->
<!--	data() {-->
<!--		// const { } = useSubmitCount()-->
<!--		return {-->
<!--			email: '',-->
<!--			password: '',-->
<!--			// count,-->
<!--			schema: yup.object({-->
<!--				email:-->
<!--						yup-->
<!--								.string()-->
<!--								.trim()-->
<!--								.required('E-mail обязателен')-->
<!--								.email('Введите корректный e-mail'),-->

<!--				password:-->
<!--						yup-->
<!--								.string()-->
<!--								.trim()-->
<!--								.required('Пароль обязателен')-->
<!--								.min(8, 'Пароль не менее 8 символов')-->
<!--			})-->
<!--		}-->
<!--	},-->
<!--	computed: {-->

<!--	},-->
<!--	methods: {-->
<!--		onSubmit(values) {-->
<!--			console.log(values); // send data to API-->
<!--			// reset the form and the field values to their initial values-->
<!--			this.$refs.myForm.resetForm();-->
<!--		},-->
<!--	},-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
