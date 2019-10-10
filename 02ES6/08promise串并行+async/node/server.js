var express = require('express');
var bodyParse = require('body-parser');
var app = express();

var allowCrossDomain = function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");   
    res.header("Access-Control-Allow-Methods", "*");  
    next();
}
app.use(allowCrossDomain); 
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: true}))

var map = new Map();
function mapToObj(){  //把map类型 转为数组对象
    var arr = [];
    for (let [k,v] of map){
        let obj = {};
        obj.name = k;
        obj.msg = v;
        arr.push(obj);
    };
    return arr;
}
//查询接口
//查询数据 
app.get("/data/get", function(req, res){
    res.send(JSON.stringify(mapToObj()))   //返回前端的值 json字符串    
})
//添 加数据
app.post("/data/add", function(req, res){
    //前端传的参数
    let data = req.body;
    map.set(data.name,data.msg);
    res.send(JSON.stringify({code:'200',msg:'success'}))     
})
//删除数据
app.delete("/data/del", function(req, res){
    //前端传的参数
    let data = req.body;
    console.log(data);
    if(map.has(data.name)){
        map.delete(data.name)
    }
    res.send(JSON.stringify({code:'200',msg:'success'}))     
})
//测试串行接口1
app.get("/data/demo1", function(req, res){
    var data ={
        code:'200',
        msg:'success',
        result:{id:1}
    };
    res.send(JSON.stringify(data))     
})
//测试串行接口2
app.get("/data/demo2", function(req, res){
    var data ={
        code:'200',
        msg:'success',
        result:[{
            name:'abc',
            msg:'abcabc'
        }]
    };
    res.send(JSON.stringify(data))     
})
app.listen(3000, function(){
    console.log("服务已启动，端口3000");
})