<template>
  <div class="app-content flex-row">
    <div class="side flex-column">
      <ProjectSideBar :list="treeList" @sideItem="sideItemChange" />
    </div>

    <div class="content flex-column">
      <div class="div-list flex-row">
        <ProjectItem class="item" v-for="(item,index) in list" :key="index" :item="item" />
      </div>

      <Paging
        style="margin:30px 0"
        @onPageChange="onPageChange"
        :totalPages="totalPages"
        :totalNums="totalNums"
      />
    </div>
  </div>
</template>

<script>
import Paging from '@/components/common/Paging';
import ProjectItem from '@/components/listitem/ProjectItem';
import ProjectSideBar from '@/components/common/ProjectSideBar';
import api from '@/http/api.js';

export default {
  name: 'Home',
  data() {
    return {
      currentPage: 1,
      totalPages: 8,
      totalNums: 123,
      cid: 0,
      list: [],
      treeList: []
    };
  },
  methods: {
    // 分页改变
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
      this.getProjectTree();
    },

    // 类型改变
    sideItemChange(sideItem) {
      this.cid = sideItem.courseId;
      this.currentPage = 1;
      console.log(sideItem);
      this.getProjectTree();
    },

    // 获取左边分类列表
    getProjectTree() {
      api
        .getProjectTree()
        .then(res => {
          if (res.length > 0) {
            this.cid = res[0].courseId;
          }
          this.treeList = res;

          this.getProjectList();
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 获取项目列表
    getProjectList() {
      api
        .getProjectList(this.currentPage, this.cid)
        .then(res => {
          console.log(res);
          this.list = res.datas.slice(6);
          this.currentPage = res.curPage;
          this.totalPages = res.pageCount;
          this.totalNums = res.total;
        })
        .catch(err => {});
    }
  },
  components: { Paging, ProjectItem, ProjectSideBar },
  mounted() {
    this.getProjectTree();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-content {
  margin: 30px auto;
  background: white;
}

.side {
  margin-top: 30px;
  margin-left: 30px;
  width: 120px;
}

.content {
  flex: 1;
  padding-top: 15px;
}

.div-list {
  flex-wrap: wrap;
  margin-left: 50px;
}

.item {
  margin: 15px auto;
}
</style>
