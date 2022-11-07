import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    todos: []
  },
  getters: {
    allTodosCount(state) {
      return state.todos.length
    },
    completedTodosCount(state) {
      // 1. 완료된 투두만 모아두는 새로운 배열 생성
      const completedTodos = state.todos.filter((todo) => {
        return todo.isCompleted === true
      })
      return completedTodos.length
      // 2. 새로운 배열의 길이를 반환
    },
    uncompletedTodosCount(state, getters) {
      return  getters.allTodosCount - getters.completedTodosCount
    }
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1) 
      // 이 인덱스를 제외하고 원본 만듬
    },
    UPDATE_TODO_STATUS(state, todoItem) {
      console.log(todoItem)
      // todos 배열 에서 선택된 todo의 iscomplated 값만 토글 한 후
      // 업데이트 된 todos 배열로 되어야함
      // map은 반환값이 있음
      
      state.todos = state.todos.map((todo) => {
        if (todo === todoItem) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    },
    // LOAD_TODOS(state) {
    //   const localStorageTodos = localStorage.getItem('mytodos')
    //   const parsedTodos = JSON.parse(localStorageTodos)
    //   state.todos = parsedTodos
    // },
    
  },
  actions: {
    createTodo(context, todoTitle) {
      // todo객체  만들기
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }
      // console.log(todoItem)
      context.commit('CREATE_TODO', todoItem)
      // context.dispatch('saveTodosLocalStorage')
    },
    deleteTodo(context, todoItem) {
      context.commit('DELETE_TODO', todoItem)
      // context.dispatch('saveTodosLocalStorage')
    },
    updateTodoStatus(context, todoItem) {
      context.commit('UPDATE_TODO_STATUS', todoItem)
      // context.dispatch('saveTodosLocalStorage')
    },
    // saveTodosLocalStorage(context) {
    //   const jsonTodos = JSON.stringify(context.state.todos)
    //   localStorage.setItem('mytodos', jsonTodos)
    // },
    // loadTodos(context) {
    //   context.commit('LOAD_TODOS')
    // }
  },
  modules: {
  }
})
