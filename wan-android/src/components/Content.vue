<template>
  <div class="flex-column">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/common/Header';

export default {
  name: 'Content',
  components: {
    Header
  }
};
</script>

<style>
</style>
