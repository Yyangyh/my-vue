// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { XHeader, ViewBox,ToastPlugin } from 'vux'
import axios from 'axios'
require('./mock')



Vue.config.productionTip = false

Vue.prototype.axios = axios
//axios.defaults.baseURL = '/api'
//axios.defaults.baseURL = process.env.API_HOST

Vue.use(ToastPlugin)
Vue.component('x-header', XHeader)
Vue.component('view-box', ViewBox)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
