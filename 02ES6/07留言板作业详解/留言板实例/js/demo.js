let obj = {
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
        })
    },
    add(name,msg){   //添加
        getJSON("http://localhost:3000/data/add","post",{name:name,msg:msg})
        .then(res=>{
            console.log(res);
            this.getList();//调用get请求
        }).catch(err=>{
            console.log(err)
        })
    },
    getList(){  //查询数据
        getJSON("http://localhost:3000/data/get","get")
        .then(res=>{
            console.log(res);
            this.showLists(res); //列表展示
        }).catch(err=>{
            console.log(err)
        })
    },
    del(name){  //删 除
        getJSON("http://localhost:3000/data/del","delete",{name:name})
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
    }
}
$(function(){
    obj.init();
})


