<template>
  <div>
    <button @click="getDogImage">멍멍아 이리온</button><br><br>
    <img v-if="imgSrc" :src="imgSrc" alt="#"><br>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name:'DogComponent',
  data() {
    return {
      imgSrc: null,
    }
  },
  methods:{
    getDogImage() {
      const dogImageSearchURL = 'https://dog.ceo/api/breeds/image/random'
      
      axios({
        method: 'get',
        url: dogImageSearchURL
      })
        .then((response) => {
          const imgSrc = response.data.message
          this.imgSrc = imgSrc
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created() {
    this.getDogImage()
    console.log('Child created!')
    // 창 켜면 바로 실행됨. 조작 못함
  },

  // mounted의 시점은 dom연결 이후이기 때문에 dom에 대한 조작 가능, created 는 불가능. 
  mounted() {
    const button = document.querySelector('button')
    button.innerText = '멍멍!'
    console.log('Child mounted!')
  },

  // 데이터가  변경되어 dom에 변화가 생겼을 때 실행
  updated() {
    console.log('새로운 멍멍이')
    console.log('Child updated!')
  }
}
</script>

<style>

</style>
