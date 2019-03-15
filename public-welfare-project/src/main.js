// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Button from 'ant-design-vue/lib/button'
import Icon from 'ant-design-vue/lib/icon'
import Menu from 'ant-design-vue/lib/menu'
import Input from 'ant-design-vue/lib/input'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Input)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
