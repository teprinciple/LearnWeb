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
            <span class="btn">登录</span> ·
            <span class="btn">注册</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Tabbar from '@/components/common/Tabbar'

export default {
  name: 'Home',
  data() {
    return {
      // logoImg: require('@/src/assets/logo.png')
    }
  },
  components: {
    Tabbar
  }
}
</script>

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
}
</style>
