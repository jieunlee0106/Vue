
<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div>
      <div>
        <h1>1. 음료를 고르세요,</h1>
        <button
        @click="selectCoffee"
        :class="{'selected-coffee':menuList[0].selected}">
          <img :src="menuList[0].image" width="30px;" height="30px" alt="">
          <div>
            {{ menuList[0].title }}
          </div>
          <div>
            {{ menuList[0].price }}원
          </div>
        </button>

        <button>
          <img :src="menuList[1].image" width="30px;" height="30px" alt="">
          <div>
            {{ menuList[1].title }}
          </div>
          <div>
            {{ menuList[1].price }}원
          </div>
        </button>

        <button>
          <img :src="menuList[2].image" width="30px;" height="30px" alt="">
          <div>
            {{ menuList[2].title }}
          </div>
          <div>
            {{ menuList[2].price }}원
          </div>
        </button>

      </div>
      <div>
        <h1>2. 사이즈를 고르세요,</h1>
        <div>e</div>
        <div>e</div>
        <div></div>
      </div>
      <div>
        <h1>3. 옵션을 고르세요,</h1>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div>
      <button>장바구니 담기</button>  
    </div>

    <div>
      <h1>주문 내역</h1>
      <p>총  건:  원</p>
      <div>
        <!-- <div><img src="" alt=""></img></div> -->
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    menuList() {
      return this.$store.state.menuList
    },    
  },
  methods: {
    selectCoffee() {
      this.$store.dispatch(' selectCoffee', this.menuList)
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

