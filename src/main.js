import Vue from 'vue'
import bootstrap from 'bootstrap'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  bootstrap,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
