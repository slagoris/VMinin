<template>
  <form class="card" @submit.prevent="submitHandler">
    <h1>Создать новую задачу</h1>
    <div class="form-control" :class="{ invalid: errors.name }">
      <label for="title">Название</label>
      <input
					type="text"
					id="title"
					v-model.trim="task.name"
			>
			<small v-if="errors.name">{{errors.name}}</small>
    </div>

    <div class="form-control" :class="errors.deadline || errors.deadlineValid ? 'invalid' : ''">
      <label >Дата дэдлайна</label>
      <input type="date" ref="date" v-model="task.deadline">
			<small v-if="errors.deadline">{{errors.deadline}}</small>
			<small v-if="errors.deadlineValid">{{errors.deadlineValid}}</small>
    </div>

    <div class="form-control" :class="{ invalid: errors.description }">
      <label>Описание</label>
      <textarea
					id="description"
					v-model="task.description"
			></textarea>
			<small v-if="errors.description">{{errors.description}}</small>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>
<script>
import { mapState, mapActions} from 'vuex'
export default {
	name: 'New',
	mounted() {
	},
	updated() {
	},
	data() {
		return {
			task: {
				name: '',
				deadline: new Date().toISOString().slice(0, 10),
				description: '',
				status: 'active'
			},
			errors: {
				name: null,
				deadline: null,
				deadlineValid: null,
				description: null
			}
		}
	},
	methods: {
		...mapActions(['loadTasks']),
		async submitHandler() {
			if(this.formIsValid) {
				let currentTask = {}
				currentTask.name = this.task.name
				currentTask.deadline = this.task.deadline
				currentTask.description = this.task.description
				currentTask.status = this.task.status
				const response = await fetch('https://mini-freelance-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(currentTask)
				})
				this.task.name = ''
				this.task.deadline = '2022-06-30'
				this.task.description = ''
				await this.loadTasks()
				await this.$router.push('/')
			}
		},

	},
	computed: {
		...mapState(['tasks']),
		dateIsValid() {
			let now = new Date().toISOString().slice(0, 10)
			let today = new Date(now)
			let dedLine = new Date(this.task.deadline)
			if (dedLine.getTime() < today.getTime()) {
				return false
			}
			return true
		},
		formIsValid() {
			let isValid = true
			if (this.task.name.length === 0) {
				this.errors.name = 'Название не может быть пустым'
				isValid = false
			} else {
				this.errors.name = null
			}
			if (this.task.deadline.length === 0 ) {
				this.errors.deadline = 'Укажите дату'
				isValid = false
			} else {
				this.errors.deadline = null
			}
			if (!this.dateIsValid) {
				this.errors.deadlineValid = 'Нельзя назначить задачу на прошедшую дату'
				isValid = false
			} else {
				this.errors.deadlineValid = null
			}
			if (this.task.description.length === 0) {
				this.errors.description = 'Укажите описание'
				isValid = false
			} else {
				this.errors.description = null
			}
			return isValid
		},
	}
}
</script>
<style>

</style>
