<template>
  <div>
    {{title}}
    <div>
				<ul class="tab-tit">
					<li v-for="(v,i) in lists" :key="i" :class="n==i?'active':''" @click="n=i">{{v.title}}</li>   
				</ul>
				<div class="tab-con">
					<div v-for="(v,i) in lists" :key="i" v-show="n==i">
						{{v.con}}
					</div>
				</div>
			</div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      title:'testA组件',
      n:0,
      lists:[
            {title:'a1',con:'内容a1'},
            {title:'a2',con:'内容a2'},
            {title:'a3',con:'内容a3'},
            {title:'a4',con:'内容a4'},
            {title:'a5',con:'内容a5'}]
    }
  },
   methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,li {
    	padding:0;
    	margin:0;
    }
    .tab-tit li{
        padding: 10px 15px;
	    text-align: center;
	    list-style:none;
	    cursor:pointer;
		display: inline-block;
    }
    .tab-tit .active{
        color: #09f;
    	border-bottom: 1px solid #09f;
    }
    .tab-con div{
        margin:30px;
    }
</style>
