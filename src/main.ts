import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import VueRouter from 'vue-router'


import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
// import SignIn from './views/SignIn.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    // { path: '/signin', component: SignIn },
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')

