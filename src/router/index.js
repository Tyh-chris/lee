import Vue from 'vue'
import Router from 'vue-router'
import SickRoom from '@/components/SickRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SickRoom',
      component: SickRoom
    }
  ]
})
