<template>
  <div class="item-div flex-row" @click="jump(tools.url)">
    <div>
      <img class="img-icon" :src="tools.img" />
    </div>

    <div class="flex-column div-content">
      <span class="title">{{tools.title}}</span>
      <span class="content">{{tools.des}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {
    jump(url) {
      window.open(url, '_blank')
    }
  },
  props: ['tools']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-div {
  height: 94px;
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
  object-fit: fill;
}

.div-content {
  justify-content: center;
  margin-right: 10px;
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
