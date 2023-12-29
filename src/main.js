import { createApp } from 'vue'
import App from './App.vue'
import storage from './storage'
import router from './router'

const app = createApp(App)

app.use(storage)
app.use(router)
app.mount('#app')
