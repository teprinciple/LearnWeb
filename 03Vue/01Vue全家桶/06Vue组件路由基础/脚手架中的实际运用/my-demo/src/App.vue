<template>
  <div id="app">
    <!-- 左侧导航 -->
    <div>
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/news">新闻</router-link>
        </li>
        <li>
          <router-link to="/list">列表</router-link>
        </li>
        <li>
          <router-link to="/other">其它页</router-link>
        </li>
      </ul>
    </div>
   <!-- 右侧内容 动态加载-->
    <div>
      <router-view/> 
    </div>
    
  </div>
</template>

<script>
//import obj from './components/Demo3'

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    //Demo3
  }
}
</script>

<style>
		.active {
			color:red;
		}
</style>
