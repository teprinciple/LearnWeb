// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/reset.css' // 全局引入重置css
import '@/assets/css/common.css' // 全局引入公用css

import '@/assets/iconfont/iconfont.css' // 引入字体图标

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})