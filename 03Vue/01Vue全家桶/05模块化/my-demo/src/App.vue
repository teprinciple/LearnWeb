<template>
  <div id="app">
    <!-- <Demo3 /> -->
    <!-- <h1>{{name}}</h1>
    <h1>{{add(10,20)}}</h1> -->
    <h1>{{obj.name}}</h1>
    <router-view/> 
  </div>
</template>

<script>
//import Demo3 from './components/Demo3'  
//import {name,age,hobby} from './components/Demo3' 
//别名 
//import {v1,v2,v3} from './components/Demo3' 
//导入函数
//import {add as v} from './components/Demo3' 
//通过export default（仅有一个）导出，如何导入？
import obj from './components/Demo3'

export default {
  name: 'App',
  data(){
    return {
      //name:name,
      //name:v1,
      //add:v,
      obj:obj
    }
  },
  components:{
    //Demo3
  }
}
</script>

<style>

</style>
