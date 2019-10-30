<template>
  <div class="item-container flex-row">
    <img class="cover" :src="item.envelopePic" />
    <div class="content-div flex-column">
      <span class="title">{{item.title}}</span>
      <span class="content">{{item.desc}}</span>
      <div class="bottom-div flex-row">
        <span class>{{item.niceDate}}</span>
        <span class style="margin-left:20px;">{{item.author}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  props: ['item']
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
  margin-left: 10px;
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
