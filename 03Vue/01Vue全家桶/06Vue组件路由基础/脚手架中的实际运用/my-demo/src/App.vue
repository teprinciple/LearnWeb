<template>
  <div id="app" class="flex-row container">
    <!-- 左侧导航 -->
    <div class="side flex-column">
      <SideTab :tabs="tabItems"></SideTab>
    </div>

    <!-- 右侧内容 动态加载-->
    <div class="content flex-column">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideTab from './components/SideTab'

export default {
  name: 'App',
  data () {
    return {
      tabItems: [
        { title: '首页', path: '/home' },
        { title: '新闻', path: '/news' },
        { title: '列表', path: '/list' },
        { title: '其他', path: '/other' }
      ]
    }
  },
  components: {
    SideTab
  }
}
</script>

<style>
.active {
  background: #008c8c !important;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.side {
  width: 180px;
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
}

.content {
  width: 1080px;
  height: 100%;
  margin: 0 auto;
}

.debug-red {
  border: 1px solid red;
}
</style>
