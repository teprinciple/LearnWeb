// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'   //./当前目录   ../上一级目录
import axios from 'axios'  
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/font/iconfont.css'  //字体图标


Vue.config.productionTip = false   //阻止生产模式的消息

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //router实例注入到vue实例中
  components: { App },    //组件
  template: '<App/>'      //模块内容
})
