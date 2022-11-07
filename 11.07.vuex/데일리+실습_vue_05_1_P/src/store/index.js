import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [ 
      {
      title: '아메리카노',
      price: 3000,
      selected: true,
      image: 'https://source.unsplash.com/featured/?americano>'
      },
      {
      title: '라떼',
      price: 3500,
      selected: true,
      image: 'https://source.unsplash.com/featured/?americano>'
      },
      {
      title: '모카',
      price: 3800,
      selected: true,
      image: 'https://source.unsplash.com/featured/?americano>'
      },
    ],
    sizeList: [
      {
        name: 'small',
        pprice: 500,
        selected: true
      },
      {
        name: 'tall',
        pprice: 600,
        selected: true
      },
      {
        name: 'grande',
        pprice: 800,
        selected: true
      },
    ],
  },
  getters: {
  },
  mutations: {
    addOrder: function () {},
    updateMenuList(state, menuItem) {
      console.log(menuItem)
      state.menuList = state.menuList.map((menu) => {
        if (menuItem === menu)
      })
    },
    updateSizeList: function () {},
  },
  actions: {
    updateMenuList(context, menu) {
      context.commit('updateMenuList', menu)
    },
  },
  modules: {
  }
})