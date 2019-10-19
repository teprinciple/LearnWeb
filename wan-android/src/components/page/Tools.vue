<template>
  <div class="flex-row app-content tools-div">
    <div class="div-tools-item" v-for="(item,index) in items" :key="index">
      <ToolsItem :tools="item" />
    </div>
  </div>
</template>

<script>
import ToolsItem from '@/components/listitem/ToolsItem'
import constance from '@/assets/js/constance.js'
export default {
  name: 'Home',
  data() {
    return {
      items: constance.toolsList
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
  margin-top: 20px;
  height: 100%;
}

.div-tools-item {
  width: 30%;
  margin: 10px 1%;
}
</style>
