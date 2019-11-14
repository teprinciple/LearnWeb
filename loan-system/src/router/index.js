import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/page/login/Login';
import Layout from '@/layout/Layout';
import Home from '@/page/home/Home';
import LoanApply from '@/page/loan-apply/LoanApply';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            redirect: '/home',
            component: Layout,
            children: [{
                name: 'home',
                path: '/home',
                component: Home,
                meta: {
                    title: '首页'
                }
            }]
        },
        {
            path: '/loan-apply',
            component: Layout,
            redirect: '/loan-apply/index',
            children: [{
                name: 'loan-apply',
                path: '/loan-apply/index',
                component: LoanApply,
                meta: {
                    title: '贷款申请'
                }
            }]
        },

        {
            path: '/apply-manage',
            component: Layout,
            redirect: '/apply-manage/index',
            children: [{
                name: 'apply-manage',
                path: '/apply-manage/index',
                component: () =>
                    import ('@/page/apply-manage/ApplyManage'),
                meta: {
                    title: '申请管理'
                }
            }]
        }
    ]
});