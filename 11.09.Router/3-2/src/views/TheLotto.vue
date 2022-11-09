<template>
  <div class="lotto">
    <h1>Lotto</h1>
    <button @click="getNumber">get lucky numbers</button>
    <p>{{ lotto }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheLotto',
  data(){
    return {
      lotto:[],
    }
  },
  methods: {
    getNumber() {
      this.lotto = []
      for(let i =0; i < 100; i++) {
        let num = Math.floor(Math.random()*44) + 1;
        console.log(num)
        if(this.lotto.indexOf(num) === -1) {
          this.lotto.push(num)
          if (this.lotto.length === 6 ){
            break
          }
        } 
      }
    }
  }
}
</script>