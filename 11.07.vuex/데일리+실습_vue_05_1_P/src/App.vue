<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <h3>{{ menuList }}</h3>
    
    <p>{{ menuList[0].image }}</p>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    menuList() {
      return this.$store.state.menuList
    }
    
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}
</style>
