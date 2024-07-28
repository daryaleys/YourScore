import './main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Football from './components/pages/Football.vue'
import Hockey from './components/pages/Hockey.vue'
import Boxing from './components/pages/Boxing.vue'
import MMA from './components/pages/MMA.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: Football
        },
        {
            path: '/football',
            name: 'Футбол',
            component: Football
        },
        {
            path: '/hockey',
            name: 'Хоккей',
            component: Hockey
        },
        {
            path: '/boxing',
            name: 'Бокс',
            component: Boxing
        },
        {
            path: '/mma',
            name: 'MMA',
            component: MMA
        },
    ]
})

createApp(App)
.use(router)
.mount('#app')
