import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTodo from '../views/AllTodo.vue'
import ImportantTodo from '../views/ImportantTodo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component: AllTodo
  },
  {
    path: '/important',
    name: 'important',
    component: ImportantTodo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
