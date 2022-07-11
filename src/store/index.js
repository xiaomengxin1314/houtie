import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  getters: {
  },
  mutations: {
    setUser (state, plyload) {
      state.user = plyload
    }
  },
  actions: {
  },
  modules: {
  }
})
