import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
	state() {
		return {
			tasks: []
		}
	},
	getters: {},
	mutations: {
		del(state, payload) {
			state.tasks = state.tasks.filter(task => task.id !== payload)
		}
	},
	actions: {
		async loadTasks(context) {
			const { data } = await axios.get('https://mini-freelance-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',)
			if (data) {
				context.state.tasks = Object.keys(data).map(key => {
					return {
						id: key,
						...data[key]
					}
				})
			}
		}
	},
	modules: {}
})
