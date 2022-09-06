import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import router from './router/index'
import App from './App.vue'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
