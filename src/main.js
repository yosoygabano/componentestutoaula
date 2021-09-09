import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/tailwind.css'


createApp(App).use(store).use(VueAxios, axios).use(router).mount('#app')
