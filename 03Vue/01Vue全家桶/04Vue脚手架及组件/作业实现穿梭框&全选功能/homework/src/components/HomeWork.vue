<template>
  <div>
    这是我的vue
    <div>
      <div>请选择</div>
      <div></div>
    </div>
    <div>中间</div>
    <div>
      <div>已选择</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWork',
  data() {
    return {
      a: ''
    };
  },
  methods: {
    add() {
      return 'hhh';
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
