<template>
	<h1 v-if="tasks.length === 0" class="text-white center">Задач пока нет</h1>
	<h3 v-if="tasks.length > 0" class="text-white">Всего активных задач: {{ activeTasks }}</h3>
	<task-card
			v-for="task in tasks"
			:key="task.id"
			:item="task"
	/>
</template>

<script>
import AppStatus from '../components/AppStatus'
import TaskCard from "@/components/TaskCard";
import {mapState, mapActions} from 'vuex'

export default {
	components: {TaskCard, AppStatus},
	mounted() {
		this.loadTasks()
	},
	methods: {
		...(mapActions(['loadTasks'])),
	},
	computed: {
		...mapState(['tasks']),
		activeTasks() {
			return this.tasks.filter(item => item.status === 'active').length

		},
	}
}
</script>
