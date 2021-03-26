import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/postDetails/:id",
    name: "postDetails",
    component: () => import(/*webpackChunkName: "postDetails" */ "../views/PostDetails.vue")
  },
  {
    path: "*",
    name: "notFound",
    component: () => import(/*webpackChunkName: "postDetails" */ "../views/NotFound.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
