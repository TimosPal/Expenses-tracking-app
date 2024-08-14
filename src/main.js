import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initPlugins } from '@/plugins/index.js'

import '@/assets/styles/main.scss'

const app = createApp(App)

app.use(router)

initPlugins(app)

app.mount('#app')
