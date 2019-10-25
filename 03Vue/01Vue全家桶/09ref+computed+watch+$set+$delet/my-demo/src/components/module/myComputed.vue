<template>
  <div>
    <p>计算属性  用来存储和处理数据  在模板中放入太多的逻辑 让模板重且难以维护</p>
  <div>
      张三购买-套餐A 
      <p>
        -单价<input type="number" v-model="info.price" />
      </p>
      <p>
        -数量<input type="number" v-model="info.count" />
       </p>
      <p>
        -配送费<input type="number" v-model="info.freight" />
      </p>
      <p>
        -折扣{{info.sale}}
      </p>
      <p>
        -总价：{{info.price*info.count*info.sale+info.freight}}
         -总价：{{total}}
      </p>

      <p>修改计算属性的值</p>
      <p>计算属性:{{num}}</p>
      <button @click="change()">修改</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      title:'计算属性',
      info:{
        price:20,
        count:1,
        sale:0.8,
        freight:5
      },
      n:0
    }
  },
  computed:{  //计算属性
      total(){
        if(this.info.count >5){
          return this.info.price*this.info.count*this.info.sale
        }else {
          return this.info.price*this.info.count*this.info.sale+this.info.freight
        } 
      },
      // num(){
      //   return 100
      // },
      num:{
        //读取一个变量时会触发get方法
        get:function(){
          return this.n;
        },
        //计算属性触发会执行set方法
        set:function(val){
          this.n = val;
        }
      }
  },
   methods:{
     change(){
       this.num = 1000;  //计算属性不能直接修改
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
