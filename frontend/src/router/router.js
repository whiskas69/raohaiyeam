import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue') // set home as path '/'
  },
  {
    path: '/phone/detail/:id',
    name: 'detailPhone',
    component: () => import('../views/DetailPhone.vue') // set home as path '/'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue') // set home as path '/'
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterPage.vue') // set home as path '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router