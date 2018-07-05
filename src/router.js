import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Masterpiece from './views/Masterpiece.vue'
import About from './views/About.vue'
import Legal from './views/Legal.vue'

Vue.use(Router)

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/masterpiece/:masterpieceID',
                name: 'masterpiece',
                component: Masterpiece
            },
            {
                path: '/about',
                name: 'about',
                component: About
            },
            {
                path: '/legal',
                name: 'legal',
                component: Legal
            }
        ]
    })
}
