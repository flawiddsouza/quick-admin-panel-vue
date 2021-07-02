import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import Home from '@/views//Home.vue'
import Container from '@/views/demos/Container.vue'
import DataTable from '@/views/demos/DataTable.vue'
import Loading from '@/views/demos/Loading.vue'
import ButtonsStyle1 from '@/views/demos/ButtonsStyle1.vue'

import loading from './plugins/loading'

const routes = [
    { path: '/', component: Home },
    { path: '/demos/container', component: Container },
    { path: '/demos/datatable', component: DataTable },
    { path: '/demos/loading', component: Loading },
    { path: '/demos/buttons-style-1', component: ButtonsStyle1 },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App)
.use(router)
.use(loading)
.mount('#app')
