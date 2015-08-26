/**
COLIN.LIBRARY
**/

(function ($) {
    //层居中
    $.fn.htmlcenter = function () {
        this.css('position', 'fixed');
        this.css('top', ( $(window).height() - this.height() ) / 2 + $(window).scrollTop() + 'px');
        this.css('left', ( $(window).width() - this.width() ) / 2 + $(window).scrollLeft() + 'px');
    };

    //隐藏层
    $.fn.thover = function () {
        $(".mask").delay(500).fadeOut();
    };

    //单选按钮
    $.fn.jRadio = function (settings) {
        var defaults = {
            valueSelector: ".radio-value",  // 存放radio的value值的input表单的css选择器
            itemSelector: ".options > li", // radio项的css选择器
            checkedClass: "checked",    // 选择状态的类名
            completeFunction: function () {
            }    // 回调函数
        };
        var options = $.extend(defaults, settings || {});   // 使用参数
        var div = this;
        var radioValueInput = div.find(options.valueSelector);  // 单选按钮value的input表单
        var items = div.find(options.itemSelector); // 单选按钮项数组

        /*----初始化----*/
        /**
         * 进入页面，初始化单选按钮状态
         */
        items.each(function () {
            if ($(this).hasClass(options.checkedClass)) {
                updateState($(this));
            }
        });
        /*---- 添加事件----*/
        div.on("click", options.itemSelector, function () {
            var item = $(this);
            // 如果当前项的状态为未选择
            if (!item.hasClass(options.checkedClass)) {
                updateState(item);
                options.completeFunction(); // 执行回调函数
            }
            return false;
        });
        /*----函数----*/
        /**
         * 更新数据
         * @param item  操作项
         */
        function updateState(item) {
            var value = item.data("value");  // 获取当前项的value值
            radioValueInput.val(value); // 修改隐藏表单的值

            items.removeClass(options.checkedClass);    // 移除所有项的选中样式
            item.addClass(options.checkedClass);    // 为当前项添加选中样式
        }
    };

    //复选框
    $.fn.jCheckBox = function (settings) {
        // 默认参数
        var defaults = {
            valueSelector: ".checkbox-value",  // 存放每一项checkbox的value值的input表单的css选择器
            itemSelector: ".options > li", // checkbox项的css选择器
            checkedClass: "checked",    // 选择状态的类名
            completeFunction: function () {
            }    // 回调函数
        };
        var options = $.extend(defaults, settings || {});   // 使用参数

        var div = this;
        var items = div.find(options.itemSelector); // 复选框项数组

        /*----初始化----*/
        /**
         * 进入页面，初始化复选框状态
         */
        items.each(function () {
            var item = $(this);
            var valueInput = item.find(options.valueSelector);
            if (item.hasClass(options.checkedClass)) {

                var value = item.data("value"); // 获取当前项value
                valueInput.val(value); // 修改隐藏表单的值
            } else {

                valueInput.val(""); // 置空隐藏表单的值
            }
        });

        /*----添加事件----*/
        div.on("click", options.itemSelector, function () {
            var item = $(this);
            var valueInput = item.find(options.valueSelector);

            if (item.hasClass(options.checkedClass)) {

                valueInput.val(""); // 置空隐藏表单的值
                item.removeClass(options.checkedClass);
            } else {

                var value = item.data("value"); // 获取当前项value
                valueInput.val(value); // 修改隐藏表单的值
                item.addClass(options.checkedClass);
            }
            options.completeFunction(); // 执行回调函数
            return false;
        });

    };

    //下拉菜单
    $.fn.jSelect = function (settings) {
        // 默认参数
        var defaults = {
            viewSelector: ".select-view",   // select选择层容器css选择器
            valueSelector: ".select-value", // 存放select的value值的input表单的css选择器
            textSelector: ".select-text",  // select显示文本的css选择器
            iconSelector: ".select-icon", // select的icon的css选择器
            iconClickAble: true,    // 是否使用点击icon展示下拉项

            itemContainerSelector: ".options",    // 下拉层css选择器
            itemSelector: ".options > li",   // 下拉项css选择器

            completeFunction: function () {
            }    // 回调函数
        };

        var options = $.extend(defaults, settings || {});   // 使用参数

        var div = this;
        var selectView = div.find(options.viewSelector);    // select显示层容器
        var selectValueInput = selectView.find(options.valueSelector);   // select的value值的input表单
        var selectText = selectView.find(options.textSelector); // select显示文本
        var selectIcon = selectView.find(options.iconSelector); // select的icon
        var selectItemContainer = div.find(options.itemContainerSelector);  // select下拉层
        var items = div.find(options.itemSelector); // select下拉项

        /*----添加事件----*/
        /**
         * 点击icon或者点击显示层，显示下拉层
         */
        if (options.iconClickAble) {
            selectIcon.on("click", function () {
                selectItemContainerToggle();

                return false;
            });
        } else {
            selectView.on("click", function () {
                selectItemContainerToggle();

                return false;
            });
        }

        /**
         * 点击下拉项，修改value值，改变显示文本
         */
        items.each(function () {
            var item = $(this);

            item.on("click", function () {
                var value = $(this).data("value");  // 获取当前项的value
                var text = $(this).text();  // 获取当前项的文本内容

                selectValueInput.val(value);    // 修改value
                selectText.text(text);  // 修改文本内容

                selectItemContainer.slideUp("fast");    // 收起下拉层
                options.completeFunction(); // 执行回调函数
                return false;
            });
        });

        /*----函数----*/
        /**
         * 显示或者隐藏下拉层
         */
        function selectItemContainerToggle() {
            selectItemContainer.slideToggle("fast");
        }
    };

    //滑动固定顶部浮动层
    $.fn.navfix = function(topfix) {
        var topfix = topfix;
        var floatlayer = this;
        $(window).scroll(function(){
            if($(window).scrollTop()>=topfix){
                floatlayer.css({position: "fixed",top:0,left:0});
            }else{
                floatlayer.css('position','');
            }
        });
    };

    //滑动跟随滚动层
    $.fn.fixed = function (){
        var fixeddiv = this;
        var mh = $('body').height();
        var fh = fixeddiv.height();
        var t = fixeddiv.offset().top;
        $(window).scroll(function(e){
            s = $(document).scrollTop();
            if(s > t - 10){
                fixeddiv.css({position:"fixed",top:40});
                if(s + fh > mh){
                    fixeddiv.css('top',mh-s-fh+'px');
                }
            }else{
                fixeddiv.css('position','');
            }
        })
    };
})(jQuery);
//加载等待
!function (o) {
    "use strict";
    o.fn.toTop = function (t) {
        var i = this,
            e = o(window),
            s = o("html, body"),
            n = o.extend({
                    autohide: !0,
                    offset: 420,
                    speed: 500,
                    position: !0,
                    right: 15,
                    bottom: 30
                },
                t);
        i.css({
            cursor: "pointer"
        });
        n.autohide && i.css("display", "none");
        n.position && i.css({
            position: "fixed",
            right: n.right,
            bottom: n.bottom
        });
            i.click(function () {
                s.animate({
                        scrollTop: 0
                    },
                    n.speed)
            });
            e.scroll(function () {
                var o = e.scrollTop();
                n.autohide && (o > n.offset ? i.fadeIn(n.speed) : i.fadeOut(n.speed))
            })
    }
}(jQuery);
jQuery.MyCommon = {
    PageLoading: function (options) {
        var defaults = {
            opacity: 1,
            //loading页面透明度
            backgroundColor: "#fff",
            //loading页面背景色
            borderColor: "#bbb",
            //提示边框颜色
            borderWidth: 1,
            //提示边框宽度
            borderStyle: "solid",
            //提示边框样式
            loadingTips: "Loading, please wait...",
            //提示文本
            TipsColor: "#666",
            //提示颜色
            delayTime: 1000,
            //页面加载完成后，加载页面渐出速度
            zindex: 999,
            //loading页面层次
            sleep: 0
            //设置挂起,等于0时则无需挂起

        }
        var options = $.extend(defaults, options);

        //获取页面宽高
        var _PageHeight = document.documentElement.clientHeight,
            _PageWidth = document.documentElement.clientWidth;

        //在页面未加载完毕之前显示的loading Html自定义内容
        var _LoadingHtml = '<div id="loadingPage" style="position:fixed;left:0;top:0;_position: absolute;width:100%;height:' + _PageHeight + 'px;background:' + options.backgroundColor + ';opacity:' + options.opacity + ';filter:alpha(opacity=' + options.opacity * 100 + ');z-index:' + options.zindex + ';"><div id="loadingTips" style="position: absolute; cursor1: wait; width: auto;border-color:' + options.borderColor + ';border-style:' + options.borderStyle + ';border-width:' + options.borderWidth + 'px; height:80px; line-height:80px; padding-left:80px; padding-right: 5px;border-radius:10px;  background: ' + options.backgroundColor + ' url(img/loading.gif) no-repeat 5px center; color:' + options.TipsColor + ';font-size:20px;">' + options.loadingTips + '</div></div>';

        //呈现loading效果
        $("body").append(_LoadingHtml);

        //获取loading提示框宽高
        var _LoadingTipsH = document.getElementById("loadingTips").clientHeight,
            _LoadingTipsW = document.getElementById("loadingTips").clientWidth;

        //计算距离，让loading提示框保持在屏幕上下左右居中
        var _LoadingTop = _PageHeight > _LoadingTipsH ? (_PageHeight - _LoadingTipsH) / 2 : 0,
            _LoadingLeft = _PageWidth > _LoadingTipsW ? (_PageWidth - _LoadingTipsW) / 2 : 0;

        $("#loadingTips").css({
            "left": _LoadingLeft + "px",
            "top": _LoadingTop + "px"
        });

        //监听页面加载状态
        document.onreadystatechange = PageLoaded;

        //当页面加载完成后执行
        function PageLoaded() {
            if (document.readyState == "complete") {
                var loadingMask = $('#loadingPage');

                setTimeout(function () {
                        loadingMask.animate({
                                "opacity": 0
                            },
                            options.delayTime,
                            function () {
                                $(this).hide();

                            });

                    },
                    options.sleep);

            }
        }
    }
}