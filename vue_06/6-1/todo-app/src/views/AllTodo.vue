<template>
  <div class="all">
    <h1>모든 할일</h1>
    <button @click="onInputChange">+</button>
    <input type="text" v-model="inputData">
    <hr>
    <div v-for="todo in todos" :key="todo.id">
      <div>
        <input type="checkbox" name="todo.isCompleted" :value="todo.isCompleted" @click="completedCheck">
        {{ todo.content}}
        <span class="fa fa-star" :class="{star:todo.isImportant}" @click="checkStar(todo)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllTodo',
  data() {
    return {
      inputData: ''
    } 
  },
  computed: {
    todos() { return this.$store.state.todos }
  },
  methods: {
    completedCheck(e) {
      const checked = e.target.value

      if (checked === true) {
        this.checked = false
        console.log('true >>', this.checked)
        return
      } else {
        this.checked = true
        console.log('false>>', this.checked)
        return
      }
      
    },
    createTodo() {
      this.$store.dispatch('createTodo', this.inputData)
      this.inputData=  ''
    },
    onInputChange() {
      if (!this.inputData) return 
      this.createTodo(this.inputData)
    },
        checkStar(todo) {
      if (todo.isImportant === false) {
        todo.isImportant = true} else { todo.isImportant = false}
  },
  }
}
</script>

<style>

.star {
  color: orange
}
</style>