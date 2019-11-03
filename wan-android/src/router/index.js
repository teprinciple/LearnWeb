import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/page/home/Home' // 首页
import UserArticle from '@/components/page/UserArticle' // 广场
import ProjectIndex from '@/components/page/ProjectIndex' // 项目
import Tree from '@/components/page/Tree' // 体系
import WeixinList from '@/components/page/WeixinList' // 公众号
import Navi from '@/components/page/Navi' // 导航
import Project from '@/components/page/Project' // 项目分类
import Tools from '@/components/page/Tools' // 工具

Vue.use(Router)

export default new Router({
    base: '/wanandroid/',
    linkActiveClass: 'tab-router-active',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/user-article',
            name: 'UserArticle',
            component: UserArticle,
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/project-index',
            name: 'ProjectIndex',
            component: ProjectIndex,
            meta: {
                keepAlive: false
            }
        },

        {
            path: '/tree',
            name: 'Tree',
            component: Tree,
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/weixin-list',
            name: 'WeixinList',
            component: WeixinList,
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/navi',
            name: 'Navi',
            component: Navi,
            meta: {
                keepAlive: false
            }
        },

        {
            path: '/project',
            name: 'Project',
            component: Project,
            meta: {
                keepAlive: false
            }
        },

        {
            path: '/tools',
            name: 'Tools',
            component: Tools,
            meta: {
                keepAlive: false
            }
        }
    ]
})