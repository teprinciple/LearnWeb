$(function(){
    $('.menu-link').click(function(){   //收缩按钮
        if($('#layout').hasClass('active')) {
             $('#layout').removeClass('active');
        }else {
             $('#layout').addClass('active');
        }
       
    });
    // $(window).resize(function() {     //对浏览器窗口调整大小
    //   var w = $(window).width();     //当前窗口的宽度
    //   if(w >= '768'){
    //      $('#layout').removeClass('active');
    //   }
    // });
})

      