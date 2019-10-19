<template>
  <div>
    <div
      class="banner-div"
      v-for="(item,index) in list"
      :key="index"
      v-show="currentIndex == index"
      @mouseover="showArrow = true"
      @mouseout="showArrow = false"
      @click="jump(item.url)"
    >
      <img class="banner-img" :src="item.imagePath" />
      <div class="flex-row banner-text-div">
        <span class="banner-text">{{item.title}}</span>
        <div class="banner-dot-div flex-row">
          <span
            v-for="(item,index) in list"
            :key="index"
            class="banner-dot"
            :class="{'dot-selected':(index == currentIndex)}"
            @click.prevent="move2Index(index)"
          />
        </div>
      </div>

      <span class="arrow-left iconjiantou41" v-show="showArrow" @click.stop="move2Pre"></span>
      <span class="arrow-right iconjiantou4" v-show="showArrow" @click.stop="move2Next"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentIndex: 0,
      showArrow: false,
      justClick: false
    }
  },
  props: ['list'],

  methods: {
    move2Next(click = false) {
      this.justClick = click
      this.currentIndex++
      if (this.currentIndex === this.list.length) {
        this.currentIndex = 0
      }
    },
    move2Pre() {
      this.justClick = true
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.list.length - 1
      }
    },
    move2Index(index) {
      this.justClick = true
      if (index >= 0 && index < this.list.length) {
        this.currentIndex = index
      }
    },
    jump(url) {
      // window.location.href = url
    }
  },

  mounted() {
    setInterval(() => {
      if (!this.justClick) {
        this.move2Next()
      } else {
        this.justClick = false
      }
    }, 5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-img {
  width: 100%;
  height: 300px;
  object-fit: fill;
}

.banner-div {
  position: relative;
  top: 0;
  left: 0;
}

.banner-text-div {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.4);
  justify-content: between-space;
}

.banner-text {
  height: 100%;
  line-height: 40px;
  color: white;
  margin-left: 20px;
}

.banner-dot-div {
  height: 100%;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
}

.banner-dot {
  margin: 0 5px;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: #aaaaaa;
  border: 1px solid #aaaaaa;
}

.dot-selected {
  border: 1px solid white;
  background: white;
}

.arrow-left {
  position: absolute;
  left: 10px;
  top: 40%;
}

.arrow-right {
  position: absolute;
  right: 10px;
  top: 40%;
}

.arrow-left,
.arrow-right {
  line-height: 30px;
  font-size: 1.5em;
  width: 20px;
  height: 30px;
  font-family: 'iconfont';
  color: white;
  /* background: rgba(0, 0, 0, 0.1); */
}
</style>
