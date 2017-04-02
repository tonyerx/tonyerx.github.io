/**
 * Created by Administrator on 2017/2/7.
 */
$(function () {

    var $imgsLis=$(".lunbo-imgs li")
    var $olLis = $(".cir li")
    var i = 0;
    var circle = 0
    var imgindex = 0;

    //显示箭头
    $(".lunbo").mouseenter(function () {
        $(".lunbo .arrow").css({
            display:"block"
        })
        clearInterval(timerId)
    }).mouseleave(function () {
        $(".lunbo .arrow").css({
            display:"none"
        })
        timerId = setInterval(moveLeft,2000)
    })

//              给小圆圈注册事件
    $olLis.each(function (index,ele) {
        ele.index = index;
        $olLis.eq(index).click(function () {
            imgindex = this.index;

            console.log(this.index) ;
            circle=i=imgindex-1;
            $(this).addClass("current").siblings().removeClass("current")
            moveLeft()
        })
    })

//            $olLis.each(function (index,ele) {
//                ele.index = index;
//                $olLis.eq(index).click(function () {
//                    var nowindex = $('.current')[0].index;
//                    imgindex =  this.index - nowindex;
//                    $(this).addClass("current").siblings().removeClass("current")
//                    if(imgindex>0){
//                        for(var i = 0;i<imgindex;i++){
//                            moveLeft();
//                        }
//                    }else{
//                        for(var i = 0;i<Math.abs(imgindex) ;i++){
//                            moveRight();
//                        }
//                    }
////                    moveLeft()
//
//                })
//            })

    //给箭头注册事件


    //给右边箭头注册事件
    $(".right").click(function () {
        moveLeft()
    })
    //给左边箭头注册事件
    $(".left").click(function () {
        if(i>0){
            i--;
        }else{
            i=$imgsLis.length-1;
            i--;
            $(".lunbo-imgs").css({
                left:-1350*(i+1)+"px"
            },500)
        }
        $(".lunbo-imgs").stop().animate({
            left:-1350*i+"px"
        },500)


        if(circle>0){
            circle--;
        }else{
            circle=$imgsLis.length-2;
            $olLis.eq(circle).addClass("current").siblings().removeClass("current")
        }
        $olLis.eq(circle).addClass("current").siblings().removeClass("current")
    })


//            封装一个函数
    function moveLeft(){
        if(i<$imgsLis.length-1){
            i++;
        }else{
            i=1;
            $(".lunbo-imgs").css({
                left:-1350*(i-1)+"px"
            })
        }
        if(circle<$olLis.length-1){
            circle++;
        }else{
            circle=0;
            $olLis.eq(circle).addClass("current").siblings().removeClass("current")
        }
        $olLis.eq(circle).addClass("current").siblings().removeClass("current")
        $(".lunbo-imgs").stop().animate({
            left:-1350*i+"px"
        },500)
    }


//            开启定时器

    var timerId = setInterval(moveLeft,2000)


    //精彩瞬间轮播图
    var picl = 0;
    var picm = 0;
    var picr = 0;
    $(".images-l-top").mouseenter(function () {
        clearInterval(timerIdl);
    })
    $(".images-l-top").mouseleave(function () {
        timerIdl = setInterval(playL,18000)
    })
    var timerIdl = setInterval(playL,18000)

    //function playL() {
    //    if(picl < $(".images-l-top ul li").length-1) {
    //        picl++;
    //    }else {
    //        picl--;
    //    }
    //    $(".images-l-top ul").stop().animate({
    //        left:-388*picl+"px"
    //    },1000);
    //}
    var flag = true;
    function playL() {
        if(flag) {
            if(picl==$(".images-l-top ul li").length-1){
                flag=false;
            }
            picl++;
        };
        if(!flag) {
            if(picl==0){
                flag=true;
                return;
            }
            picl--;
        }
        $(".images-l-top ul").stop().animate({
            left:-388*picl+"px"
        },2000);
    }


    $(".images-m-top").mouseenter(function () {
        clearInterval(timerIdm);
    })
    $(".images-m-top").mouseleave(function () {
        timerIdm = setInterval(playM,5000)
    })
    var timerIdm = setInterval(playM,5000)
    function playM() {
        if(picm < $(".images-m-top ul li").length-1) {
            picm++;
        }else {
            picm--;
        }
        $(".images-m-top ul").stop().animate({
            left:-388*picm+"px"
        },2000);
    }

    $(".images-r-top").mouseenter(function () {
        clearInterval(timerIdr);
    })
    $(".images-r-top").mouseleave(function () {
        timerIdr = setInterval(playR,9000)
    })
    var timerIdr = setInterval(playR,9000)
    function playR() {
        if(picr < $(".images-r-top ul li").length-1) {
            picr++;
        }else {
            picr--;
        }
        $(".images-r-top ul").stop().animate({
            left:-388*picr+"px"
        },2000);
    }



    //小图的精彩瞬间
    var smallpicLbl = 0;
    $(".images-l-b-left").mouseenter(function () {
        clearInterval(timerIdlbl);
    })
    $(".images-l-b-left").mouseleave(function () {
        timerIdlbl = setInterval(playLbl,10000)
    })
    var timerIdlbl = setInterval(playLbl,10000)
    var flag = true;
    function playLbl() {
        if(flag) {
            if(smallpicLbl==$(".images-l-b-left ul li").length-1){
                flag=false;
            }
            smallpicLbl++;
        };
        if(!flag) {
            if(smallpicLbl==0){
                flag=true;
                return;
            }
            smallpicLbl--;
        }
        $(".images-l-b-left ul").stop().animate({
            top:-147*smallpicLbl+"px"
        },2000);
    }


    var smallpiclbr = 0;
    $(".images-l-b-right").mouseenter(function () {
        clearInterval(timerIdlbr);
    })
    $(".images-l-b-right").mouseleave(function () {
        timerIdlbr = setInterval(playLbr,15000)
    })
    var timerIdlbr = setInterval(playLbr,15000)
    function playLbr() {
        if(smallpiclbr < $(".images-l-b-right ul li").length-1) {
            smallpiclbr++;
        }else {
            smallpiclbr--;
        }
        $(".images-l-b-right ul").stop().animate({
            top:-147*smallpiclbr+"px"
        },2000);
    }





    var smallpicmbl = 0;
    $(".images-m-b-left").mouseenter(function () {
        clearInterval(timerIdmbl);
    })
    $(".images-m-b-left").mouseleave(function () {
        timerIdmbl = setInterval(playMbl,8000)
    })
    var timerIdmbl = setInterval(playMbl,8000)
    function playMbl() {
        if(smallpicmbl < $(".images-m-b-right ul li").length-1) {
            smallpicmbl++;
        }else {
            smallpicmbl--;
        }
        $(".images-m-b-left ul").stop().animate({
            top:-147*smallpicmbl+"px"
        },1000);
    }

    var smallpicmbr = 0;
    $(".images-m-b-right").mouseenter(function () {
        clearInterval(timerIdmbr);
    })
    $(".images-m-b-right").mouseleave(function () {
        timerIdmbr = setInterval(playMbr,7000)
    })
    var timerIdmbr = setInterval(playMbr,7000)
    function playMbr() {
        if(smallpicmbr < $(".images-m-b-right ul li").length-1) {
            smallpicmbr++;
        }else {
            smallpicmbr--;
        }
        $(".images-m-b-right ul").stop().animate({
            top:-147*smallpicmbr+"px"
        },2000);
    }


    var smallpicrbl = 0;
    $(".images-r-b-left").mouseenter(function () {
        clearInterval(timerIdrbl);
    })
    $(".images-r-b-left").mouseleave(function () {
        timerIdrbl = setInterval(playRbl,23000)
    })
    var timerIdrbl = setInterval(playRbl,23000)
    function playRbl() {
        if(smallpicrbl < $(".images-r-b-right ul li").length-1) {
            smallpicrbl++;
        }else {
            smallpicrbl--;
        }
        $(".images-r-b-left ul").stop().animate({
            top:-147*smallpicrbl+"px"
        },2000);
    }

    var smallpicrbr = 0;
    $(".images-r-b-right").mouseenter(function () {
        clearInterval(timerIdrbr);
    })
    $(".images-r-b-right").mouseleave(function () {
        timerIdrbr = setInterval(playRbr,9000)
    })
    var timerIdrbr = setInterval(playRbr,9000)
    function playRbr() {
        if(smallpicrbr < $(".images-r-b-right ul li").length-1) {
            smallpicrbr++;
        }else {
            smallpicrbr--;
        }
        $(".images-r-b-right ul").stop().animate({
            top:-147*smallpicrbr+"px"
        },1000);
    }
})
