<template>
  <div class="flex-row tab-div">
    <ul class="flex-row">
      <li v-for="(item,index) in tabs" :key="index">
        <router-link :to="item.path" class="tab-item">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tabs: [
        { name: '首页', path: '/home' },
        { name: '广场', path: '/user-article' },
        { name: '项目', path: '/project-index' },
        { name: '体系', path: '/tree' },
        { name: '公众号', path: '/weixin-list' },
        { name: '导航', path: '/navi' },
        { name: '项目分类', path: '/project' },
        { name: '工具', path: '/tools' }
      ]
    }
  }
}
</script>

<style scoped>
.tab-item {
  color: #276692;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 0;
  border-bottom: 3px solid white;
}

.tab-item:hover {
  border-bottom: 3px solid #276692;
}
</style>
