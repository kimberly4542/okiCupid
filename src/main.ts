import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import VueRouter from 'vue-router'


import HomeView from './views/HomeView.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },

  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')

