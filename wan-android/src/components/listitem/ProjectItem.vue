<template>
  <div class="item-container flex-row">
    <img
      class="cover"
      src="https://www.wanandroid.com/blogimgs/025c4573-38d9-4cdc-a591-685a73ac7163.png"
    />
    <div class="content-div flex-column">
      <span class="title">开源漫画项目，部分界面仿有妖气，Kotlin+MVVM+LiveData+协程+Retrofit</span>
      <span class="content">
        时光序 Flutter 版是仿照Android版本的时光序，从开始自学dart到基本完成开发历时一个多月,项目中基本使用到了flutter大部分基础widget，完成了大部分炫酷的特效交互,项目使用flutter 官方推荐的provider
        时光序 Flutter 版是仿照Android版本的时光序，从开始自学dart到基本完成开发历时一个多月,项目中基本使用到了flutter大部分基础widget，完成了大部分炫酷的特效交互,项目使用flutter 官方推荐的provider
      </span>
      <div class="bottom-div flex-row">
        <span class>2019-10-13</span>
        <span class style="margin-left:20px;">hjgkhk</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-container {
  height: 250px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #eee;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.cover {
  width: 140px;
  height: 100%;
}

.content-div {
  margin-left: 5px;
  height: 100%;
  width: 320px;
}

.title {
  width: 100%;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}
.title:hover {
  text-decoration: underline;
  color: #007fff;
}

.content {
  color: #767676;
  font-size: 14px;
  margin-top: 10px;
  overflow: hidden;
  flex: 1;
}

.bottom-div {
  color: #767676;
  font-size: 14px;
  height: 30px;
  align-items: center;
}
</style>
