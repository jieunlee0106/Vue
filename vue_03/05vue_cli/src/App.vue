<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model='appData'>
    <h3>parentData: {{ parentData }}</h3>
    <h3>childData: {{ childData }}</h3>
    <AppParent 
    :app-data="appData"
    @parent-input="parentInput"
    @child-input="childInput"/>
    
    

  </div>
</template>

<script>

import AppParent from '@/components/AppParent.vue'

export default {
  name: 'App',
  components: {
    AppParent,
  },
  data (){
    return {
      appData:'',
      parentData: '',
      childData: ''
    }
  },
  methods: {
    parentInput(inputData){
      this.parentData = inputData
    },
    childInput(inputData){
      this.childData = inputData
    },

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  border: 1px solid black;
}
</style>
