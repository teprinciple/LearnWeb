<template>
  <div id="app">
    <!-- 左侧导航 -->
    <div>
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/news">新闻</router-link>
        </li>
        <li>
          <router-link to="/list">列表</router-link>
        </li>
        <li>
          <router-link to="/other">其它</router-link>
        </li>
      </ul>
    </div>

    <!-- 右侧内容 动态加载-->
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
.active {
  color: red;
}
</style>
