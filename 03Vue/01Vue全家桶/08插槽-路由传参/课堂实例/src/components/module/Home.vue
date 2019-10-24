<template>
  <div>
    <!-- <Button :data="obj" :event="add" @e-child="handle"/>
    <Banner :data = "img" time="2000"/> -->
    <table class="table"> 
      <thead>
        <tr>
          <th>用户姓名</th>
          <th>用户性别</th>
          <th>所在城市</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td><button @click="jump()">跳转列表页</button></td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <!-- <td><router-link to="/home/info/100">跳转到详情页</router-link></td> -->
             <!-- <td><router-link to="/home/info?id=1000">跳转到详情页</router-link></td> -->
             <td><router-link :to="'/home/info/'+id">跳转到详情页</router-link></td>
             <!-- <td><router-link :to="{path:'/home/info',query:{id:id}}">跳转到详情页</router-link></td> -->
        </tr>
      </tbody>
    </table>
    <!-- <button @click="flag='TestA'" :class="flag=='TestA'?'selected':''">TestA</button>
		<button @click="flag='TestB'" :class="flag=='TestB'?'selected':''">TestB</button> -->
    <!-- 动态组件 -->
    <!-- <component :is="flag"></component> -->
    <!-- <keep-alive>
			<component :is="flag"></component>
		</keep-alive> -->
		
    <!-- 二级目录展示 -->
    <router-view/>
  </div>
</template>

<script>
import Banner from '../common/Banner'
import Button from '../common/Button'
import TestA from './TestA'
import TestB from './TestB'
export default {
  name: 'Demo',
  data () {
    return {
      title:'首页',
      obj:{
        color:'blue',
        title:'首页'
      },
      id:99,
      flag:'TestA',
      img:[require("@/assets/img/banner1.jpg"),
            require("@/assets/img/banner2.jpg"),
            require("@/assets/img/banner3.jpg"),
            require("@/assets/img/banner4.jpg")],
    }
  },
  components:{
      Banner,
      Button,
      TestA,
      TestB
  },
  methods:{
    handle(v){
      v()
    },
    add(){
      alert('add');
    },
    jump(){
      //$router vueRouter实例  $router.push()
      //$route  对象  $route.params    $route.query
      //路由跳转   声明式<router-link to="" >  编程式$router.push()
      //this.$router.push('/list');
      //this.$router.push({path:'/list'});  //根据路径
      //this.$router.push({name:'list'});  //根据名称
      //this.$router.push({path:'/home/info',query:{id:100}});  //根据名称
      this.$router.push({name:'homeInfo',params:{id:100}}); //注意   
      //this.$router.push({path:'/home/info',params:{id:100}});   //报错  报错  报错  提供了path后，params会忽略
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected {
  color:#f60;
}
</style>
