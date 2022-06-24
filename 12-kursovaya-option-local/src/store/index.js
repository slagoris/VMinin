import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      tasks: []
    }
  },
  getters: {
  },
  mutations: {
    getTasks(state) {
      let storageTasks = localStorage.getItem('tasks')
      if (storageTasks) {
        state.tasks = JSON.parse(localStorage.getItem('tasks'))
      } else {
        state.tasks = []
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
