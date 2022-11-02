<template>
  <div>
    <h1>AppChild</h1>
    <input type="text"
    v-model="childData"
    @keyup.enter="childInput">
    <h3>appData: {{}}</h3>
    <h3>parentData: {{}}</h3>
    <h3>childData: {{childData}}</h3>
  </div>
</template>

<script>
export default {
  name: 'AppChild',
  props: {
    dynamicProps: String
  },
  data: function () {
    return {
      childData: null,
    }
  },
  methods: {
    childInput: function(){
      this.$emit('child-input', this.childData)
      this.$emit('child-to-app', this.childData)
      this.childData = null
    },

  }
}
</script>

<style>

</style>