<template>
  <div class="demo-table">
    <table class="table"> 
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="checkAll" @change = "checkAllChange()">
          </th>
          <th>用户姓名</th>
          <th>用户性别</th>
          <th>所在城市</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list,i) in lists" :key = "i">
            <th><input type="checkbox" v-model="list.check" @change="curChange()"></th>
            <td>{{list.name}}</td>
            <td>{{list.sex}}</td>
            <td>{{list.city}}</td>
            <td><button disabled="true">删除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      checkAll:false,  //全选 的状态
      lists:[
        {name:'刘德华1',sex:'男',city:'香港',check:true},
        {name:'徐小凤',sex:'女',city:'北京',check:false},
        {name:'陈雪凝',sex:'女',city:'上海',check:false},
        {name:'刘德华4',sex:'男',city:'香港',check:false},
        {name:'刘德华12345',sex:'男',city:'香港',check:true}
      ]
    }
  },
  methods:{
    checkAllChange(){
      // for(var i = 0;i<this.lists.length;i++){
      //   this.lists[i].check = this.checkAll;
      // };
      // var _this = this;
      // this.lists.forEach(function(item){
      //   item.check = _this.checkAll;
      // })
      this.lists.forEach(item=>{
        item.check = this.checkAll;
      })
    },
    curChange(){
    //思路分析
    //1、check = true的个数
    //2、如果个数=5，全选 打勾，如果个数小于5，全选取消勾
    var selected = this.lists.filter(function(v){
      return v.check == true;
    }); 
    //三目运算
    selected.length == this.lists.length ? this.checkAll = true:this.checkAll = false;
    //this.checkAll = this.lists.every(function(v){return v.check});
    //every()用于检测数组所有的元素是否都符合指定条件
    //有一个不满 足 返回false    都满足  返回true

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-table .table{
    width: 70%;
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
}
.demo-table .table td,
.demo-table .table th{
    border: 1px solid #ddd;
    padding: 10px;
}
.demo-table .table thead tr {
	background:#1f76b3;
	color:#fff;
} 

</style>
