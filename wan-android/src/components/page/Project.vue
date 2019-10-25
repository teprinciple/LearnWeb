<template>
  <div>
    <Paging style="margin-top: 30px" @onPageChange="onPageChange" />
  </div>
</template>

<script>
import Paging from '@/components/common/Paging';

export default {
  name: 'Home',
  data() {
    return {};
  },
  methods: {
    onPageChange(page) {
      console.log(page);
    }
  },
  components: { Paging }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
