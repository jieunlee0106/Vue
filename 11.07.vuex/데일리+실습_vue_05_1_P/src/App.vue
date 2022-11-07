<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div>

      <div>
        <h1>1. 음료를 고르세요</h1>
        <button
        v-for="coffee in menuList"
        :key="coffee.title"
         
        >
          <img :src="coffee.image" width="30px;" height="30px" alt="">
          <div @click="selectCoffee">
            {{ coffee.title }}
          </div>
          <div>
            {{ coffee.price }}원
          </div>
        </button>
      </div>

      <div>
        <h1>2. 사이즈를 고르세요</h1>
        <button
        v-for="size in sizeList"
        :key="size.name"
        >
          <div>
            {{ size.name}}
          </div>
          <div>
            {{ size.price }}원
          </div>
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
export default {
  name: 'App',
  data() {
    return {
      selectcoffee: []
    }
  },
  computed: {
    menuList() {
      return this.$store.state.menuList
    },    
    
    sizeList() {
      return this.$store.state.sizeList
    },  
    
    optionList() {
      return this.$store.state.optionList
    }
    
  },

  methods: {
    selectCoffee(event) {
      const targetTag = event.target
      const coffeeName = targetTag.innerText
      const index = this.selectcoffee.indexOf(coffeeName)
    
      if (index === -1) {
        if (this.selectcoffee.length === 1){
          alert ('커피는 한가지만 선택 가능합니다')
          return
        }
        targetTag.classList.add('selected-coffee')
        this.selectcoffee.push(coffeeName)
      }
      else {
        targetTag.classList.remove('selected-coffee')
        this.selectcoffee.splice(index, 1)
      }
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
