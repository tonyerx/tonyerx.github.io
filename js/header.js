/**
 * Created by TONYERX on 2017/2/7.
 */


$(function () {
// ͷ��JS����
    //�������������ͣ�¼�
    $(".tools-service").hover(function () {
        $(".tools-service-more").show();
        $(".tools-service b").hide();
    }, function () {
        $(".tools-service-more").hide();
        $(".tools-service b").show();
    });

    //�������������ϸҳ����ͣ�¼�
    $(".tools-service-more").find("a").hover(function () {
        $(this).stop().animate({
            "backgroundColor" : "#687D92"
        })
    }, function () {
        $(this).stop().animate({
            "backgroundColor" : "transparent"
        }, 100)
    });

    //ͷ����������ͣ�¼�
    $(".header-b-nav").children("li").hover(function () {
            $(this).children(".nav-desc").stop().show();
        }, function () {
            $(this).children(".nav-desc").stop().hide();
        }
    );
    //ͷ���������˵�����ҳ��ͣ�¼�
    $(".header-b-nav").find(".nav-desc").children("a").hover(function () {
        if($(this).index() == 1) {
            $(this).parent().children().first().children(".nav-triangle-s").stop().animate({"border-bottom-color":"#C00"}, 200);
        }
        $(this).css("color","#fff").stop().animate({"backgroundColor":"#C00"}, 200).children("span").css("border-bottom-color", "transparent");
    }, function () {
        $(this).parent().children().first().children(".nav-triangle-s").stop().animate({"border-bottom-color":"#fff"}, 100);
        $(this).css("color","").stop().animate({"backgroundColor":"#fff"}, 100).children("span").removeAttr("style");
    });

// �Ų�JS����
    //������ѡ��˵�������¼�
    var isShowLeft = false;
    //��������
    $(".continent-tips").on("click", function () {
        if(isShowLeft) {
            $(this).next(".continent-items").hide();
        } else {
            $(this).next(".continent-items").show();
        }
        isShowLeft = !isShowLeft;
    })
    var isShowRight = false;
    $(".country-tips").on("click", function () {
        if(isShowRight) {
            $(this).next(".continent-items").hide();
        } else {
            $(this).next(".continent-items").show();
        }
        isShowRight = !isShowRight;
    })
    //ѡ����
    $(".continent-items ul li a").on("click", function () {
        var btnTips = $(this).parent().parent().parent().prev();
        btnTips.text($(this).text()).next(".continent-items").hide();
        if(btnTips.attr("class")=="continent-tips") {
            isShowLeft = !isShowLeft;
        } else {
            isShowRight = !isShowRight;
        }
    })
});


