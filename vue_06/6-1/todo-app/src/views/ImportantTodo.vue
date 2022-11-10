<template>
  <div class="important">
    <h1>중요 할일</h1>
      <button @click="onInputChange">+</button>
      <input type="text" v-model="inputData">
      <hr>

    <div v-for="todo in importantTodos" :key="todo.id" :todo="todo">
      <div>
        <input type="checkbox" name="todo.isCompleted" :value="todo.isCompleted" @click="completedCheck">
        {{ todo.content }}
        <span class="fa fa-star" :class="{star:todo.isImportant}" @click="checkStar(todo)"></span>
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ImportantTodo',
  data() {
    return {
      inputData: ''
    }
  },
  computed: {
    todos () { return this.$store.state.todos },
    importantTodos() { 
      return this.$store.getters.importantTodos
    }
  },
  methods: {
    createImportantTodo() {
      this.$store.dispatch('createImportantTodo', this.inputData)
      this.inputData = ''
      console.log(this.inputData)
    },
    onInputChange() {
      if (!this.inputData) return 
      this.createImportantTodo(this.inputData)
    },
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