import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/other',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
