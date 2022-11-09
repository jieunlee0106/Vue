<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div>

      <div>
        <h1>1. 음료를 고르세요</h1>
        <button
        v-for="coffee in menuList"
        :key="coffee.title"
        @click="selectCoffee"
        :value=coffee
        >
          <img :src="coffee.image" width="30px;" height="30px" alt="">
            <h5>{{ coffee.title }}</h5>
            <p>{{ coffee.price }}원</p>
        </button>
      </div>

      <div>
        <h1>2. 사이즈를 고르세요</h1>
        <button
        v-for="size in sizeList"
        :key="size.name"
        @click="selectSize"
        >
          <h5>
            {{ size.name}}
          </h5>
          <p>
            {{ size.price }}원
          </p>
        </button>
      </div>

      <div>
        <h1>3. 옵션을 고르세요</h1>
        <div
        v-for="option in optionList"
        :key="option.name"
        >
          <div>
            {{ option.name }}
          </div>
          <div>
            <button>-</button>
            {{ option.count }}
            <button>+</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <button>장바구니 담기</button>
    </div>

    <div>
      <h1>주문 내역</h1>
    </div>
    
  </div>
</template>


<script>
import  {mapState} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      selectcoffee: [],
      selectsize: [],
      coffeePrice: [],
      totalPrice: 0,
      option1: 0,
      option2: 0,
      option3: 0,
    }
  },
  computed: {
    ...mapState(['menuList', 'sizeList', 'optionList']),
    // menuList() {
    //   return this.$store.state.menuList
    // },

    // sizeList() {
    //   return this.$store.state.sizeList
    // },

    // optionList() {
    //   return this.$store.state.optionList
    // }

  },

  methods: {

    selectCoffee(event) {
      const targetTag = event.currentTarget
      const coffee = targetTag.querySelector('h5').innerText
      // const price = targetTag.querySelector('p').innerText
      const index = this.selectcoffee.indexOf(coffee)

      if (index === -1) {
        if (this.selectcoffee.length === 1){
          alert ('커피는 한가지만 선택 가능합니다')
          return
        }
        targetTag.classList.add('selected-coffee')
        this.selectcoffee.push(coffee)
        if (coffee === '아메리카노') {
          this.totalPrice += 3000
  
        } 
      }
      else {
        targetTag.classList.remove('selected-coffee')
        this.selectcoffee.splice(index, 1)
      }
      console.log(targetTag)
      console.log(coffee)

    },

    selectSize(event) {
      const targetTag = event.currentTarget
      console.log(targetTag)
      const size = targetTag.querySelector('h5').innerText
      const sizePrice = targetTag.querySelector('p').innerText
      const index = this.selectsize.indexOf(size)

      if (index === -1) {
        if (this.selectsize.length === 1){
          alert ('사이즈는 한가지만 선택 가능합니다')
          return
        }
        targetTag.classList.add('selected-size')
        this.selectsize.push(size)
      }
      else {
        targetTag.classList.remove('selected-size')
        this.selectsize.splice(index, 1)
      }

      console.log(targetTag)
      console.log(size)
      console.log(sizePrice)

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

.selected-coffee {
  background-color: aquamarine;
}

.selected-size {
  background-color: aquamarine;
}
</style>