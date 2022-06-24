<template>
  <div class="card" v-if="currentTask">
    <h2>{{ currentTask.name }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTask.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ dedLine }}</p>
    <p><strong>Описание</strong>: {{ currentTask.description}}</p>
    <div>
      <button
					:disabled="currentTask.status !== 'active'"
					class="btn"
					@click="pending"
			>
				Взять в работу
			</button>
      <button
					:disabled="currentTask.status !== 'pending'"
					class="btn primary"
					@click="done"
			>Завершить</button>
      <button :disabled="currentTask.status === 'cancelled'" class="btn danger" @click="cancel"
			>Отменить</button>
		</div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{this.$route.params.taskId}}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {mapState} from 'vuex'
export default {
  components: { AppStatus },
	methods: {
		pending() {
			let task = this.tasks.find(e => e.id === Number(this.$route.params.taskId))
			task.status = 'pending'
			localStorage.setItem('tasks', JSON.stringify(this.tasks))
		},
		cancel() {
			let task = this.tasks.find(e => e.id === Number(this.$route.params.taskId))
			task.status = 'cancelled'
			localStorage.setItem('tasks', JSON.stringify(this.tasks))
		},
		done() {
			let task = this.tasks.find(e => e.id === Number(this.$route.params.taskId))
			task.status = 'done'
			localStorage.setItem('tasks', JSON.stringify(this.tasks))
		},
	},
	computed: {
		...mapState(['tasks']),
		currentTask() {
			return this.tasks.find(e => e.id === Number(this.$route.params.taskId))
		},
		dedLine() {
			return this.currentTask.deadline.split('-').reverse().join('.')
		}
	}
}
</script>

<style scoped>

</style>
