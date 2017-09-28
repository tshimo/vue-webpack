import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/index/Hello'
import HelloRouter from '@/components/hello-router/HelloRouter'
import Beatles from '@/components/beatles/Beatles'
import Person from '@/components/person/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/hello-router',
      name: 'hello-router',
      component: HelloRouter
    },
    {
      path: '/beatles',
      name: 'beatles',
      component: Beatles
    },
    {
      path: '/beatles/:id',
      name: 'beatles-member',
      component: Person
    }
  ]
})
