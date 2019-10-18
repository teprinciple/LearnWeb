<template>
  <div class="div-hearder flex-row">
    <Tabbar />
  </div>
</template>


<script>
import Tabbar from '@/components/common/Tabbar';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    Tabbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div-hearder {
  width: 100%;
  height: 60px;
  background: white;
  align-items: center;
  /* 这里还不太懂 */
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.01), 0 1px 5px 0 rgba(0, 0, 0, 0.01),
    0 3px 1px -2px rgba(0, 0, 0, 0.1);
}
</style>
