<template>
  <div>
    <h1>AppChild</h1>
    <input type="text" @input='inputChange' v-model="appChildData">
    <h3>appData: {{ appData }}</h3>
    <h3>parentData: {{ appParentData }}</h3>
    <h3>childData: {{ appChildData }}</h3>
  </div>
</template> 

<script>
export default {
  name: 'AppChild',
  props: {
    appData: String,
    appParentData: String
  },
  methods: {
  inputChange(event) {
    // console.log(event.target.value)
    this.appChildData = event.target.value
    this.$emit('child-input', event.target.value)
  }
},
  data () {
    return {
      appChildData: ''
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>