<template>
  <div>
    <div class="div-container flex-row">
      <div class="app-content flex-row">
        <div class="tabbar flex-row">
          <img src="../../assets/logo.png" class="img-logo" />
          <Tabbar />
        </div>

        <div class="flex-row head-right">
          <!-- <div class="debug-red">搜索框</div> -->
          <div>
            <span class="btn" @click="showLogin">登录</span> ·
            <span class="btn" @click="showRegister">注册</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 登录注册弹窗 -->
    <el-dialog
      custom-class="dialog-body"
      :title="isLogin ?'登录' : '注册' "
      :visible.sync="dialogTableVisible"
      width="400px"
    >
      <div class="flex-column dialog-div">
        <input type="text" placeholder="请输入用户名" />

        <input type="password" placeholder="请输入密码" />

        <input type="password" v-if="!isLogin" placeholder="请输入确认密码" />

        <div class="flex-row" style="justify-content:flex-end">
          <span class="change-text" @click="changeLoginRegister">{{isLogin ? '去注册' : '去登录' }}</span>
        </div>

        <button class="commit-btn">{{isLogin ?'登录' : '注册'}}</button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import Tabbar from '@/components/common/Tabbar';

export default {
  name: 'Home',
  data() {
    return {
      isLogin: true,
      dialogTableVisible: false
      // logoImg: require('@/src/assets/logo.png')
    };
  },
  components: {
    Tabbar
  },
  methods: {
    showLogin() {
      this.isLogin = true;
      this.dialogTableVisible = true;
    },
    showRegister() {
      this.isLogin = false;
      this.dialogTableVisible = true;
    },
    changeLoginRegister() {
      this.isLogin = !this.isLogin;
    }
  }
};
</script>

<!-- 在这里增加一个style标签；但是不要写scope；来修改element-dialog的样式-->
<style>
div.el-dialog__body {
  padding-top: 0;
}

.el-dialog {
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*height:600px;*/
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
}
.el-dialog .el-dialog__body {
  flex: 1;
  overflow: auto;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div-container {
  width: 100%;
  height: 60px;
  justify-content: space-between;
  background: white;
  /* 这里还不太懂 */
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.01), 0 1px 5px 0 rgba(0, 0, 0, 0.01),
    0 3px 1px -2px rgba(0, 0, 0, 0.1);
}

.img-logo {
  width: 68px;
  height: 50px;
  margin: 0 30px;
}

.tabbar {
  width: 780px;
  height: 100%;
  align-items: center;
}

.head-right {
  flex: 1;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  color: #276692;
}

.btn {
  color: #276692;
}

.btn:hover {
  color: red;
  text-decoration: underline;
  margin-top: 0 !important;
}

.dialog-div {
  /* border-top: 1px solid #ccc; */
  /* padding-top: 10px; */
}

input {
  height: 35px;
  width: 100%;
  border: 1px solid #adadad;
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 20px;
  font-size: 16px;
}

input:focus {
  border: 1px solid #3498db;
}

.commit-btn {
  height: 35px;
  width: 100%;
  background: #3498db;
  border-radius: 3px;
  margin-top: 10px;
  color: white;
  font-size: 16px;
}

.change-text {
  color: #3498db;
  margin: 10px 0;
}

.change-text:hover {
  text-decoration: underline;
}

.dialog-body {
  padding-top: 0 !important;
}
</style>
