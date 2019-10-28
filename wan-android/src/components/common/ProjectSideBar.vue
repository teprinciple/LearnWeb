<template>
  <div class="container flex-column">
    <span
      class="item"
      v-for="(item,index) in list"
      :key="index"
      :class=" currentIndex==index ? 'selected' : ''"
      @click="setSelected(index,item)"
    >{{item.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentIndex: 0
    };
  },
  props: ['list'],
  methods: {
    setSelected(index, item) {
      this.currentIndex = index;
      this.$emit('sideItem', item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
}
.item {
  height: 32px;
  width: 100%;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #dbe2e8;
  border-bottom: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item:last-child {
  border-bottom: 1px solid #dbe2e8;
}

.selected,
.item:hover {
  color: #2782ef;
}
</style>
