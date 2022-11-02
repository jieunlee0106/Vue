<template>
  <div>
    <h3>MyComponent의 하위 컴포넌트</h3>
    <P>{{ staticProps }}</P>
    <p>{{ dynamicProps }}</p>
    <button @click="childToParent">클릭!</button>
    <input type="text" 
    v-model="childInputData"
    @keyup.enter="childInput">
  </div>
</template>

<script>
export default {
  name: 'MyComponentItem',
  props: {
    staticProps: String,
    dynamicProps: String
  },
  data: function () {
    return {
      childInputData: null,
    }
  }, 
  methods: {
    childToParent: function() {
      // 두 번째 인자가 데이터
      this.$emit('child-to-parent', '나는 자식이 보낸 데이터다')
    },
    childInput: function() {
      this.$emit('child-input', this.childInputData)
      this.childInputData = null
    }
  },
}
</script>

<style>

</style>