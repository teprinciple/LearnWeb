<template>
  <div>
    姓名：<input type="text" v-model="name" />
    年龄<input type="text" v-model="age" />
    <p>监听姓名的变化：{{nameChange}}</p>
    <p>计算属性：{{nameChange2}}</p>

    <p>深度监听</p>
    姓名：<input type="text" v-model="user.name" />
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      name:'testB组件',
      nameChange:'',
      age:18,
      user:{
        name:'abc',
        age:18
      }
    }
  },
   methods:{
     fun(){
       return 1000;
     }
  },
  watch:{
    name:function(newValue,oldValue){
      console.log('新的名字'+newValue+'---老的名字'+oldValue);
      this.nameChange = '新的名字'+newValue+'---老的名字'+oldValue+'---年龄'+this.age
    },
    //几种命名
    // 'user.name'(newValue,oldValue){
    //    console.log('新的名字'+newValue+'---老的名字'+oldValue);
    // },
    user:{
      handler:(newValue,oldValue)=>{   //执行函数  默认执行
        console.log('新的名字'+newValue+'---老的名字'+oldValue);
      },
      deep:true //内部属性   深度监听
    },

  },
  computed:{  //计算属性
      nameChange2(){
       return '名字'+this.name+'---年龄'+this.age
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
