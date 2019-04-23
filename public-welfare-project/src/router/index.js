import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/MainContainer'
import Login from '@/components/login/Login'
import HomePage from '@/components/HomePage'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/home',
          component:  HomePage
        }
      ]
    }
  ]
})
