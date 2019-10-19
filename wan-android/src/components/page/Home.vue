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
import Banner from '@/components/common/Banner'

export default {
  name: 'Home',
  data() {
    return {
      banners: [
        {
          desc: 'Android高级进阶直播课免费学习',
          id: 23,
          imagePath:
            'https://wanandroid.com/blogimgs/67c28e8c-2716-4b78-95d3-22cbde65d924.jpeg',
          isVisible: 1,
          order: 0,
          title: 'Android高级进阶直播课免费学习',
          type: 0,
          url: 'https://url.163.com/4bj'
        },
        {
          desc: '一起来做个App吧',
          id: 10,
          imagePath:
            'https://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png',
          isVisible: 1,
          order: 0,
          title: '一起来做个App吧',
          type: 1,
          url: 'https://www.wanandroid.com/blog/show/2'
        },
        {
          desc: '',
          id: 6,
          imagePath:
            'https://www.wanandroid.com/blogimgs/62c1bd68-b5f3-4a3c-a649-7ca8c7dfabe6.png',
          isVisible: 1,
          order: 1,
          title: '我们新增了一个常用导航Tab~',
          type: 1,
          url: 'https://www.wanandroid.com/navi'
        },
        {
          desc: '',
          id: 20,
          imagePath:
            'https://www.wanandroid.com/blogimgs/90c6cc12-742e-4c9f-b318-b912f163b8d0.png',
          isVisible: 1,
          order: 2,
          title: 'flutter 中文社区 ',
          type: 1,
          url: 'https://flutter.cn/'
        }
      ]
    }
  },
  components: { Banner }
}
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
