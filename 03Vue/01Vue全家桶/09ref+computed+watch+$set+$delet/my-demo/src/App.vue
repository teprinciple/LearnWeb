<template>
  <div id="app">
    <Content />
  </div>
</template>

<script>
import Content from './components/Content'

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    Content
  }
}
</script>

<style>
@import './assets/css/index.css' ;
</style>
