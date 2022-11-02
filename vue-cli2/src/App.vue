<template>
  <div id="app">

    <TodoList :todos='todos' @delete-todo="deleteTodo"/>
    <TodoForm @create-todo='createTodo'/>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  data: function () {
    return {
      todos: []
    }
  },

  methods: {
    createTodo: function(todoTitle) {
    const todo = {
      title: todoTitle
    }
    this.todos.push(todo)
  },

  deleteTodo: function(todo) {
    const index = this.todos.indexOf(todo)
    // 해당 인덱스의 요소 하나 삭제하고 , 그 것만 제외하고 배열을 다시 만들어줌
    this.todos.splice(index, 1)
  }
}}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}  */
</style>