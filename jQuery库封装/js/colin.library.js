/**
COLIN.LIBRARY
**/

(function ($) {
    //�����
    $.fn.htmlcenter = function () {
        this.css('position', 'fixed');
        this.css('top', ( $(window).height() - this.height() ) / 2 + $(window).scrollTop() + 'px');
        this.css('left', ( $(window).width() - this.width() ) / 2 + $(window).scrollLeft() + 'px');
    };

    //���ز�
    $.fn.thover = function () {
        $(".mask").delay(500).fadeOut();
    };

    //��ѡ��ť
    $.fn.jRadio = function (settings) {
        var defaults = {
            valueSelector: ".radio-value",  // ���radio��valueֵ��input����cssѡ����
            itemSelector: ".options > li", // radio���cssѡ����
            checkedClass: "checked",    // ѡ��״̬������
            completeFunction: function () {
            }    // �ص�����
        };
        var options = $.extend(defaults, settings || {});   // ʹ�ò���
        var div = this;
        var radioValueInput = div.find(options.valueSelector);  // ��ѡ��ťvalue��input��
        var items = div.find(options.itemSelector); // ��ѡ��ť������

        /*----��ʼ��----*/
        /**
         * ����ҳ�棬��ʼ����ѡ��ť״̬
         */
        items.each(function () {
            if ($(this).hasClass(options.checkedClass)) {
                updateState($(this));
            }
        });
        /*---- ����¼�----*/
        div.on("click", options.itemSelector, function () {
            var item = $(this);
            // �����ǰ���״̬Ϊδѡ��
            if (!item.hasClass(options.checkedClass)) {
                updateState(item);
                options.completeFunction(); // ִ�лص�����
            }
            return false;
        });
        /*----����----*/
        /**
         * ��������
         * @param item  ������
         */
        function updateState(item) {
            var value = item.data("value");  // ��ȡ��ǰ���valueֵ
            radioValueInput.val(value); // �޸����ر���ֵ

            items.removeClass(options.checkedClass);    // �Ƴ��������ѡ����ʽ
            item.addClass(options.checkedClass);    // Ϊ��ǰ�����ѡ����ʽ
        }
    };

    //��ѡ��
    $.fn.jCheckBox = function (settings) {
        // Ĭ�ϲ���
        var defaults = {
            valueSelector: ".checkbox-value",  // ���ÿһ��checkbox��valueֵ��input����cssѡ����
            itemSelector: ".options > li", // checkbox���cssѡ����
            checkedClass: "checked",    // ѡ��״̬������
            completeFunction: function () {
            }    // �ص�����
        };
        var options = $.extend(defaults, settings || {});   // ʹ�ò���

        var div = this;
        var items = div.find(options.itemSelector); // ��ѡ��������

        /*----��ʼ��----*/
        /**
         * ����ҳ�棬��ʼ����ѡ��״̬
         */
        items.each(function () {
            var item = $(this);
            var valueInput = item.find(options.valueSelector);
            if (item.hasClass(options.checkedClass)) {

                var value = item.data("value"); // ��ȡ��ǰ��value
                valueInput.val(value); // �޸����ر���ֵ
            } else {

                valueInput.val(""); // �ÿ����ر���ֵ
            }
        });

        /*----����¼�----*/
        div.on("click", options.itemSelector, function () {
            var item = $(this);
            var valueInput = item.find(options.valueSelector);

            if (item.hasClass(options.checkedClass)) {

                valueInput.val(""); // �ÿ����ر���ֵ
                item.removeClass(options.checkedClass);
            } else {

                var value = item.data("value"); // ��ȡ��ǰ��value
                valueInput.val(value); // �޸����ر���ֵ
                item.addClass(options.checkedClass);
            }
            options.completeFunction(); // ִ�лص�����
            return false;
        });

    };

    //�����˵�
    $.fn.jSelect = function (settings) {
        // Ĭ�ϲ���
        var defaults = {
            viewSelector: ".select-view",   // selectѡ�������cssѡ����
            valueSelector: ".select-value", // ���select��valueֵ��input����cssѡ����
            textSelector: ".select-text",  // select��ʾ�ı���cssѡ����
            iconSelector: ".select-icon", // select��icon��cssѡ����
            iconClickAble: true,    // �Ƿ�ʹ�õ��iconչʾ������

            itemContainerSelector: ".options",    // ������cssѡ����
            itemSelector: ".options > li",   // ������cssѡ����

            completeFunction: function () {
            }    // �ص�����
        };

        var options = $.extend(defaults, settings || {});   // ʹ�ò���

        var div = this;
        var selectView = div.find(options.viewSelector);    // select��ʾ������
        var selectValueInput = selectView.find(options.valueSelector);   // select��valueֵ��input��
        var selectText = selectView.find(options.textSelector); // select��ʾ�ı�
        var selectIcon = selectView.find(options.iconSelector); // select��icon
        var selectItemContainer = div.find(options.itemContainerSelector);  // select������
        var items = div.find(options.itemSelector); // select������

        /*----����¼�----*/
        /**
         * ���icon���ߵ����ʾ�㣬��ʾ������
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
         * ���������޸�valueֵ���ı���ʾ�ı�
         */
        items.each(function () {
            var item = $(this);

            item.on("click", function () {
                var value = $(this).data("value");  // ��ȡ��ǰ���value
                var text = $(this).text();  // ��ȡ��ǰ����ı�����

                selectValueInput.val(value);    // �޸�value
                selectText.text(text);  // �޸��ı�����

                selectItemContainer.slideUp("fast");    // ����������
                options.completeFunction(); // ִ�лص�����
                return false;
            });
        });

        /*----����----*/
        /**
         * ��ʾ��������������
         */
        function selectItemContainerToggle() {
            selectItemContainer.slideToggle("fast");
        }
    };

    //�����̶�����������
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

    //�������������
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
//���صȴ�
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
            //loadingҳ��͸����
            backgroundColor: "#fff",
            //loadingҳ�汳��ɫ
            borderColor: "#bbb",
            //��ʾ�߿���ɫ
            borderWidth: 1,
            //��ʾ�߿���
            borderStyle: "solid",
            //��ʾ�߿���ʽ
            loadingTips: "Loading, please wait...",
            //��ʾ�ı�
            TipsColor: "#666",
            //��ʾ��ɫ
            delayTime: 1000,
            //ҳ�������ɺ󣬼���ҳ�潥���ٶ�
            zindex: 999,
            //loadingҳ����
            sleep: 0
            //���ù���,����0ʱ���������

        }
        var options = $.extend(defaults, options);

        //��ȡҳ����
        var _PageHeight = document.documentElement.clientHeight,
            _PageWidth = document.documentElement.clientWidth;

        //��ҳ��δ�������֮ǰ��ʾ��loading Html�Զ�������
        var _LoadingHtml = '<div id="loadingPage" style="position:fixed;left:0;top:0;_position: absolute;width:100%;height:' + _PageHeight + 'px;background:' + options.backgroundColor + ';opacity:' + options.opacity + ';filter:alpha(opacity=' + options.opacity * 100 + ');z-index:' + options.zindex + ';"><div id="loadingTips" style="position: absolute; cursor1: wait; width: auto;border-color:' + options.borderColor + ';border-style:' + options.borderStyle + ';border-width:' + options.borderWidth + 'px; height:80px; line-height:80px; padding-left:80px; padding-right: 5px;border-radius:10px;  background: ' + options.backgroundColor + ' url(img/loading.gif) no-repeat 5px center; color:' + options.TipsColor + ';font-size:20px;">' + options.loadingTips + '</div></div>';

        //����loadingЧ��
        $("body").append(_LoadingHtml);

        //��ȡloading��ʾ����
        var _LoadingTipsH = document.getElementById("loadingTips").clientHeight,
            _LoadingTipsW = document.getElementById("loadingTips").clientWidth;

        //������룬��loading��ʾ�򱣳�����Ļ�������Ҿ���
        var _LoadingTop = _PageHeight > _LoadingTipsH ? (_PageHeight - _LoadingTipsH) / 2 : 0,
            _LoadingLeft = _PageWidth > _LoadingTipsW ? (_PageWidth - _LoadingTipsW) / 2 : 0;

        $("#loadingTips").css({
            "left": _LoadingLeft + "px",
            "top": _LoadingTop + "px"
        });

        //����ҳ�����״̬
        document.onreadystatechange = PageLoaded;

        //��ҳ�������ɺ�ִ��
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