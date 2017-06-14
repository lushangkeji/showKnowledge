/**
 * Created by Administrator on 2017/4/30.
 * 框架动画效果
 */

define(['jquery'], function($){
    return {
        mark : false,
        //初始化
        init : function(){
            window.resize = this.autoWidth;
            this.autoWidth();
            this.navChange();
            this.menuChange();
        },
        //屏幕分辨率变化检测
        autoWidth : function(){
            this.mark = window.innerWidth > 1000 ? true : false;
        },
        //点击按钮，左侧菜单伸缩
        navChange : function(){
            var This = this;
            $('.navBar').click(function(){
                var $wrapLeft = $('.wrapLeft').eq(0);
                var $header = $('.header').eq(0);
                var $wrapRight = $('.wrapRight').eq(0);
                if(This.mark){
                    $wrapLeft.animate({left:'-230px'}, 'slow');
                    $header.animate({left:'0'}, 'slow');
                    $wrapRight.animate({marginLeft:'0px'}, 'slow');
                    This.mark = !This.mark;
                }else{
                    $wrapLeft.animate({left:'0'}, 'slow');
                    $header.animate({left:'230px'}, 'slow');
                    $wrapRight.animate({marginLeft:'230px'}, 'slow');
                    This.mark = !This.mark;
                }
            });
        },
        //右上角个人信息显示或隐藏
        menuChange : function(){
            $('.menuBtn').click(function(){
                var $menuList = $('.menuList').eq(0);
                arguments.callee.mark == undefined ? false : true;
                arguments.callee.mark = !arguments.callee.mark;
                if(arguments.callee.mark){
                    $menuList.slideDown();
                }else{
                    $menuList.slideUp();
                }
            });
        }
    }
});