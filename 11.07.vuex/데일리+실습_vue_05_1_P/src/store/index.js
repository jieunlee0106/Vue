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
      selected: false,
      image: "https://source.unsplash.com/featured/?americano"
      },
      {
      title: '라떼',
      price: 4000,
      selected: false,
      image: 'https://source.unsplash.com/featured/?latte'
      },
      {
      title: '카푸치노',
      price: 4500,
      selected: false,
      image: 'https://source.unsplash.com/featured/?cappuccino'
      },
    ],

    sizeList: [
      {
        name: 'small',
        price: 0,
        selected: false
      },
      {
        name: 'midium',
        price: 500,
        selected: false
      },
      {
        name: 'large',
        price: 100,
        selected: false
      },
    ],

    optionList: [
      {
        name: '샷',
        price: 500,
        count: 0,
      },
      {
        name: '바닐라 시럽',
        price: 500,
        count: 0,
      },
      {
        name: '카라멜 시럽',
        price: 500,
        count: 0,
      },
    ]
  },
  getters: {
  },
  mutations: {

    },

  actions: {

  },
  modules: {
  }
})