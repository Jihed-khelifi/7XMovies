import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Footer from './component/Footer.vue'
import Header from './component/Header.vue'

const app = createApp(App)
app.use(router)

app.component('app-footer', Footer) 
app.component('app-header', Header)
app.mount('#app')