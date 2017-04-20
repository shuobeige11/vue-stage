// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from './App'
import Router from './router'
import store from './store'

Vue.config.debug = true

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Router(),
  mode: 'history',
	base: '/'
})

sync(store, router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
/* eslint-disable no-new */
