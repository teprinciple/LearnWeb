window.onload = function(){
   //Map   类似于对象   键值对    map的键可以是其它的类型 
   var m = new Map();
   m.set('name','value').set('age',18).set('a','a');
   var a = {id:2};
   m.set(a,'value');
   //m.get('a')  //'a'
    m.get(a) //'value'

    //方法
    // .has();
    // .delete();
    // .clear();
    // .size;

    //另一种方式
    var m1 = new Map([['a',1],['b',2],['c',3]]);

    //循环  for  of
    //keys()  values(); entries();
    for(let v of m1.keys()){
        console.log(v)  // a,b,c
    }
    for(let v of m1.value()){
        console.log(v)  // 1,2,3
    }
    for(let [k,v] of m1){
        console.log(k,v)  // 
    };
    //对象转数组
    var obj = {'a':'a1','b':'b2','c':'c3'};
    Object.keys(obj) ; //["a", "b", "c"]
    Object.values(obj) ; //["a1", "b2", "c3"]
    //es6  map类型 转为数组
    [...m1.keys()]; //["a", "b", "c"]
    [...m1.values()]; //["a1", "b2", "c3"]
    [...m1]; //[['a',1],['b',2],['c',3]]

    //map 转为对象 object
    var m1 = new Map([['a',1],['b',2],['c',3]]);
    var o = {};
    for (let [k,v] of m1){
        o[k]=v;
    };
    console.log(o);
    //对象转map
    var obj2 = {name:'123',msg:'456'};
    var m2 = new Map();
    for(let k in obj2){   //对象中没有for of 
        m2.set(k,obj2[k])
    };

    //数组对象去重   
    var arr = [{name:'a',id:1},{name:'a',id:2},{name:'b',id:3},{name:'c',id:4},{name:'c',id:5},{name:'b',id:6},{name:'d',id:7}];

    

}