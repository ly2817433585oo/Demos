import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../node_modules/ol/ol.css'
// import Video from 'video.js'
// import 'video.js/dist/video-js.css'

Vue.use(ElementUI)
// Vue.prototype.$video = Video
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
