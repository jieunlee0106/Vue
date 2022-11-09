import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    pickLunch: null,
  },

  getters: {
  },
  
  mutations: {
    PICK_LUNCH(state, selected) {
      state.pickLunch = selected
      console.log(selected)

    }
  },

  actions: {
    selectMenu(context, selected) {
      context.commit('PICK_LUNCH', selected)
    }
  },
  modules: {
  }
})
