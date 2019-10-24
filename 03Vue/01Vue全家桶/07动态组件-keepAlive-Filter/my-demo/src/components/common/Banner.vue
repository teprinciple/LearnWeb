<template>
  <div class="banner">
      <img  v-for="(v,i) in data " :key="i" :src="v" v-show="i == n"/>   
      <div class="banner-circle">
          <ul>
              <li  v-for="(v,i) in data " :key="i" :class="i==n ?'selected':''"></li>  
          </ul> 
      </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
    //   img:[require("@/assets/img/1.jpg"),
    //         require("@/assets/img/2.jpg"),
    //         require("@/assets/img/3.jpg"),
    //         require("@/assets/img/4.jpg"),
    //         require("@/assets/img/5.jpg")],
      n:0
    }
  },
  props:['data','time'],
  methods:{
    play(){
      setInterval(this.autoPlay,this.time)
    },
    autoPlay(){
      this.n ++;
      if(this.n == this.data.length){
        this.n = 0;
      }
    }
  },
  mounted(){  //挂载完成  生命 周期钩子函数
    this.play();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*index*/
.banner {
    position: relative;
}
.banner .banner-circle {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    color: #fff;
}
.banner .banner-circle li{
    display:inline-block;
    background: rgba(0,0,0,.3);
    border-radius: 50%;
    padding:5px;
    margin:2px;
}
.banner .banner-circle ul {
    text-align: center;
}
.banner .banner-circle .selected {
    background: rgba(0,0,0,.8);
}
.banner img {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
