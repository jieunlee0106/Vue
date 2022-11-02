<template>
  <div id="app">
    <h1>App</h1>
    <input type="text">
    <h3>parentData: {{}}</h3>
    <h3>childData: {{}}</h3>
    <AppParent/>
    <AppChild/>
    

  </div>
</template>

<script>
import AppChild from './components/AppChild.vue'
import AppParent from './components/AppParent.vue'

export default {
  name: 'App',
  components: {
    AppParent,
    AppChild
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
}
</style>
