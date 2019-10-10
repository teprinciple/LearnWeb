window.onload = function(){
    //数组对象去重   
    var arr = [{name:'a',id:1},{name:'a',id:1},{name:'b',id:3},{name:'c',id:4},{name:'c',id:4},{name:'b',id:3},{name:'d',id:7}];
    // var arr2 = [];
    // var obj = {};//临时对象
    // for(var i=0;i<arr.length;i++){
    //     var _name = arr[i].name;
    //     if(!obj[_name]){  //判断obj对象中是否有name值的存在，如果不存在arr2中就会添加
    //         obj[_name ] = true;
    //         arr2.push(arr[i]);
    //     }
    // }
    //es6
    var m = new Map();
    var a =  arr.filter(function(item){
        if(!m.has(item.name)){   //没有满足
            m.set(item.name,item.id);
            return true;
        }
        //return !m.has(item.name) && m.set(item.name,item.id);
    });
    a
    
}