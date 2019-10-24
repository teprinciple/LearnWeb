<template>
  <div>
    <button :style="{color:data.color}" @click="action()">{{data.title}}</button>
  </div>
</template>

<script>
export default {
  props:['data','event'],
  methods:{
    action(){
        this.$emit('e-child',this.event)     //发射   把子的值传给父
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
