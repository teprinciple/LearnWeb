<template>
  <div>
    <p>ref定义在普通的元素上，获取当前的DOM元素</p>
    <input type="text" ref="input"/>
    <h1 ref="h1">hello h1</h1>
    <button @click="fun()">成为焦点</button>

    <p>获取子组件的数据,ref定义在组件上，获取当前组件的vue实例</p>
    <TestB ref="testB"></TestB>
  </div>
</template>

<script>
import TestB from './TestB'
export default {
  name: 'Demo',
  data () {
    return {
      title:'ref',
    }
  },
  components:{
    TestB
  },
   methods:{
     fun(){
       this.$refs.input.focus();
       //this.$refs.h1.innerHTML = 'hello world';
        //this.$refs.h1.innerHTML = this.$refs.testB.title; //子组件中的属性值
        this.$refs.h1.innerHTML = this.$refs.testB.fun();
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
