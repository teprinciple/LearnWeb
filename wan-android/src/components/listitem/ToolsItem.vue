<template>
  <div class="item-div flex-row debug-red">
    <img class="img-icon" src="https://www.wanandroid.com/resources/image/pc/tools/qrcode.png" />

    <div class="flex-column div-content">
      <span class="title">二维码生成</span>
      <span class="content">支持二维码在线生成，支持个性化二维码，支持个性化二维码</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-div {
  height: 100%;
  margin-top: 20px;
  align-items: center;
  background: white;
  border-radius: 4px;
  border: 1px solid white;
}

.item-div:hover {
  border: 1px solid #3498db;
}

.img-icon {
  width: 48px;
  height: 48px;
  margin: 0 10px;
}

.div-content {
  justify-content: center;
  padding-right: 10px;
}

.title {
  height: 32px;
  line-height: 32px;
  color: #3498db;
}

.content {
  width: 100%;
  color: #767676;
  font-size: 14px;
  line-height: 1.5em;
}
</style>
