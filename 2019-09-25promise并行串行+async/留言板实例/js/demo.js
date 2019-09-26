let obj = {
    url:'http://localhost:3000',
    init() {  //初始化
        this.bind();
        this.getList();
    },
    bind(){  //事件绑定
        $(".msg-container .submit").click(()=>{
            let [_name,_msg] = [$(".name").val(),$(".message").val()];
            if(!_name || !_msg){
                alert("请输入信息")
            }else {
                //发送请求
                this.add(_name,_msg);
                $(".name , .message").val("");
            }
        });
        $(".msg-container").on('click','.btn-del',(e)=>{   //未来元素  
            console.log('ok');
            let _name = $(e.target).attr("name");  //获取自定义属性的值
            this.del(_name);
        });
        $(".queryThen").click(()=>this.queryThen()); //串行
        $(".queryWhen").click(()=>this.queryWhen()); //并行
    },
    add(name,msg){   //添加
        getJSON(this.url+"/data/add","post",{name:name,msg:msg})
        .then(res=>{
            console.log(res);
            this.getList();//调用get请求
        }).catch(err=>{
            console.log(err)
        })
    },
    getList(){  //查询数据
        //原生的写法
        // getJSON(this.url+"/data/get","get")
        // .then(res=>{
        //     console.log(res);
        //     this.showLists(res); //列表展示
        // }).catch(err=>{
        //     console.log(err)
        // })
        //jquery   jq版本大于1.5 deferred就是jq中promise的实现    jq版本在1.5以下  返回的XHR对象；版本高于1.5返回的是deferred
        // $.ajax({url:this.url+"/data/get",type:"get",dataType:"json"})
        // .then(res=>{  
        //     console.log(res);
        //     this.showLists(res); //列表展示
        // },(err)=>{
        //     console.log(err)
        // })
        //jq的另一种写法
        $.ajax({url:this.url+"/data/get",type:"get",dataType:"json"})
        .done(res=>{    //与then()方法的区别：then方法是有返回值，会传递值到下一个链式调用，done不会传递
            console.log(res);
            this.showLists(res); //列表展示
        }).fail(err=>{
            console.log(err)
        })

    },
    del(name){  //删 除
        getJSON(this.url+"/data/del","delete",{name:name})
        .then(res=>{
            console.log(res);
            this.getList();//调用get请求
        }).catch(err=>{
            console.log(err)
        })
    },
    showLists(res){  //展示数据
        let str = '';
        for(var i = 0;i<res.length;i++){
            str +=`<li class="list-group-item">${res[i].name}
                        <span>说：</span>${res[i].msg}
                        <button class="btn btn-success btn-del" name="${res[i].name}">删除</button>
                    </li>`
        };
        $(".messageList").html(str);
    },
    queryThen() {   //链式写法  串行
        //原生写法
        // getJSON(this.url+"/data/demo1","get")
        // .then(res=>{
        //     console.log(res);
        //     return getJSON(this.url+"/data/demo2","get",res.result.id)
        // },(err)=>{
        //     console.log(err)
        // }).then(res=>{
        //     console.log(res);
        // }).catch(err=>{
        //     console.log(err)
        // })
        //jq写法
        // $.ajax({url:this.url+"/data/demo1",type:"get",dataType:"json"})
        // .then(res=>{  
        //     console.log(res);
        //     return $.get(this.url+"/data/demo2",res.result.id);
        // },(err)=>{
        //     console.log(err)
        // }).then(res=>{  
        //     console.log(res);
        // },(err)=>{
        //     console.log(err)
        // })
        //async 的写法
        var _this = this;
        async function test(){  //async函数默认返回一个promise实例，默认是成功的状态，把函数的返回值传给then的第一个参数
            var data1 =  await getJSON(_this.url+"/data/demo1","get");
            var data2 =  await getJSON(_this.url+"/data/demo2","get",data1.result.id);
            _this.showLists(data2.result);
         };
         test();
    },
    queryWhen() {   //链式写法  并行
        //jq的写法
        $.when($.ajax({url:this.url+"/data/demo1",type:"get",dataType:"json"}),$.ajax({url:this.url+"/data/demo2",type:"get",dataType:"json"}))
        .then((v1,v2)=>{  
            console.log(v1);
            console.log(v2);
        },(err)=>{
            console.log(err)
        });
        //原生的写法
        // let p1 = new Promise((resolve,reject)=>{
        //     getJSON(this.url+"/data/demo1","get")
        //     .then(res=>{
        //         resolve(res);
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        // });
        // let p2 = new Promise((resolve,reject)=>{
        //     getJSON(this.url+"/data/demo2","get")
        //     .then(res=>{
        //         resolve(res);
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        // });
        // Promise.all([p1,p2])
        // .then(([v1,v2])=>{
        //     console.log(v1);
        //     console.log(v2);
        // },(err)=>{
        //     console.log(err);
        // })
        //promise.race()  返回的是返回结果快的 不管结果是成功还是失败
        // let p1 = new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         resolve("成功了")
        //     },500)
        // });
        // let p2 = new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         resolve("OK")
        //     },1000)
        // });
        // Promise.race([p1,p2])    //返回的是返回结果快的 不管结果是成功还是失败
        // .then((v)=>{
        //     console.log(v);
        // },(err)=>{
        //     console.log(err);
        // })
    }
}
$(function(){
    obj.init();
})


