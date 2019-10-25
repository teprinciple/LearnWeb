<template>
  <div class="flex-column">
    <Header />
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>-->

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
