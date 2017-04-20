import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import register from './modules/register'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    register
  },
  strict: process.env.NODE_ENV !== 'production'
})
