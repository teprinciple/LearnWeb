import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/page/login/Login';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: () =>
                import ('@/page/home/Home')
        }
    ]
});