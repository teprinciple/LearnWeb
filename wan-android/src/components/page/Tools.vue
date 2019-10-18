<template>
  <div class="flex-row app-content tools-div">
    <div class="div-tools-item" v-for="(item,index) in items" :key="index">
      <ToolsItem />
    </div>
  </div>
</template>

<script>
import ToolsItem from '@/components/listitem/ToolsItem'
export default {
  name: 'Home',
  data() {
    return {
      items: ['', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }
  },
  components: {
    ToolsItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tools-div {
  flex-wrap: wrap;
  height: 100%;
}

.div-tools-item {
  width: 30%;
  height: auto;
  margin: 10px 1%;
}
</style>
