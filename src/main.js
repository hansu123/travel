import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'

import store from './store'//引入vuex创建的store

//配置跨域访问保存session值选项

axios.defaults.withCredentials=true;

//配置到Vue实例中

Vue.prototype.axios=axios;

import 'swiper/dist/css/swiper.css'
import "../src/common/css/iconfont.css"


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//在这个里声名
  render: h => h(App)
})
