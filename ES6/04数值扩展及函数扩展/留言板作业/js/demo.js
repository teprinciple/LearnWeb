let obj = {
    map : new Map(),
    init :function(){
        this.bind();
    },
    bind:function(){
        $(".msg-container .submit").click(()=>{
            let [_name,_msg] = [$(".name").val(),$(".message").val()];
            if(!_name|| !_msg){
                alert("请输入信息")
            }else {
                let time = new Date().getTime();
                this.map.set(_name+"_"+time,_msg);  //111_1423423,2342    222_2332532432,3242
                $(".name , .message").val("");
                this.list();
            }
        });
    },
    list:function(){
        let str="";
        for(let [key,value] of this.map){
            str+=`<li class="list-group-item">${key.split("_")[0]}
                <span>说：</span>${value}
            </li>`
        };
        $(".messageList").html(str);
    }
}
$(function(){
    obj.init();
})


