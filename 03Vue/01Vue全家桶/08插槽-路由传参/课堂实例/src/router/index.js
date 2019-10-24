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
     },
     children:[{
        name:'homeInfo',
        path: '/home/info/:id',    //路由中定义http://localhost:8080/#/home/info/100  需要定义ID
       // path: '/home/info',//路由中定义这种方式home/info?id=1000 是不需要传ID
        component: ()=>import('@/components/module/Info'),
     }]
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
      name:'list',
      component: List
    },
    {
      path: '/other',
      component:  Other
    }
  ]
})
