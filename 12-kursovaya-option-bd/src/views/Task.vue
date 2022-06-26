<template>
  <div class="card" v-if="currentTask">
    <h2>{{ currentTask.name }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTask.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ dedLine }}</p>
    <p><strong>Описание</strong>: {{ currentTask.description}}</p>
    <div style="display: flex; align-items: center;">
      <button
					:disabled="currentTask.status !== 'active'"
					class="btn"
					@click="changeStatus($route.params.taskId, currentTask, 'pending')"
			>
				Взять в работу
			</button>
      <button
					:disabled="currentTask.status !== 'pending'"
					class="btn primary"
					@click="changeStatus($route.params.taskId, currentTask, 'done')"
			>Завершить</button>
      <button :disabled="currentTask.status === 'cancelled' || currentTask.status === 'done'" class="btn danger"
							@click="changeStatus($route.params.taskId, currentTask, 'cancelled')"
			>Отменить</button>
			<button
					style="margin-left: auto;"
					v-if="currentTask.status === 'done' || currentTask.status === 'cancelled' "
					class="btn danger"
					@click="removeTask($route.params.taskId)"
			>Удалить</button>
		</div>

  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{this.$route.params.taskId}}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {mapState, mapActions, mapMutations} from 'vuex'
import axios from "axios";
export default {
  components: { AppStatus },
	mounted() {
		this.loadTasks()
	},
	methods: {
		...mapMutations(['del']),
		...mapActions(['loadTasks']),
		async changeStatus(id, task, status) {
			task.status = status
			await axios.put(`https://mini-freelance-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`, task)
		},
		async removeTask(id) {
			await axios.delete(`https://mini-freelance-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`)
			await this.del(id)
			await this.$router.push('/')
		},
	},
	computed: {
		...mapState(['tasks']),
		currentTask() {
			return this.tasks.find(e => e.id === this.$route.params.taskId)
		},
		dedLine() {
			return this.currentTask.deadline.split('-').reverse().join('.')
		}
	}
}
</script>

<style scoped>

</style>
