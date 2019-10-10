//async表示异步  它作为一个关键字放在函数前面，表示函数是一个异步的函数
async function test(){  //async函数默认返回一个promise实例，默认是成功的状态，把函数的返回值传给then的第一个参数
    return 'hello world'
};
test().then(res=>{
    console.log(res);
})
console.log('12345')

//await   等待异步  同步化
function f(){
    console.log('f');
    setTimeout(()=>{
        console.log('f2');
    },1000)
};
console.log('1');
async function test(){  //async函数默认返回一个promise实例，默认是成功的状态，把函数的返回值传给then的第一个参数
    console.log('2');
    await f();   //await下面的代码会一直等到函数中异步执行完毕，才会执行下面的代码
    console.log('3')
};
test()
console.log(4)

// 执行顺序是先'1',然后是test(), 在test()中执行了2 和f() , 
// f()中输出f,以及setTimeout()(这个会放到等待队列中),然后再执行4, 因为setTimeout()是异步，
// 有个等待的时候，所以先执行了3，后面再执行f2
