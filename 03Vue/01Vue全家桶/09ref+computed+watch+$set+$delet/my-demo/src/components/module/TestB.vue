<template>
  <div>
    {{title}}
  </div>
</template>

<script>
import Button from '../common/Button'
export default {
  name: 'Demo',
  data () {
    return {
      title:'testB组件',
    }
  },
  components:{
    Button
  },
   methods:{
     fun(){
       return 1000;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
