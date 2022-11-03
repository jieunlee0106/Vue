<template>
  <div>
    <h2>산출세액: {{}} 만원</h2>
    <h2>세액감면: {{ minusTax }}  만원</h2>
    <FinaltaxMine
     />
  </div>
</template>

<script>
import FinaltaxMine from '@/components/FinaltaxMine.vue'

export default {
  name: 'TexrateMine',
  components: {
    FinaltaxMine
  },
  props: {
    minusTax: Number
  },

  // methods: {
  //   minusTaxInput(inputdata){
  //     this.minusTax = inputdata
  //   }
  // }
}
</script>

<style>

</style>