<template>
	<h1 v-if="tasks.length === 0" class="text-white center">Задач пока нет</h1>
	<h3 v-if="tasks.length > 0" class="text-white">Всего активных задач: {{ activeTasks }}</h3>
	<task-card
			v-for="task in tasks"
			:key="task.id"
			:item="task"
			@viewTask="viewTask(task.id)"
	/>
</template>

<script>
import AppStatus from '../components/AppStatus'
import TaskCard from "@/components/TaskCard";
import { mapState, mapMutations } from 'vuex'
export default {
	components: {TaskCard, AppStatus},
	methods: {
		viewTask(id) {
			console.log(id)
		}
	},
	computed: {
		...mapState(['tasks']),
		activeTasks() {
			return this.tasks.filter(item => item.status === 'active').length
		},
	}

}
</script>
