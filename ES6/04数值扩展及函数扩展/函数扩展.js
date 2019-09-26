window.onload = function(){
    //函数扩展
    //ES5
    function fun(x,y){
        y = y ||10;
        console.log(x,y)
    }
    //es6
    function fun2(x,y = 10){
        console.log(x,y)
    }
    //rest参数
    //arguments  类似于数组 是一个对象并不是一个数组  
    function fun3 (){
        console.log(arguments.push(100))//error   因为arguments并不是一个数组，不能直接应用数组中的方法和属性
    }
    function fun4 (...value){
        //value.push(1000)
        //console.log(value)
        var n = 0;
        for(var v of value){
            n+=v;
        }
        return n;
    }
    fun4(232,42,45,23,23,52,52,52,52,55,343,535,35,35,34,34);

    //箭头函数
    //语法糖
    let f = v =>v ;   //变量名 =参数=>函数体
    let f2 = () => '123';

    let f3 = (n1,n2) => n1+n2;
    //对象   如果函数体返回的是一个对象，写法如下：
    let f3 = (n1,n2) => ({name:n1,age:n2});
    let f3 = (n1,n2) => { var obj = {name:n1,age:n2}; return obj};

    //箭头函数有几点注意：
    //1、箭头函数不能作为构造函数，不能使用new
    let F4 =() => {}
    var f4 = new F4();  //error

    //2、箭头函数没有原型 对象
    let F5 =() => {}
    F5.prototype  

    //3箭头函数 this 指向
    //箭头函数中this的指向是定义时的this,而不是执行时this (外层调用者)
    function Person(){
        this.age = 18;
        //setTimeout(函数体,时间)
        setTimeout(()=>{
            console.log(this)    //
        },2000)
    }
    var p = new Person();

    // 箭头函数 当成一个方法使用
    //作为方法的箭头函数this指向是全局的window对象，普通函数指向调用它的对象
    var obj = {
        age:19,
        fun:function(){
            console.log(this.age)   //obj
        },
        fun2:function(){
            var fn = ()=> this.age;   //obj
            return fn();
        },
        fun3:()=>{
            console.log(this)  //window
        }
    }

    //4 arguments参数  箭头函数 没有绑定arguments对象
    var f5 = (...v) =>{  //[]
        console.log(v)
    };
    f5(23,2,4,2,4,2,4,23);

    //...扩展运算符   浅拷贝和深拷贝
    var obj = {a:1,b:2};
    var obj2 = {...obj}

    var arr1 = [1,2,3];
    var arr2 = [4,5];
    var a = [...arr1,...arr2]   //[1,2,3,4,5]


}
