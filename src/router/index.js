import Vue from 'vue'
import VueRouter from 'vue-router'
import vStartPage from '../components/v-start-page.vue'
import vList from '../components/v-list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: vStartPage
  },
  {
    path: '/list',
    name: 'list',
    component: vList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
