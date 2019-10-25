<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'  
export default {
  name: 'Demo',
  data () {
    return {
      lists:[]
    }
  },
   methods:{
     fun(){
       axios({
         method:'get',
         url:'http://47.96.117.121:7002/home'
       }).then(res=>{
         console.log(res)
       }).catch(error=>{

       })
     }
  },
  mounted(){
    this.fun()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
