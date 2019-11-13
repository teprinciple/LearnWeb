<template>
  <div class="page main">
    <div class="login-container flex-column">
      <p class="head">信贷管理系统</p>

      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="button" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      this.$message['success']('登录成功');
      this.$router.push('home');
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$white-color: red;

.main {
  background: url('~@/assets/img/login_bg.jpeg') no-repeat center;
  .login-container {
    width: 500px;
    height: 300px;
    padding: 10px 20px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: white;
    border-radius: 6px;

    .head {
      text-align: center;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      font-weight: bold;
    }

    .button {
      margin-top: 30px;
      width: 100%;
    }
  }
}
</style>
