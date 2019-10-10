window.onload = function(){
    new Vue({
        el:"#my",   //element   挂载元素
        data:{  //数据   响应式数据
            n:1,
            title:['标题一','b','c','d','e','f','x'],
            content:['内容a','内容b','内容c','内容d','内容e','内容f'],
            lists:[
                {title:'a1',con:'内容a1'},
                {title:'a2',con:'内容a2'},
                {title:'a3',con:'内容a3'},
                {title:'a4',con:'内容a4'},
                {title:'a5',con:'内容a5'}],
            tabLists:[]
        },
        methods:{   //方法     
            changeN:function(i){
                //console.log(this);
                this.n = i;
            },
            getLists:function(){
                axios({
                    method:'get',
                    url:'http://localhost:3333/get_tablist'
                }).then(res=>{
                    console.log(res);
                    if(res.data.code=='200'){
                        if(res.data.result && res.data.result.length>0){
                            this.tabLists = res.data.result;
                        }
                    }
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        mounted:function(){  //挂载完成
            this.getLists();
        }
    });
}