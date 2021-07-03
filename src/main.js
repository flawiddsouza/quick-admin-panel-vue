import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import Home from '@/views//Home.vue'
import Container from '@/views/demos/Container.vue'
import DataTable from '@/views/demos/DataTable.vue'
import Loading from '@/views/demos/Loading.vue'
import ButtonsStyle1 from '@/views/demos/ButtonsStyle1.vue'
import Tabs from '@/views/demos/Tabs.vue'
import Modal from '@/views/demos/Modal.vue'
import Notify from '@/views/demos/Notify.vue'

import loading from '@/plugins/loading'
import notify from '@/plugins/notify'

const routes = [
    { path: '/', component: Home },
    { path: '/demos/container', component: Container },
    { path: '/demos/datatable', component: DataTable },
    { path: '/demos/loading', component: Loading },
    { path: '/demos/buttons-style-1', component: ButtonsStyle1 },
    { path: '/demos/tabs', component: Tabs },
    { path: '/demos/modal', component: Modal },
    { path: '/demos/notify', component: Notify },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App)
.use(router)
.use(loading)
.use(notify)
.mount('#app')
