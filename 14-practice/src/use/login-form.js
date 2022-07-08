import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export function useLoginForm() {
	const store = useStore()
	const router = useRouter()
	const { handleSubmit, isSubmitting, submitCount } = useForm()
	const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
			'email',
			yup
					.string()
					.trim()
					.required('E-mail обязателен')
					.email('Укажите корректный E-mail')
	)
	const MIN_LENGTH = 6
	const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
			'password',
			yup
					.string()
					.trim()
					.required('Пароль обязателен')
					.min(MIN_LENGTH, `Пароль не менее ${MIN_LENGTH} символов`)
	)

	const isToManyAttempts = computed(() => submitCount.value >=3 )
	watch(isToManyAttempts, val => {
		if(val) {
			setTimeout(() => {
				submitCount.value = 0
			}, 3000)
		}
	})
	const  onSubmit = handleSubmit(async  values => {
		console.log('Form:', values)
		try {
			await store.dispatch('auth/login', values)
			router.push('/')
		} catch (e) {

		}

	})
	return {
		email,
		password,
		eError,
		pError,
		eBlur,
		pBlur,
		onSubmit,
		isSubmitting,
		submitCount,
		isToManyAttempts,
		store
	}
}
