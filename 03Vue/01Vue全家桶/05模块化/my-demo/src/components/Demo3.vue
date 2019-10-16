<template>
  <div class="container">
    demo3
</div>
</template>

<script>
var name = 'amy';
var age = 18;
var hobby = '玩';

//导出的方式有二种 export(可以有多个)  export default（仅有一个）
//export {name,age,hobby};
//别名  as
//export {name as v1,age as v2 ,hobby as v3};
//函数
function add(x,y){
    return x+y
};
//export {add};  //导出函数

//export default（仅有一个）
export default {
    name:'abc',
    age:20
}

// export default {
//   name: 'Demo',
//   data () {
//     return {
        
//     }
//   },
//   methods:{
     
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
