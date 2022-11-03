<template>
  <div id="app">
    <h1 style="color:gray;">예약 페이지</h1>
    <br>
    <br>
    <div>
      <h2 style="color: gray;">시간 선택</h2>
      <br>
      <br>
    </div>
    <div style="display: flex;">
      <div class="container">
      <button v-for="time in times" :key=time  @click="toggleBtn">{{ time }}</button>
      </div>
    </div>
    <br>
    <br>
    <hr style="color: #0F4C81;">
    <br>
    <br>
    <h3 style="display: flex;">선택 시간: {{selectTime}}</h3>

  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
    times: [
      "00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30",
      "05:00","05:30","06:00","06:30","07:00","08:30","09:00","09:30","10:00","10:30",
      "11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30",
      "16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00",
      "20:30","21:00","21:30","22:00","22:30","23:00","23:30",
      ],
      selectTime: []
    }
  },

  methods: {
    
    toggleBtn: function(event) {
      
      const targetTag = event.target
      const bookingTime = targetTag.innerText
      const index = this.selectTime.indexOf(bookingTime)

      if (index === -1) {
        if (this.selectTime.length === 5) {
          alert ('5타임 까지만 신청할 수 있습니다.')
          return 
        }
        targetTag.classList.add('selected')
        this.selectTime.push(bookingTime)
      } else {
        targetTag.classList.remove('selected')
        this.selectTime.splice(index, 1)
      }  
    },
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


.container {
  display: flex;
  gap: 20px 2%;
  flex-wrap: wrap;
}
 
button{
  width: 10%;
  border: 1px solid gray;
  border-radius: 30px;
}

.selected{
  color: wheat;
  background-color: #9fc9ee;
}

</style>
