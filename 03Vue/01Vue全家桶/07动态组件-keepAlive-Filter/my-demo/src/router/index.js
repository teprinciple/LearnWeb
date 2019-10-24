import Vue from 'vue'
import Router from 'vue-router'
//import Demo from '@/components/module/Demo'
//import Home from '@/components/module/Home'
import News from '@/components/module/News'
import List from '@/components/module/List'
import Other from '@/components/module/Other'
 
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
     // component: Home
     component: ()=>import('@/components/module/Home'),
     meta:{
       keepAlive:true  //需要缓存
     }
    },
    {
      path: '/news',
      component: News,
      meta:{
        keepAlive:false  //不需要缓存
      }
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
