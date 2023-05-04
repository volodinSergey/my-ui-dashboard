import { createApp } from 'vue'
import { router } from '@app/router/router'
import { useUIKit } from '@shared/ui-kit'
import App from './App.vue'

import '@app/styles/main.scss'

export const app = createApp(App)

useUIKit()

app
    .use(router)
    .mount('#app')
