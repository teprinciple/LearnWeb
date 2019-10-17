import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import List from '@/components/List'
import Other from '@/components/Other'

Vue.use(Router)

export default new Router({

    // 路由选中样式
    linkActiveClass: 'active',

    // 路由配置
    routes: [{
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
            component: Other
        }
    ]
})