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
        class="paging"
        v-show="totalPages > 0"
        @onPageChange="onPageChange"
        :totalPages="totalPages"
        :totalNums="totalNums"
        :currentPage="currentPage"
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
      totalPages: 0,
      totalNums: 0,
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
      this.getProjectList();
    },

    // 类型改变
    sideItemChange(sideItem) {
      this.cid = sideItem.id;
      this.currentPage = 1;
      console.log('类别cid：' + this.cid);
      this.getProjectList();
    },

    // 获取左边分类列表
    getProjectTree() {
      api
        .getProjectTree()
        .then(res => {
          if (res.length > 0) {
            this.cid = res[0].id;
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
          this.list = res.datas.slice(0, 6);
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
  position: relative;
  min-height: 100%;
}

.side {
  margin-top: 30px;
  margin-bottom: 60px;
  margin-left: 30px;
  width: 120px;
  min-height: 100%;
}

.content {
  flex: 1;
  padding-top: 15px;
}

.div-list {
  flex-wrap: wrap;
  margin-left: 50px;
  justify-content: flex-start;
}

.item {
  margin: 15px 5px;
}

.paging {
  position: absolute;
  margin-bottom: 20px !important;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
