<template>
  <div>
    <input type="text"
    v-model="inputData"
    @keyup.enter="inputChange"/>
  </div>
</template>

<script>
export default {
  name: 'TheSearchBar',

  data() {
    return {
      inputData: ''
    }
  },

  methods: {
    inputChange(event) {
      // console.log(event.target.value)
      this.$emit('input-change', event.target.value)
      this.inputData = ''
    }
  }
}

</script>

<style>

</style>