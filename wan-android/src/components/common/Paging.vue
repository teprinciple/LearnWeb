<!-- 分页 -->
<template>
  <div class="paging-div flex-row">
    <!-- 首页，上一页 -->
    <button class="paging-item" :disabled="currentPage === 1" @click="setCurrentPage(1)">首页</button>
    <button class="paging-item" :disabled="currentPage === 1" @click="move2Pre">上一页</button>

    <!-- 省略号左边 -->
    <button
      class="paging-item"
      v-for="(v,i) in leftItems"
      :key="i"
      @click="setCurrentPage(v)"
      :disabled="currentPage == v"
    >{{v}}</button>

    <!-- 1、以...为分割；左边一组数据，右边一组数据
    2、左边小于为前4的时候，为[1,2,3,4,5]
    3、左边大于等于5的时候，当前页为n，左边数组是[n-2,n-1,n,n+1,n+2]
    4、右侧数据:总数据m [m-4,m-3,m-2,m-1,m],如果当前页 = m-3 时显示右侧数据-->
    <!-- 省略号 -->
    <span class="dots" v-if="showDots">. . .</span>

    <!-- 省略号右边 -->
    <button
      class="paging-item"
      v-for="(v,i) in rightItems"
      :key="i"
      @click="setCurrentPage(v)"
      :disabled="currentPage == v"
    >{{v}}</button>

    <!-- 末页，下一页 -->
    <button class="paging-item" :disabled="currentPage === totalPages" @click="move2Next">下一页</button>
    <button
      class="paging-item"
      :disabled="currentPage === totalPages"
      @click="setCurrentPage(totalPages)"
    >末页</button>

    <!-- 总页数，总记录数 -->
    <span class="flex-row" style="margin:0 15px;align-items:center">
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
      // currentPage: 0,
      itemRange: 5, // 连续的个数
      leftItems: [],
      rightItems: []
    };
  },
  props: ['totalPages', 'totalNums', 'currentPage'],
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
    move2Pre() {
      this.currentPage -= 1;
    },
    move2Next() {
      this.currentPage += 1;
    },
    calculateItems() {
      if (this.totalPages <= this.itemRange) {
        // 当总数小于itemRange时
        let leftArr = [];
        let rightArr = [];
        for (let index = 1; index <= this.totalPages; index++) {
          leftArr.push(index);
        }
        this.leftItems = leftArr;
        this.rightItems = rightArr;
      } else {
        if (this.currentPage < this.itemRange) {
          // 前5页
          let leftArr = [];
          for (let index = 1; index <= this.itemRange; index++) {
            leftArr.push(index);
          }
          this.leftItems = leftArr;
          this.rightItems = [this.totalPages];
        } else if (this.currentPage > this.totalPages - this.itemRange + 1) {
          // 后5页
          let rightArr = [];
          for (let index = 1; index <= this.itemRange; index++) {
            rightArr.push(this.totalPages - this.itemRange + index);
          }
          this.leftItems = [1];
          this.rightItems = rightArr;
        } else {
          // 中间
          let leftArr = [];
          let rightArr = [];
          for (let index = 0; index < this.itemRange; index++) {
            leftArr.push(this.currentPage + (index - 2));
          }
          this.leftItems = leftArr;
          this.rightItems = [this.totalPages];
        }
      }
    }
  },
  computed: {
    // 是否显示 ...
    showDots() {
      return this.totalPages > this.itemRange;
    }
  },
  watch: {
    currentPage: function(newValue, oldValue) {
      this.$emit('onPageChange', newValue);
      this.calculateItems();
    },
    totalPages: function(newValue, oldValue) {
      this.calculateItems();
    }
  },
  mounted() {
    this.calculateItems();
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

.dots {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>
