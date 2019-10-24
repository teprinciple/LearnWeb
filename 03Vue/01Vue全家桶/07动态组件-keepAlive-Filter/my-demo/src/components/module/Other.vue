<template>
  <div>
    {{title}}
    <button style="color:blue">按钮</button>
    <button :style="{color:obj.color}">{{obj.title}}</button>
    <Button :data="obj" :event="del" @e-child="abc"/>
  </div>
</template>

<script>
import Button from '../common/Button'
export default {
  name: 'Demo',
  data () {
    return {
      title:'其它页',
      obj:{
        color:'red',
        title:'红色按钮'
      }
    }
  },
  components:{
    Button
  },
   methods:{
     abc(v){  //接收事件
        v()
     },
    del(){
      alert("del")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
