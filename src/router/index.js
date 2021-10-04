import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginAccount from "@/components/LoginAccount";
import Dash from "@/views/Dash";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LoginAccount
  },
  {
    path: '/gerenciamento/:id',
    name: 'Gerenciamento',
    component: Dash
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
