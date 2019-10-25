<!-- 首页右边小窗公共组件 -->
<template>
  <div class="window-div flex-column">
    <span class="flex-row">{{title}}</span>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallWindow',
  data() {
    return {};
  },
  props: ['title']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.window-div {
  width: 100%;
  background: white;
  border-radius: 3px;
}

span {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #333;
  padding-left: 10px;
  border-bottom: 2px solid #8db5d0;
}

span + div {
  width: 100%;
  min-height: 150px;
  padding: 10px;
}
</style>
