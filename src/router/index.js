import { createRouter, createWebHistory } from 'vue-router'
import LoginComp from '../components/LoginComp.vue'
import AboutView from '../views/AboutView.vue'
import MainView from '../views/MainView.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginComp
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
