import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/components/Full'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Full
    }
  ]
})
