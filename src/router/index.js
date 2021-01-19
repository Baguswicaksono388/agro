import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import TentangAgroJaya from '../views/TentangAgroJaya.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import store from '@/store'

//Containers
const Containers = () => import('@/components/dashboard/template/Containers');

// Views
const Dashboard = () => import('@/views/dashboard/Home');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tentangagrojaya',
    name: 'TentangAgroJaya',
    component: TentangAgroJaya
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  // {
  //   path: '/dashboard',
  //   name: 'Home',
  //   component: () => import('../views/dashboard/Home.vue'),
  //   // algoritma untuk mengecek bahwa client harus login terlebih dahulu
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'Login'
    //     })
    //   }
    //   // console.log('middleware');
    //   next()
    // }
  // },
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: Containers,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      }
    ],
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'Login'
        })
      }
      // console.log('middleware');
      next()
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
