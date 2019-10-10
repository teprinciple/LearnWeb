window.onload = function(){
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