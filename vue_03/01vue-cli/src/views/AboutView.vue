<template>
  <div class="about">
    <div>
    <h1>About</h1>
    <h2>첫 번째 박스</h2>
    <div class="global" >
      <div class="box scoped-box"></div>
    </div>
    <h2>두 번째 박스</h2>
    <div class="global">
      <div class="box scoped-box"></div>
    </div>
  </div>
  </div>
</template>

<script>



export default {
  name: 'AboutView',
  components: {

  }
}
</script>

<style scoped>
.scoped-box {
  background-color: pink;
}
</style>

