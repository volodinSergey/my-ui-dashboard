import { createRouter, createWebHistory } from 'vue-router'

import TestPage from '../../Test.page.vue'
import Test2Page from '../../Test2.page.vue'

const routes = [
    { path: '/', component: TestPage },
    { path: '/second', component: Test2Page },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
