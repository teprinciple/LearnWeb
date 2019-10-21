<template>
  <div class="app-content flex-row">
    <div class="content flex-column">
      <div class="div-banner">
        <Banner :list="banners" />
      </div>
    </div>

    <div class="side"></div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner';
import api from '@/http/api.js';

export default {
  name: 'Home',
  data() {
    return {
      banners: []
    };
  },
  components: { Banner },
  methods: {
    getBanners() {
      api
        .getBanners()
        .then(res => {
          console.log(res);
          this.banners = res.data;
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.getBanners();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  flex: 1;
  height: 100%;
  margin-top: 30px;
}

.div-banner {
  width: 580px;
}

.side {
  margin-top: 30px;
  width: 300px;
  height: 1500px;
  background: white;
}
</style>
