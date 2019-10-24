<template>
  <div>
    {{title}}
    <!-- 路由获取参数http://localhost:8080/#/home/info/100  $route.params.id -->
    {{$route.params.id}}
    <!-- 路由获取参数/home/info?id=1000 -->
    {{$route.query.id}}
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      title:'我是详情页',
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
