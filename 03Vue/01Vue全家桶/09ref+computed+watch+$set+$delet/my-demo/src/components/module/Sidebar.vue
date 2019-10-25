<template>
    <ul>
      <li class="p_item" v-for="(item,index) in items" :key="index">
				<router-link :to="item.url" class="p_title" > 
					<i class="iconfont" :class="item.icon"></i>{{item.title}}
				</router-link>
        <ul>
          <li v-for="(v,i) in item.child" :key="i">
            <router-link :to="v.url" class="p_title" > {{v.title}}
            </router-link>
          </li>
        </ul>
			</li>
    </ul>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      title:'列表页',
      items:[
          {title:'首页',
            url:'/home',
            icon:'icon-jia',
            child:[{title:'首页详情页',url:'/home/info'}]
          },
          {title:'新闻',url:'/news',icon:'icon-jiazheng',child:[]},
          {title:'列表',url:'/list',icon:'icon-jiajujiafang',child:[]},
          {title:'其它页',url:'/other',icon:'icon-xiaoyan',child:[]},
          {title:'ref',url:'/myRef',icon:'icon-xiaoyan',child:[]},
          {title:'计算属性',url:'/myComputed',icon:'icon-xiaoyan',child:[]},
          {title:'watch',url:'/myWatch',icon:'icon-xiaoyan',child:[]},
          {title:'$set/$delete',url:'/mySet',icon:'icon-xiaoyan',child:[]},
          {title:'axios',url:'/myAxios',icon:'icon-xiaoyan',child:[]}
      ]
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		.active {
      color:#f60;
      background:#fff
		}
</style>
