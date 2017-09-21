import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import HelloRouter from '@/components/HelloRouter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello-router',
      name: 'Hello Router',
      component: HelloRouter
    }
  ]
})
