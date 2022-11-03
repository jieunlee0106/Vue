<template>
  <div>
    <h1>AppParent</h1>
    <input type="text" @input='inputChange' v-model="appParentData">
    <h3>appData: {{ appData }}</h3>
    <h3>childData: {{ childData }}</h3>
    <AppChild 
    :app-data="appData" 
    :app-parent-data="appParentData"
    @child-input="childInput"
    @parent-input="parentInput"/>
  </div>
</template>

<script>
import AppChild from '@/components/AppChild.vue'
export default {
  name: 'AppParent',
  components: {
    AppChild,
  },
  props: {
    appData: String,
    //type: Number, Boolean, String, Arry  Object, Function, Promise
  },
  methods: {
    inputChange(event) {
      // console.log(event.target.value)
      this.$emit('parent-input', event.target.value)
    },
    childInput(inputData){
      this.childData = inputData
      this.$emit('child-input', inputData)
    }
  },
  data () {
    return {
      appParentData: '',
      childData: ''
    }
  }

}
</script>

<style scoped>
  div {
    border: 1px solid crimson;
  }
</style>