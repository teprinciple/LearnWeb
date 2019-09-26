window.onload = function(){
    //数值
    //es5 
    parseInt(12.222);//12
    parseFloat(12.23333) //12.23333

    //ES6
    Number.parseInt('12.222kg');//12
    Number.parseFloat(12.23333) //12.23333
    //用来判断一个数值是否为整数  返回true  false
    Number.isInteger(20) //true;
    Number.isInteger(20.0) //true;
    Number.isInteger(20.12) //false;
    Number.isInteger('20.12') //false;

    Math.ceil(3.1); //向上    4
    Math.floor(3.9) //向下    3
    Math.round(3.5)  //四舍五入

    //es6
    Math.trunc(-4.1)  //-4    //去除小数点，返回整数部分
    Math.sign()  //判断一个数是正数  负数  或零   对于非数值   会将其转换为数值
    //返回五种值  正数  返回+1  负数 -1  零 0  其它值 NaN

    //指数运算符 （**）  冥
    2**2   //4
    2**3  //8

    let a = 3;
    a**=2;   //a+=1   a=a+1; a**=2   a=a*a
    console.log(a);

    

}
