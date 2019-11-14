<template>
  <el-container class="page">
    <el-container>
      <el-aside width="220px">
        <el-col style="height:100%">
          <el-menu
            router
            default-active="/home"
            background-color="#545c64"
            text-color="#fff"
            style="height:100%"
            active-text-color="#409EFF"
          >
            <el-menu-item index="/home">
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </el-menu-item>

            <el-menu-item index="/loan-apply">
              <i class="el-icon-edit-outline"></i>
              <span>贷款申请</span>
            </el-menu-item>

            <el-menu-item index="/apply-manage">
              <i class="el-icon-s-management"></i>
              <span>申请管理</span>
            </el-menu-item>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-grid"></i>
                <span>贷款审批</span>
              </template>

              <el-menu-item index="4-1">
                <span>初审</span>
              </el-menu-item>

              <el-menu-item index="4-2">
                <span>终审</span>
              </el-menu-item>
            </el-submenu>

            <el-menu-item index="5">
              <i class="el-icon-star-on"></i>
              <span>标的管理</span>
            </el-menu-item>

            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>权限管理</span>
              </template>

              <el-menu-item index="6-1">
                <span>创建管理员</span>
              </el-menu-item>

              <el-menu-item index="6-2">
                <span>列表展示</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>

      <el-container>
        <el-header>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
