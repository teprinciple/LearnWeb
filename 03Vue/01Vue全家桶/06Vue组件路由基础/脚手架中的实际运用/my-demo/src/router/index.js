import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
import Home from '@/components/Home'
import News from '@/components/News'
import List from '@/components/List'
import Other from '@/components/Other'
 
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      component: Demo
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/other',
      component:  Other
    }
  ]
})
