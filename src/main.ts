import { createApp } from 'vue'
import { router } from './app/router/router'

import App from './App.vue'

import './app/styles/main.scss'

const app = createApp(App)

app
    .use(router)
    .mount('#app')
