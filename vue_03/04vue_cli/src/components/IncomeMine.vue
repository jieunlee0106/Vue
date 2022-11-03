<template>
  <div>
    <p>연봉 입력 (만원): <input type="text" @input='inputChangeS' v-model.number="salary"> </p>
    <p>세액감면액 (만원): <input type="text" @input='inputChangeT' v-model.number="minusTax"> </p>
    <hr>
    <h2>종합소득금액: {{ salary }} 만원</h2>
    <h2>종합소득공제: (-) 150 만원</h2>
    <h2>과세표준: {{ salary -150 }} 만원</h2>
    <hr>
    <TexrateMine
    :minus-tax="minusTax"/>
  </div>
</template>

<script>
import TexrateMine from '@/components/TexrateMine.vue'
export default {
  name: 'IncomeMine',
  components: {
    TexrateMine,
  },
  data () {
    return {
      salary: 0,
      minusTax: 0
    }
  },
  // methods: {
  //   inputChangeS(event) {
  //     this.salary = event.target.value
  //   },
  //   inputChangeT(event) {
  //     this.tax = event.target.value
  //     this.$emit('minus-tax-input', event.target.value)
  //   },

  }

</script>

<style>

</style>