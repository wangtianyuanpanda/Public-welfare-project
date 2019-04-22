import Vue from 'vue'
import Router from 'vue-router'
// import Main from '@/components/MainContainer'
import Login from '@/components/login/Login'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
