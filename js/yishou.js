/**
 * Created by Administrator on 2017-02-07.
 */
$(function () {
    $(".guantong .faxian .f-left").mouseenter(function () {
        $(this).children(".fx-left").css('display','block');
        $(this).find("span").css('background','url("../images/r2_c2.png")')
    })
    $(".guantong .faxian .fx-left").mouseenter(function () {
        $(this).css('background','#990000')
    })
    $(".guantong .faxian .f-left").mouseleave(function () {
        $(this).children(".fx-left").css('display','none');
        $(this).find("span").css('background','url("../images/jiantou.png")')
    })
    $(".guantong .faxian .fx-left").mouseleave(function () {
        $(this).css('background','#212121');
    })
})
//移动部分的右侧部分B
$(function () {
    $(".guantong .faxian .f-right").mouseenter(function () {
        $(this).find(".fx-right").css('display','block');
        $(this).find(".fxleft").css('background','#F2F2F2');
        $(this).find(".fxleft span").css('background','url("../images/c2.png")');
        $(this).find(".fxleft p").css('color','#990000');
    })
    //$(".guantong .f-right .fxr-two").mouseenter(function () {
    //    $(this).css('background','#990000').find("i").css('color','white');
    //})
    $(".guantong .faxian .f-right").mouseleave(function () {
        $(this).find(".fx-right").css('display','none');
        $(this).find(".fxleft").css('background','#990000');
        $(this).find(".fxleft span").css('background','url("../images/san.png")');
        $(this).find(".fxleft p").css('color','white');
    })
    //$(".guantong .f-right .fxr-two").mouseleave(function () {
    //    $(this).css('background','#F2F2F2').find("i").css('color','#990000');;
    //})
})
//移动部分的右侧部分E
$(function () {
    $(".show .s-nav .know").mouseenter(function () {
        $(this).css('background','#CC0000');
        $(this).children("span").css('background','url("../images/11.png")');
    })
    $(".show .s-nav .know").mouseleave(function () {
        $(this).css('background','#3E4146');
        $(this).children("span").css('background','url("../images/r5_c2.png")');
    })
})
//��随着scrolltop变化而变化的部分B
$(function () {
    $(window).scroll(function () {
        var scrolltop=$(window).scrollTop();
        if(scrolltop>705&&scrolltop<=1300){
            $(".guantong .tianjia").css('display','block');
            $(".faxian").css({
                "position": "fixed",
                "top": 0,
                "zIndex":9999,
                "height":59,
                "width":"100%",
                "border-bottom":"1px solid #F2F2F2",
                "background":"#FFFFFF",
            })
            $(".faxian .f-right span p").text("保时捷认可易手车展示平台");
            $(".guantong .f-right .fx-right>div").eq(1).css({'background':'#990000'}).siblings().css('background','#F2F2F2');
            $(".guantong .f-right .fx-right>div").eq(1).find(".fxbottom").css('border-bottom','1px solid #990000');

        }else if(scrolltop>1300&&scrolltop<=1900){
            $(".faxian .f-right span p").text("保时捷认可易手车");
            $(".guantong .f-right .fx-right>div").eq(2).css({'background':'#990000'}).siblings().css('background','#F2F2F2');
            $(".guantong .f-right .fx-right>div").eq(2).find(".fxbottom").css('border-bottom','1px solid #990000');
        }else if(scrolltop>1900){
            $(".faxian .f-right span p").text("保时捷认可保修");
            $(".guantong .f-right .fx-right>div").eq(3).css({'background':'#990000'}).siblings().css('background','#F2F2F2');
            $(".guantong .f-right .fx-right>div").eq(3).find(".fxbottom").css('border-bottom','1px solid #990000');
        }else{
            $(".guantong .tianjia").css('display','none');
            $(".faxian").css({
                "position":"static",
                "border-bottom":"1px solid white",
            })
            $(".faxian .f-right span p").text("发现");
            $(".guantong .f-right .fxr-two").mouseenter(function () {
                $(this).css('background','#990000').find("i,p").css('color','white');
            })
            $(".guantong .f-right .fxr-two").mouseleave(function () {
                $(this).css('background','#F2F2F2').find("i").css('color','#990000');
                $(this).find("p").css('color','#000');
            })
        }
    })
})
//��随着scrolltop变化而变化的部分E