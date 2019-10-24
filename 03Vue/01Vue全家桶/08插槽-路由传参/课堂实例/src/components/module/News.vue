<template>
  <div>
    {{title}}
    <Banner :data="lists" time="1000"/>
  </div>
</template>

<script>
import Banner from '../common/Banner'
export default {
  name: 'Demo',
  data () {
    return {
      title:'新闻页',
      lists:[
            require("@/assets/img/3.jpg"),
            require("@/assets/img/4.jpg"),
            require("@/assets/img/5.jpg")]
    }
  },
  components:{
      Banner
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
