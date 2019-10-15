<template>
  <div>
    <div class="container flex-row">
      <!-- 左边列表 -->
      <div class="flex-column div-left-right">
        <div class="div-title flex-row">
          <div class="title-select">
            <input
              type="checkbox"
              :checked="checedUnSelected.length === unSelectedCourses.length && checedUnSelected.length >0"
              @change="unSelectedCheckAllOrNot"
            />
            请选择
          </div>
          <span class="title-num">{{checedUnSelected.length}}/{{unSelectedCourses.length}}</span>
        </div>
        <div>
          <ui>
            <li>
              <div class="li-item" v-for="(item,index) in unSelectedCourses" :key="index">
                <input type="checkbox" :value="item.id" v-model="checedUnSelected" />
                {{item.name}}
              </div>
            </li>
          </ui>
        </div>
      </div>

      <!-- 中间btn -->
      <div class="flex-column div-center">
        <button class="btn" :disabled="checedUnSelected.length === 0" @click="moveToSelected">>></button>

        <button
          class="btn margin-top20"
          :disabled="checedSelected.length === 0"
          @click="moveToUnSelected"
        ><<</button>
      </div>

      <!-- 右边列表 -->
      <div class="flex-column div-left-right">
        <div class="div-title flex-row">
          <div class="title-select">
            <input
              type="checkbox"
              :checked="checedSelected.length === selectedCourses.length && checedSelected.length > 0"
              @change="selectedCheckAllOrNot"
            />
            已选择
          </div>
          <span class="title-num">{{checedSelected.length}}/{{selectedCourses.length}}</span>
        </div>
        <div>
          <ui>
            <li>
              <div class="li-item" v-for="(item,index) in selectedCourses" :key="index">
                <input type="checkbox" :value="item.id" v-model="checedSelected" />
                {{item.name}}
              </div>
            </li>
          </ui>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWork',
  data() {
    return {
      allCourses: [
        // selected 表示服务端记录的是否已选中的课程
        { id: 1, name: 'Html', selected: true },
        { id: 2, name: 'JavaScript', selected: false },
        { id: 3, name: 'Vue', selected: false },
        { id: 4, name: 'Css', selected: true },
        { id: 5, name: 'JQuery', selected: false },
        { id: 6, name: 'React', selected: false },
        { id: 7, name: 'Bootstrap', selected: false },
        { id: 8, name: 'Nood', selected: true },
        { id: 9, name: 'Webpack', selected: false }
      ],

      // 已选择列表中，checked课程id数组
      checedSelected: [],

      // 未选择列表中，checked课程id数组
      checedUnSelected: []
    };
  },
  methods: {
    add() {
      return 'hhh';
    },

    // 从未选择移动到已选择
    moveToSelected() {
      let _this = this;
      [...this.checedUnSelected].forEach(item => {
        for (let index = 0; index < _this.allCourses.length; index++) {
          const element = _this.allCourses[index];
          if (element.id == item) {
            element.selected = true;
            _this.allCourses.splice(index, 1, element);

            _this.checedUnSelected = [];
          }
        }
      });
    },

    // 从已选择移动到未选择
    moveToUnSelected() {
      let _this = this;
      [...this.checedSelected].forEach(item => {
        for (let index = 0; index < _this.allCourses.length; index++) {
          const element = _this.allCourses[index];
          if (element.id == item) {
            element.selected = false;
            _this.allCourses.splice(index, 1, element);

            _this.checedSelected = [];
          }
        }
      });
    },

    // 已选择列表的全部选择及取消
    selectedCheckAllOrNot() {
      if (this.checedSelected.length == this.selectedCourses.length) {
        // 已经全选，此时取消全部
        this.checedSelected = [];
      } else {
        // 没有全选，此时全选
        this.checedSelected = this.selectedCourses.map(value => value.id);
      }
    },

    // 未选择列表的全部选择及取消
    unSelectedCheckAllOrNot() {
      if (this.checedUnSelected.length == this.unSelectedCourses.length) {
        // 已经全选，此时取消全部
        this.checedUnSelected = [];
      } else {
        // 没有全选，此时全选
        this.checedUnSelected = this.unSelectedCourses.map(value => value.id);
      }
    }
  },

  // 计算属性
  computed: {
    // 已选择列表
    selectedCourses() {
      return this.allCourses.filter(v => v.selected);
    },

    // 未选择列表
    unSelectedCourses() {
      return this.allCourses.filter(v => !v.selected);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.div-left-right {
  border: 1px solid #ddd;
  flex: 3;
  height: 200%;
  border-radius: 6px;
  overflow-y: scroll;
}

.div-center {
  flex: 1;
  justify-content: center;
  height: 100%;
  align-items: center;
}

.debug-red {
  border: 1px solid red;
}

.debug-green {
  border: 1px solid red;
}

.container {
  width: 1080px;
  height: 150px;
  margin: 100px auto;
}

.div-title {
  width: 100%;
  height: 60px;
  background: #f5f5f5;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.title-select {
  margin-left: 16px;
}

.title-num {
  margin-right: 16px;
}

.margin-top20 {
  margin-top: 20px;
}

.btn {
  border-radius: 5px;
  background: #337ab7;
  width: 50px;
  height: 30px;
  color: white;
  text-align: center;
  line-height: 30px;
  border: none;
  box-shadow: none;
}

.btn:disabled {
  background: #7ba9d0;
}

.li-item {
  margin-left: 16px;
  height: 25px;
  line-height: 25px;
}
</style>
