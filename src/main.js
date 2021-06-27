import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import Home from '@/views//Home.vue'
import Container from '@/views/demos/Container.vue'
import DataTable from '@/views/demos/DataTable.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/demos/container', component: Container },
    { path: '/demos/datatable', component: DataTable },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app')
