import { createRouter, createWebHistory } from 'vue-router'

import ButtonPage from '@pages/Button.page.vue'

const routes = [
    { path: '/', component: ButtonPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
