<template>
  <div class="app-content flex-row">
    <div class="side flex-column">
      <ProjectSideBar :list="treeList" @sideItem="sideItemChange" />
    </div>

    <div class="content flex-column">
      <div class="div-list flex-row">
        <ProjectItem class="item" v-for="(item,index) in list" :key="index" />
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
      totalPages: 8,
      totalNums: 123,
      cid: 0,
      list: ['', '', '', '', '', ''],
      treeList: []
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page);
    },

    sideItemChange(sideItem) {
      this.cid = sideItem.courseId;
      console.log(sideItem);
    },

    getProjectTree() {
      api
        .getProjectTree()
        .then(res => {
          if (res.data.length > 0) {
            this.cid = res.data[0].courseId;
          }
          this.treeList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
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
