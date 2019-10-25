<template>
  <div class="app-content flex-row">
    <div class="content flex-column">
      <div class="div-banner">
        <Banner :list="banners" />
      </div>
    </div>

    <div class="side">
      <SmallWindow title="常用工具">这里面是插槽中的内容</SmallWindow>

      <SmallWindow title="联系我们" class="margin-top-20">
        <h1>这里面是插槽中的内容</h1>
      </SmallWindow>

      <SmallWindow title="大家都在搜" class="margin-top-20">
        <Banner :list="banners" />
      </SmallWindow>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner';
import SmallWindow from '@/components/common/SmallWindow';
import api from '@/http/api.js';

export default {
  name: 'Home',
  data() {
    return {
      banners: []
    };
  },
  components: { Banner, SmallWindow },
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
  /* background: white; */
}
</style>
