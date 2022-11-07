<template>
  <div>
    <input 
    type="text"
    v-model.trim="todoTitle"
    @keyup.enter="createTodo"
    >
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() { 
    return {
      todoTitle: null,
    }
  },
  methods: {
    createTodo() {
      // console.log(this.todoTitle)
      if (this.todoTitle) {
      this.$store.dispatch('createTodo', this.todoTitle)
      } // 빈 문자열은 안받도록 설정
      
      this.todoTitle = null

    }
  }
}
</script>

<style>

</style>