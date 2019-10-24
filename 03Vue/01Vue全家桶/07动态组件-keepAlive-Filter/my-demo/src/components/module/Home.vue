<template>
  <div>
    <Button :data="obj" :event="add" @e-child="handle"/>
    <Banner :data = "img" time="2000"/>

    <button @click="flag='TestA'" :class="flag=='TestA'?'selected':''">TestA</button>
		<button @click="flag='TestB'" :class="flag=='TestB'?'selected':''">TestB</button>
    <!-- 动态组件 -->
    <!-- <component :is="flag"></component> -->
    <keep-alive>
			<component :is="flag"></component>
		</keep-alive>
		
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
