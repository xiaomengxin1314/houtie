import Vue from 'vue'
import Vuex from 'vuex'
import { getToken } from '@/utils/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken()
  },
  getters: {
  },
  mutations: {
    setToken (state, plyload) {
      state.token = plyload
    }
  },
  actions: {
  },
  modules: {
  }
})
