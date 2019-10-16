<template>
  <div class="container">
    <div class="row">
        <!--源数据-->
        <div class="col-sm-5">
            <div class="panel panel-default">
                <div class="panel-heading clearfix"> 
                    <div class="pull-left">
                        <div class="checkbox">
                            <label>
                                <input  type="checkbox" v-model="leftAll"
                                @change="AllChange(leftAll,leftData)"><span>请选择</span>
                            </label>
                        </div>
                    </div>
                    <span class="pull-right">{{filterData(leftData,true).length}}/{{leftData.length}}</span>
                </div>
                <div class="panel-body">
                    <ul>
                        <li v-for="(v,i) in leftData" :key="i">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" v-model="v.check" @change="curChange('leftAll',leftData)"> {{v.name}}
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--按钮-->
        <div class="col-sm-2 text-center">
            <div><button :disabled="leftData.length===0 || filterData(leftData,true).length===0" class="btn btn-primary" @click="toRight()">>></button></div>
            <div><button :disabled="rightData.length===0 || filterData(rightData,true).length===0"  class="btn btn-primary" @click="toLeft()"><<</button></div>
        </div>
        <!--目标数据-->
        <div class="col-sm-5">
            <div class="panel panel-default">
                <div class="panel-heading clearfix"> 
                    <div class="pull-left">
                        <div class="checkbox">
                            <label>
                                <input  type="checkbox" v-model="rightAll"
                                @change="AllChange(rightAll,rightData)"><span>请选择</span>
                            </label>
                        </div>
                    </div>
                    <span class="pull-right">{{filterData(rightData,true).length}}/{{rightData.length}}</span>
                </div>
                <div class="panel-body">
                    <ul>
                        <li v-for="(v,i) in rightData" :key="i">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" v-model="v.check" @change="curChange('rightAll',rightData)"> {{v.name}}
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
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
        leftAll:false, //左侧全选
        rightAll:false, //右侧全选
        leftData:[
            {name:'a',check:false},
            {name:'b',check:false},
            {name:'c',check:false},
            {name:'d',check:false},
            {name:'q',check:false},
            {name:'w',check:false}
        ],  //左侧数据
        rightData:[],  //右侧数据
    }
  },
  methods:{
     toRight(){  //从左到右
         //过滤
         var data = this.filterData(this.leftData,true);
         this.rightData.push(...data);  //[...a,...b]
         this.leftData = this.filterData(this.leftData,false);
         this.curChange('rightAll',this.rightData)
     },
     toLeft(){ //从右到左
         //过滤
         var data = this.filterData(this.rightData,true);
         this.leftData.push(...data);  //[...a,...b]
         this.rightData = this.filterData(this.rightData,false);
         this.curChange('leftAll',this.leftData)
     },
     filterData(data,type){
         return data.filter(function(v,i){
             return v.check == type;
         });
     },
     //全选
     AllChange(state,data){
         data.forEach(item=>{
            item.check = state;
        })
     },
     curChange(state,data){
         console.log(state);
         this[state] = data.every(function(v){return v.check});
         //this.leftAll = this.leftData.every(function(v){return v.check});
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-body .checkbox {
    margin: 0;
}
.text-center>div {
    margin:10px;
}

</style>
