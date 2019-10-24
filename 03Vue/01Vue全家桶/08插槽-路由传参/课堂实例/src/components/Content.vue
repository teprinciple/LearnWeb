<template>
  <div id="app">
    <!-- 左侧导航 -->
    <div class="sidebar">
      <Sidebar /> 
    </div>
   <!-- 右侧内容 动态加载-->
    <div class="right-content">
      <!-- <router-view/>  -->
      <keep-alive>
         <router-view v-if="$route.meta.keepAlive"/> 
      </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/> 
    </div>
    
  </div>
</template>

<script>
import Sidebar from './module/Sidebar'

export default {
  data(){
    return {

    }
  },
  components:{
    Sidebar
  }
}
</script>

<style>

</style>
