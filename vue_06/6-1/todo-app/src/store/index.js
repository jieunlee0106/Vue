import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        todos: []

  },
  getters: {
    importantTodos(state) {
      return state.todos.filter(todo => {
        return todo.isImportant === true
      })
    }
  },
  mutations: {
    CREATE_TODO(state, todoData) {
      state.todos.push(todoData)
    },
    CREATE_IMPORTANT_TODO(state, todoData) {
      state.todos.push(todoData)
      console.log(todoData.isImportant)
    }
  },
  actions: {
    createImportantTodo(context, inputData) {
      const sendData = {
        id: new Date().getTime(),
        content: inputData,
        // dueDateTime: '2021-12-09T00:00',   마감일
        isCompleted: false, 
        isImportant: true,
      }
      context.commit("CREATE_IMPORTANT_TODO", sendData)

    },
    createTodo(context, inputData) {
      const sendData = {
        id: new Date().getTime(),
        content: inputData,
        // dueDateTime: '2021-12-09T00:00',   마감일
        isCompleted: false, 
        isImportant: false,
      }
      console.log(sendData)
      context.commit("CREATE_TODO", sendData)
    }
  },
  modules: {
  }
})
