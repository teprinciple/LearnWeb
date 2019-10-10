$(function(){
    //ES5   var 
    var a = 1;
    var b = "123";
    //es6   let const
    //在同一个作用域内不能重复的定义同一个名称
    // var是存在变量提升  let不存在
    //var是函数作用域  let 块级作用域


    // let x = 10;
    // let x = 20;  //error
    // console.log(x);
    // let x = 'hello world';  //error

    // function fun(){
    //     let s = 10;
    //     if(true){
    //         let s = 100;
    //     };
    //     console.log(s)   //10
    // };
    // fun()

    // let s = 10;
    //     s = 20;

    //const  声明一个只读的常量，一旦声明，常量的值不能改变
    const s2 = 10;
    s2 = 20;//error

    const s3; //error  定义了必须初始化，赋值处理，不能只定义不赋值

    const obj = {};
    obj.name = "amy";
    const arr = [];
    arr.push(1);

    //箭头函数   简化了函数的定义
    let f = v => v;   //let 变量名 = 参数 => 函数体
    f(10)  //10
    var f = function(v){
        return v;
    };
    var f1 = function(){
        return 100;
    };
    let f1 =()=>100;
    var f2 = function(n1,n2){
        return n1+n2;
    };
    let f2 =(n1,n2)=>n1+n2;
    var f3 = function(n1,n2){
        if(n1>n2){
            demo()
        }
    };
    let f3 =(n1,n2)=>{
        if(n1>n2){
            demo()
        }
    };

    // set  map  数据结构 set 类似于数组  成员信息是唯一的  map类似于对象 键值对的方式 
    // var arr2 = new Array();
    // arr2[0]=1;arr2[1]=2;
    const arr = new Set();
    arr.add(1).add(2).add(3).add(3);  //1，2，3
    const arr3 = new Set([2,3,4,2,4]);
    //数组去重
    var arr4 = [2,3,5,2,6,6,3,6,3,4,6,4,6];
    var a2 = [...new Set(arr4)];   //...扩展运算符  数据序列化 

    const map = new Map();
    map.set('name','amy').set('age',18);
    map.get('name');
    map.size; //长度

   // for...of
   for(let [key,value] of map){

   }

    // var obj = {}
    // obj.name=123;
    // obj["age"]=18;
})