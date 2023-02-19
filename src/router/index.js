import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/transfer',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: { auth: true }
  },
  {
    path: '/transfer/:wallet_token',
    name: 'Transfer',
    component: () => import('../views/Transfers'),
    meta: { auth: true }
  },
  {
    path: '/oauth/v1/auth',
    name: 'OAuth',
    component: () => import('../views/OAuth'),
    meta: { auth: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
    meta: { auth: false }
  },
  {
    path: '/recover',
    name: 'Recover',
    component: () => import('../views/Recover'),
    meta: { auth: false }
  },
  {
    path: '/reset-password',
    name: 'Repass',
    component: () => import('../views/Repas'),
    meta: { auth: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register'),
    meta: { auth: false }
  },
  {
    path: '/user-page',
    name: 'UserPage',
    component: () => import('../views/UserPage'),
    meta: { auth: true }
  },
  {
    path: '/update-password',
    name: 'UpdatePassword',
    component: () => import('../views/UpdatePassword'),
    meta: { auth: true }
  },
  {
    path: '/qwasar-check',
    name: 'QwasarCheck',
    component: () => import('../views/QwasarCheck'),
    meta: { auth: false }
  },
  {
    path: '/ranks',
    name: 'Ranks',
    component: () => import('../views/Ranks'),
    meta: { auth: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
