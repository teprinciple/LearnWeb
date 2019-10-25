<template>
  <div>
    <p>$set 的作用：改变新增属性时，不会触发视图更新</p>
    <h1>姓名：{{user.name}}</h1>
    <h1>年龄：{{user.age}}</h1>
    <button @click="query()">查询年龄</button>
    <button @click="del()">删除年龄</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      user:{
        name:'abc'
      }
    }
  },
   methods:{
     query(){
       console.log(this.user);
       //this.user.age = 18;  //新添加属性，页面不会渲染
       this.$set(this.user,'age',18);
     },
     del(){
       console.log(this.user);
       // delete this.user.age; //删除页面不会渲染
        this.$delete(this.user,'age');
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
