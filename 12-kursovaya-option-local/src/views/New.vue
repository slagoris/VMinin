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

    <div class="form-control" :class="{ invalid: errors.deadline }">
      <label for="date">Дата дэдлайна</label>
      <input
					type="date"
					id="date"
					v-model="task.deadline"
			>
			<small v-if="errors.deadline">{{errors.deadline}}</small>
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
import { mapState, mapMutations} from 'vuex'
export default {
	name: 'New',
	mounted() {
		this.getTasks()
	},
	data() {
		return {
			task: {
				id: 1,
				deadline: '',
				description: '',
				status: 'active'
			},
			errors: {
				name: null,
				deadline: null,
				description: null
			}
		}
	},
	methods: {
		...mapMutations(['getTasks']),
		submitHandler() {
			if(this.formIsValid) {
				let currentTask = {}
				currentTask.id = this.tasks.length + 1
				currentTask.name = this.task.name
				currentTask.deadline = this.task.deadline
				currentTask.description = this.task.description
				currentTask.status = this.task.status
				this.tasks.push(currentTask)
				this.task.name = ''
				this.task.deadline = ''
				this.task.description = ''
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
				this.$router.push('/')
				console.log(this.tasks)
			}
		},
	},
	computed: {
		...mapState(['tasks']),
		formIsValid() {
			let isValid = true
			if (this.task.name.length === 0) {
				this.errors.name = 'Название не может быть пустым'
				isValid = false
			} else {
				this.errors.name = null
			}
			if (this.task.deadline.length === 0) {
				this.errors.deadline = 'Укажите дату'
				isValid = false
			} else {
				this.errors.deadline = null
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
