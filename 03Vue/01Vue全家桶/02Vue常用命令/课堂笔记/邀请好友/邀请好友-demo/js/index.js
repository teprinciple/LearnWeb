window.onload = function(){
    new Vue({
        el:"#my",
        data:{
            items:[
                {name:'张学友1',qq:'123456',id:1,state:false},
                {name:'张学友2',qq:'12344234',id:2,state:false},
                {name:'张学友3',qq:'23425532',id:3,state:false},
                {name:'张学友4',qq:'2344324',id:4,state:false},
                {name:'张学友5',qq:'12344322456',id:5,state:false},
                {name:'张学友6',qq:'9687686',id:6,state:false},
                {name:'张学友7',qq:'6546456',id:7,state:false},
                {name:'张学友8',qq:'534646',id:8,state:false},
                {name:'张学友9',qq:'324324',id:9,state:false},
                {name:'张学友10',qq:'4235436346',id:10,state:false}],
            selectorItems:[],
            flag:'hide'
        },
        methods:{
            add(item){  //添加数据
                item.state = true;
                //id重复判断   ES5
                // for(var i = 0;i<this.selectorItems.length;i++){
                //     if(item.id == this.selectorItems[i].id) return;
                // };
                // this.selectorItems.push(item);
                //es6
                this.selectorItems.push(item);
                this.selectorItems = [...new Set(this.selectorItems)];
            },
            del(i,item){ //删除数据
                this.selectorItems.splice(i,1);
                this.items.forEach(v=>{
                    // if(v.id == this.items[i].id){
                    //     v.state = false;
                    // }
                    if(v.id == item.id){
                        v.state = false;
                    }
                })
            }
        }
    })
}