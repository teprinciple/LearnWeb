<!-- 分页 -->
<template>
  <div class="paging-div flex-row">
    <button class="paging-item" :disabled="currentPage === 1" @click="setCurrentPage(1)">首页</button>
    <button class="paging-item" :disabled="currentPage === 1" @click="move2Pre">上一页</button>

    <button
      class="paging-item"
      v-for="(v,i) in totalPages"
      :key="i"
      @click="setCurrentPage(v)"
      :disabled="currentPage == v"
    >{{v}}</button>

    <button class="paging-item" :disabled="currentPage === totalPages" @click="move2Next">下一页</button>
    <button
      class="paging-item"
      :disabled="currentPage === totalPages"
      @click="setCurrentPage(totalPages)"
    >末页</button>

    <span class="flex-row" style="margin:0 15px">
      共
      <span class="num">{{totalPages}}</span>页
    </span>

    <span class="flex-row">
      共
      <span class="num">{{totalNums}}</span>条记录
    </span>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      totalNums: 124,
      totalPages: 8,
      currentPage: 3
    };
  },
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
    move2Pre() {
      this.currentPage -= 1;
    },
    move2Next() {
      this.currentPage += 1;
    }
  },
  watch: {
    currentPage: function(newValue, oldValue) {
      this.$emit('onPageChange', newValue);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paging-div {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-size: 13px;
}

.paging-item {
  height: 30px;
  min-width: 30px;
  line-height: 30px;
  color: #2782ef;
  text-align: center;
  border: 1px solid #2782ef;
  margin: 0 2px;
  padding: 0 8px;
  box-shadow: none;
  background: transparent;
}

button.paging-item:disabled {
  color: #767676;
  border: 1px solid #c1c1c1;
  background: #e2e2e2;
  text-decoration: none;
}

.paging-item:hover {
  text-decoration: underline;
}

.num {
  color: #2782ef;
  margin: 0 4px;
  align-self: center;
}
</style>
