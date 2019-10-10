window.onload = function(){
    //对象解构
    let obj = {
        name:'amy',
        age:18,
        a:'a',
        b:'b',
        c:'c'
    };
    //从对象中提取数据
    var name = obj.name;
    var age = obj.age;
    //解构
    let {name,age,a,b,c} = obj;
    let {x,y} ={x:'x',y:'y'};
    
    //与数组解构有一个重要的不同，数组的元素是按次序排列的，变量的值由它的位置决定
    //对象解构是没有次序，变量必须与属性同名
    let {x,y} ={y:'x',x:'y'};

    let {a} = {y:'x',x:'y'};  //没有匹配成功  undefined

    let {x:a,y} = {x:10,y:20}; //前面的x是匹配模式  后面的a才是变量

    let {x:x,y} ={y:'x',x:'y'};  //前面的x是匹配模式  后面的x才是变量

    // let {name:n,age:a} = obj;
    // n= 'amy';
    // a = 18;

    //对象解构也可以设置默认值
    let {x = 3} = {};  //x=3
    let {x = 3} = {x:10}; //x=10

    let {x,y=5} = {x:1}; //x=1,y=5;
    
    let {x:y=5} ={}; //y=5

    let {x:y=5} ={x:50}; //y=50

    let {b:b=2} = {b:null}

    //默认值生效 undefined
    let {b:b=2} = {b:undefined};

    //字符串解构赋 值
    let [a,b,c,d] = 'hello';

    //函数参数的解构
    function add([x=1,y=1]){
       // var x = x ||1;
       // var y = y ||1;
        return x+y
    };
    add([2,3]);
    //[x,y]=[2,3]

    function add([x=0,y=0]){
         return x+y
     };
     add([,7]);

     //参数对象
     function add2({x=0,y=0}){
         return x+y
     };
     add2({x:3,y:4})
     //{x=0,y=0} = {x:3,y:4}

     function add2({x=0,y=0}){
        return x+y
    };
    add2({x:3})
   
    //函数参数解构的默认值
    function fun({x=0,y=0} = {}){
        return [x,y]
    };
    //{x=0,y=0} = {x:3,y:5}
    fun({x:3,y:5}) //[3,5]
    fun({x:3})    // [3,0]   {x=0,y=0}  ={x:3}
    fun();//{x=0,y=0}  ={}  [0,0]
    fun({})
 
    function fun2({x,y}={x:0,y:0}){
        return [x,y]
    }
    //{x,y} = {x:3,y:5}
    fun2({x:3,y:5}) // [3,5]
    fun2({x:3})  // {x,y} = {x:3}   [3,undefined]
    fun2();//{x,y}={x:0,y:0}   [0,0]
    fun2({})  //{x,y} = {}  [undefined,undefined]

    //
    function num(){
        return [2,3,4]
    };
    let [a,b,c] =num();

    //json
    let obj = {
        name:'abc',
        age:20,
        friends:['x','y','z'],
        members:{x:1,y:2}
    };
    let {name,age,friends,members:m} = obj;
    var members= 1;


    //扩展
    //字符串
    //substring(start,stop)
    //substr(start,length)
    //indexOf()

    var str = 'hello world';
    str.substring(1,4); //'ell'
    str.substr(1,4); //'ello'
    str.indexOf('w');  //6   没有匹配 返回 -1
    if(str.indexOf('w') !=-1){

    }
    //es6
    // includes()   //字符串是否存在   第二个参数表示搜索的位置
    if(str.includes('w')){

    }
    //startsWith('h')  //判断字符串是否在原字符串的头部 第二个参数表示搜索的位置
    str.startsWith('h')
    str.endsWith('h')  //判断字符串是否在原字符串的尾部 第二个参数表示搜索的位置


    //重复 repeat() 返回一个新字符，将原字符重复n次
    'x'.repeat(3);  //'xxx'
    'hello'.repeat(2);  //'hellohello'

    //补全
    //padStart()用于头部补全
    //padEnd() 用于尾部补全
    's'.padStart(4,'xy') // 'xyxs'
    's'.padEnd(4,'xy') // 'sxyx'
    
}