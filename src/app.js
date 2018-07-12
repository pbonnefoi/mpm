import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap'
import { createRouter } from './router'
import store from './store'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueResource)

export function createApp () {
    // create router instance
    const router = createRouter()
    sync(store, router)

    const app = new Vue({
        bootstrap,
        router,
        store,
        render: h => h(App)
    })
    store.actions.getSingleMasterpiece(store)
    return { app, bootstrap, router, store }
}