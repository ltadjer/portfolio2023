import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Vue from 'vue' 


createApp(App).use(store).use(router).use(Vue).mount('#app')