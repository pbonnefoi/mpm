import Vue from 'vue'
import App from './App.vue'
import mdl from 'material-design-lite'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
import './registerServiceWorker'
import 'material-design-lite/dist/material.blue_grey-orange.min.css'

export function createApp () {
    // create router instance
    const router = createRouter()
    const store = createStore()
    sync(store, router)

    const app = new Vue({
        mdl,
        router,
        store,
        render: h => h(App)
    })

    return { app, mdl, router, store }
}