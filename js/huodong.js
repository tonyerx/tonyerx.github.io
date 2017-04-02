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
$(function () {
    $(".guantong .faxian .f-right").mouseenter(function () {
        $(this).find(".fx-right").css('display','block');
    })
    $(".guantong .f-right .fxr-two").mouseenter(function () {
        $(this).css('background','#990000').find("i").css('color','white');
    })
    $(".guantong .faxian .f-right").mouseleave(function () {
        $(this).find(".fx-right").css('display','none');
    })
    $(".guantong .f-right .fxr-two").mouseleave(function () {
        $(this).css('background','#F2F2F2').find("i").css('color','#990000');;
    })
})
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
            $(".faxian .f-right span p").text("保时捷驾驶体验");
        }else if(scrolltop>1300&&scrolltop<=1900){
            $(".faxian .f-right span p").text("赛车运动");
        }else if(scrolltop>1900&&scrolltop<=2500){
            $(".faxian .f-right span p").text("保时捷驾驭非凡");
        }else if(scrolltop>2500&&scrolltop<=3100) {
            $(".faxian .f-right span p").text("2016 保时捷高尔夫巡回赛");
        }else if(scrolltop>3100&&scrolltop<=3700) {
            $(".faxian .f-right span p").text("Porsche European Open");
        }else if(scrolltop>3700&&scrolltop<=4300) {
            $(".faxian .f-right span p").text("保时捷驾驭非凡");
        }else{
            $(".guantong .tianjia").css('display','none');
            $(".faxian").css({
                "position":"static"
            })
            $(".faxian .f-right span p").text("发现");
        }
    })
})
//��随着scrolltop变化而变化的部分E