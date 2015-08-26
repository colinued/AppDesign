!
    function(a) {
        function b(a) {
            var b = q.getStore("gearList");
            q.setStore("buyMesg", b[a])
        }
        function c(a) {
            var b = q.getStore("buyMesg").productList;
            q.setStore("buyData", b[a])
        }
        function d(b) {
            b = Number(b);
            var d = q.getStore("buyMesg"),
                e = (d.length, d.productList[0]),
                f = d.productList[1],
                g = d.gradeLowestAnnualYieldRate,
                h = null,
                i = null,
                j = null,
                k = null,
                l = f ? d.productList[1].lowestInvestAmount: 199e3,
                m = {
                    day1: .35,
                    day7: .35,
                    day14: .35,
                    day21: .35,
                    day30: .35,
                    day60: .35,
                    day89: 1.6,
                    day180: 1.8,
                    day365: 2,
                    day720: 2.6,
                    day1080: 3.25
                };
            e && 2 == e.productStatus && 4 != e.productStatus && b > d.productList[0].lowestInvestAmount && l > b ? (g = d.productList[0].annualYieldRate / 100, h = 0 == d.productList[0].gradeTerm ? 1 : d.productList[0].gradeTerm, i = d.productList[0].productName, j = d.productList[0].gradeName, k = d.productList[0].lowestInvestAmount, c(0)) : f && 2 == f.productStatus && 4 != f.productStatus && b > d.productList[1].lowestInvestAmount ? (g = d.productList[1].annualYieldRate / 100, h = 0 == d.productList[1].gradeTerm ? 1 : d.productList[1].gradeTerm, i = d.productList[1].productName, j = d.productList[1].gradeName, k = d.productList[1].lowestInvestAmount, c(1)) : (g = d.productList[0].annualYieldRate / 100, h = 0 == d.productList[0].gradeTerm ? 1 : d.productList[0].gradeTerm, i = d.productList[0].productName, j = d.productList[0].gradeName, c(0));
            var n = q.getStore("buyData").productStatus;
            2 == n ? 0 == q.getStore("buyData").canBuyAmout ? (a(".productDetail").show(), y.removeClass("bg-col-00d397").addClass("bg-col-ccc").html("已抢光")) : (a(".productDetail").show(), y.removeClass("bg-col-ccc").addClass("bg-col-00d397").html("存钱")) : 4 == n ? (a(".productDetail").show(), y.removeClass("bg-col-00d397").addClass("bg-col-ccc").html("已抢光")) : 5 == n && (a(".productDetail").hide(), y.removeClass("bg-col-00d397").addClass("bg-col-ccc").html("敬请期待"));
            var o = q.getStore("buyData").gradeTerm;
            if (0 == o) {
                var p = q.getStore("hqInfo") || "";
                p && "false" == p.isCanPay && "true" == p.isHaveHq && y.removeClass("bg-col-00d397").addClass("bg-col-ccc").html("首次购买次日可续存")
            }
            var r = (b * (Math.pow(1 + g, h / 365) - 1)).toFixed(2).toString(),
                s = r.split(".")[0] + "." + r.split(".")[1].substring(0, 2),
                t = (m["day" + Math.abs(h)] / 100 * h * b / 365).toFixed(2).toString(),
                u = t.split(".")[0] + "." + t.split(".")[1].substring(0, 2);
            w.html(s),
                x.html(u),
                z.html(i),
                C.html("活期" == j ? "每天": j)
        }
        function e(a, c, e) {
            b(F - 1),
                V.option.stopDraw = !1,
                q.getStore("buyMesg").gradeLowestInvestAmount > V.option.totalMoney ? V.init(q.getStore("buyMesg")) : d(V.option.totalMoney),
                v.find("ul").find("span").removeClass("ho-h-on"),
                v.find("ul").find("li").eq(F).find("span").addClass("ho-h-on"),
                v.find("ul").animate({
                        "margin-left": -(F - 1) * (s / 4)
                    },
                    300),
                a && c && e ? (v.find("li").eq(a).animate({
                        width: s / 4 + "px"
                    },
                    300).find(".ho-h-tt").animate({
                        "font-size": "1rem"
                    },
                    300), v.find("li").eq(a).animate({
                        width: s / 4 + "px"
                    },
                    300).find(".ho-h-to").animate({
                        "font-size": "0.75rem"
                    },
                    300), v.find("li").eq(c).animate({
                        width: 2 * s / 4 + "px"
                    },
                    300).find(".ho-h-tt").animate({
                        "font-size": "1.875rem"
                    },
                    300), v.find("li").eq(c).animate({
                        width: 2 * s / 4 + "px"
                    },
                    300).find(".ho-h-to").animate({
                        "font-size": "0.9375rem"
                    },
                    300), v.find("ul").find("li").eq(a).find(".rateLow").hide(), v.find("ul").find("li").eq(c).find(".rateLow").show()) : (v.find("li").eq(c).animate({
                        width: s / 4 + "px"
                    },
                    300).find(".ho-h-tt").animate({
                        "font-size": "1rem"
                    },
                    300), v.find("li").eq(c).animate({
                        width: s / 4 + "px"
                    },
                    300).find(".ho-h-to").animate({
                        "font-size": "0.75rem"
                    },
                    300), v.find("li").eq(a).animate({
                        width: 2 * s / 4 + "px"
                    },
                    300).find(".ho-h-tt").animate({
                        "font-size": "1.875rem"
                    },
                    300), v.find("li").eq(a).animate({
                        width: 2 * s / 4 + "px"
                    },
                    300).find(".ho-h-to").animate({
                        "font-size": "0.9375rem"
                    },
                    300));
            var f = u.val(),
                g = q.getStore("buyMesg").gradeLowestInvestAmount;
            0 == q.getStore("buyMesg").gradeTerm ? V.option.ruleCellVal = 100 : (V.option.ruleCellVal = 1e3, f % g != 0 && (f = Math.round(Number(f) / Number(g)) * Number(g), B.html("单价1000元/份"), A.show(), u.val(f))),
                V.reDraw(f)
        }
        function f(b) {
            var c = null,
                d = null,
                f = null,
                g = null,
                h = null,
                i = null,
                j = null;
            document.getElementById("gearCot").addEventListener("touchstart",
                function(a) {
                    a.preventDefault(),
                        c = a.touches[0].clientX;
                    var b = new Date;
                    i = b.getTime()
                },
                !1),
                document.getElementById("gearCot").addEventListener("touchmove",
                    function(a) {
                        d = a.touches[0].clientX,
                            v.find("ul").css("margin-left", -(F - 1) * (s / 4) + (d - c) / 4),
                            d - c > 0 ? (h = F - 1, v.find("li").eq(F).css("width", 2 * s / 4 - s / 4 * Math.abs(d - c) / s + "px").find(".ho-h-tt").css("font-size", 1.875 - .875 * Math.abs(d - c) / s + "rem"), v.find("li").eq(F).css("width", 2 * s / 4 - s / 4 * Math.abs(d - c) / s + "px").find(".ho-h-to").css("font-size", .9375 - .1875 * Math.abs(d - c) / s + "rem"), v.find("li").eq(h).css("width", s / 4 + s / 4 * Math.abs(d - c) / s + "px").find(".ho-h-tt").css("font-size", 1 + .875 * Math.abs(d - c) / s + "rem"), v.find("li").eq(h).css("width", s / 4 + s / 4 * Math.abs(d - c) / s + "px").find(".ho-h-to").css("font-size", .75 + .1875 * Math.abs(d - c) / s + "rem")) : (g = F + 1, v.find("li").eq(F).css("width", 2 * s / 4 - s / 4 * Math.abs(d - c) / s + "px").find(".ho-h-tt").css("font-size", 1.875 - .875 * Math.abs(d - c) / s + "rem"), v.find("li").eq(F).css("width", 2 * s / 4 - s / 4 * Math.abs(d - c) / s + "px").find(".ho-h-to").css("font-size", .9375 - .1875 * Math.abs(d - c) / s + "rem"), v.find("li").eq(g).css("width", s / 4 + s / 4 * Math.abs(d - c) / s + "px").find(".ho-h-tt").css("font-size", 1 + .875 * Math.abs(d - c) / s + "rem"), v.find("li").eq(g).css("width", s / 4 + s / 4 * Math.abs(d - c) / s + "px").find(".ho-h-to").css("font-size", .75 + .1875 * Math.abs(d - c) / s + "rem"))
                    },
                    !1);
            var k = null,
                l = null;
            v.find("li").bind("touchend",
                function() {
                    var b = new Date;
                    j = b.getTime(),
                        k = a(this).index(),
                        l = F
                }),
                document.getElementById("gearCot").addEventListener("touchend",
                    function(a) {
                        if (f = a.changedTouches[0].clientX, 180 > j - i && Math.abs(f - c) < 5) k != F && 0 != k && (k > l ? (F += 1, e(l, k, !0)) : (F -= 1, e(l, k, !0)));
                        else if (f > c) if (f - c > s / 4) {
                            if (1 >= F) return v.find("ul").animate({
                                    "margin-left": 0
                                },
                                200),
                                v.find("li").eq(F).css("width", 2 * s / 4 + "px").find(".ho-h-tt").animate({
                                        "font-size": "1.875rem"
                                    },
                                    200),
                                v.find("li").eq(F).css("width", 2 * s / 4 + "px").find(".ho-h-to").animate({
                                        "font-size": "0.9375rem"
                                    },
                                    200),
                                v.find("li").eq(h).css("width", s / 4 + "px").find(".ho-h-tt").animate({
                                        "font-size": "1.875rem"
                                    },
                                    200),
                                void v.find("li").eq(h).css("width", s / 4 + "px").find(".ho-h-to").animate({
                                        "font-size": "0.9375rem"
                                    },
                                    200);
                            F -= 1,
                                e(F + 1, h, !0)
                        } else e(F, h);
                        else if (c - f > s / 4) {
                            if (F >= b) return v.find("ul").animate({
                                    "margin-left": -(s / 4) * (b - 1)
                                },
                                200),
                                v.find("li").eq(F).css("width", 2 * s / 4 + "px").find(".ho-h-tt").animate({
                                        "font-size": "1.875rem"
                                    },
                                    200),
                                v.find("li").eq(F).css("width", 2 * s / 4 + "px").find(".ho-h-to").animate({
                                        "font-size": "0.9375rem"
                                    },
                                    200),
                                v.find("li").eq(g).find(".ho-h-tt").animate({
                                        "font-size": "1.875rem"
                                    },
                                    200),
                                void v.find("li").eq(g).find(".ho-h-to").animate({
                                        "font-size": "0.9375rem"
                                    },
                                    200);
                            F += 1,
                                e(F - 1, g, !0)
                        } else e(F, g)
                    },
                    !1)
        }
        function g(b) {
            var c = b.length,
                d = D.replace("#width", s / 4 + "px");
            t.width((c + 4) * (s / 4));
            for (var e = 0; c > e; e++) d += b[e].productList.length > 1 ? E.replace("#width", s / 4 + "px").replace("#gradeName", b[e].gradeName).replace("#promotionContent", b[e].productList[0].promotionContent ? '<span class="ho-h-tf ft-20 dp-n fm-fz ho-tf bd-x bd-nl-g bd-nt-g bd-nr-g bd-nb-g promotion-content" data-index=' + e + ">" + b[e].productList[0].promotionContent + "</span>": "").replace("#gradeLowestAnnualYieldRate", b[e].productList[0].annualYieldRate + "%").replace("#gradeHighestAnnualYieldRate", b[e].productList[1].annualYieldRate + "%") : E.replace("#width", s / 4 + "px").replace("#gradeName", b[e].gradeName).replace("rateLow", "").replace("#promotionContent", b[e].productList[0].promotionContent ? '<span class="ho-h-tf ft-20 dp-n fm-fz ho-tf bd-x bd-nl-g bd-nt-g bd-nr-g bd-nb-g promotion-content" data-index=' + e + ">" + b[e].productList[0].promotionContent + "</span>": "").replace("#gradeLowestAnnualYieldRate", "").replace("#gradeHighestAnnualYieldRate", b[e].productList[0].annualYieldRate + "%");
            t.append(d),
                t.find(".promotion-content").on("touchend", b,
                    function() {
                        var c = a(this).data("index"),
                            d = b[c].productList[0].extra1 || "暂无内容";
                        r.screeTips("活动详情", '<p class="remindword">' + d + "</p>"),
                            event.preventDefault()
                    }),
                0 >= F ? (v.find("ul").find("li").eq(1).find("span").addClass("ho-h-on"), v.find("ul").animate({
                        "margin-left": 0
                    },
                    300)) : (v.find("ul").find("li").eq(F).css("width", 2 * s / 4 + "px").find("span").addClass("ho-h-on"), v.find("ul").animate({
                        "margin-left": -(F - 1) * (s / 4)
                    },
                    300), v.find("ul").find("li").eq(F).find(".rateLow").show()),
                f(c)
        }
        function h() {
            var b = {
                    1 : "单笔最高19.9万元",
                    2 : "起购金额1000元",
                    3 : "单价1000元/份"
                },
                c = this;
            this.show = function(a) {
                B.html(b[a]),
                    A.show()
            },
                u.focus(function() {
                    G = !0
                }),
                u.bind("input",
                    function() {
                        var b = a(this).val();
                        b > 199e3 && (b = 199e3, c.show(1)),
                            a(this).val(b)
                    }),
                u.blur(function() {
                    var b = a(this).val() || 0,
                        d = q.getStore("buyData").lowestInvestAmount;
                    G = 100 > b || b % 100 > 0 ? !0 : !1,
                    Number(b) < Number(d) && (b = d, c.show(2)),
                    b > 199e3 && (b = 199e3, c.show(1)),
                    "4" != q.getStore("buyData").gradeId && b % d != 0 && (b = Math.floor(Number(b) / Number(d)) * Number(d), c.show(3)),
                        V.option.stopDraw = !1,
                        a(this).val(b),
                        V.reDraw(b)
                })
        }
        function i() {
            var a = navigator.userAgent.toLowerCase();
            return "micromessenger" == a.match(/MicroMessenger/i) ? !0 : !1
        }
        function j() {
            y.on("touchend",
                function() {
                    var b = q.getStore("clientMsg").version;
                    if (!a(this).hasClass("bg-col-ccc")) {
                        var c = q.getStore("buyData").productType;
                        if (101 == c) window.location.href = "fund/tobuy.html?itemId=" + q.getStore("buyData").productId;
                        else if (102 == c) {
                            var d = parseInt(u.val()),
                                e = parseInt(d / Number(q.getStore("buyData").lowestInvestAmount)) || 1,
                                f = 4 == q.getStore("buyData").gradeId ? d: Number(q.getStore("buyData").lowestInvestAmount) * e || Number(q.getStore("buyData").lowestInvestAmount);
                            if (i()) r.getQuery("sid") ? k(f, e) : window.location.href = "http://jrappgw.jd.com/wxjdissue/JDIssue/login2?source=999&info=" + q.getStore("isWeixn").info + "&returnUrl=" + encodeURIComponent("http://" + window.location.host + window.location.pathname + "?fillInsur=" + q.getStore("buyData").releventId + "&version=" + b + "&source=app&bizType=2");
                            else if (q.getStore("clientMsg").sid) {
                                if (q.removeStore("totalItem"), parseInt(f) > parseInt(q.getStore("buyData").canBuyAmout)) return B.html("不能超过库存"),
                                    void A.show();
                                k(f, e)
                            } else {
                                var g = navigator.userAgent.toLowerCase(),
                                    h = /jdjr-app/.test(g);
                                if (h) {
                                    a.waitFor(function() {
                                            return !! window.oBridgev3
                                        },
                                        function() {
                                            var a = {
                                                type: 1,
                                                data: ""
                                            };
                                            window.oBridgev3.jsToGetResp(function(a) {
                                                    window.getSidt(a)
                                                },
                                                a)
                                        })
                                } else window.location.href = "http://passport.m.jd.com/user/login.action?v=t&sid=&returnurl=" + encodeURIComponent(window.location.href + "?version=" + b)
                            }
                        }
                    }
                    event.preventDefault()
                }),
                A.bind("webkitAnimationEnd",
                    function() {
                        a(this).hide()
                    }),
                a(".home-tip-cot").bind("touchstart",
                    function() {
                        a(this).find(".home-tip").addClass("home-tip-on")
                    }),
                a(".home-tip-cot").bind("touchend",
                    function() {
                        a(this).find(".home-tip").removeClass("home-tip-on"),
                            r.screeTips("收益说明", '<p class="remindword">年化收益率每日会有波动，收益也会波动。预期收益仅作为参考，请以实际收益为准</p>')
                    }),
                a(".productDetail").tap(function() {
                    window.location.href = o.xbAl.bxUrl + "?sid=" + q.getStore("clientMsg").sid + "&souce=" + q.getStore("clientMsg").source + "&itemId=" + q.getStore("buyData").releventId + "&bizType=2#detail"
                }),
                a("#help").tap(function() {
                    window.location.href = "help.html" + window.location.search
                }),
                a("#goindex").tap(function() {
                    window.location.href = "index.html" + window.location.search
                })
        }
        function k(a, b) {
            var c = q.getStore("buyData").gradeTerm,
                d = q.getStore("clientMsg").version;
            if (0 == c) {
                var e = q.getStore("hqInfo") || "";
                e && "true" == e.isCanPay && "true" == e.isHaveHq ? window.location.href = o.xbAl.bxUrl + "?orderId=" + e.orderNo + "&val=" + a + "&sid=" + q.getStore("clientMsg").sid + "&source=" + q.getStore("clientMsg").source + "&version=" + d + "&bizType=2#addbuyinsur": window.location.href = o.xbAl.bxUrl + "?fillInsur=" + q.getStore("buyData").releventId + "&val=" + a + "&fs=" + b + "&gradeName=" + encodeURI(q.getStore("buyData").gradeName) + "&source=" + q.getStore("clientMsg").source + "&sid=" + q.getStore("clientMsg").sid + "&version=" + d + "&bizType=2"
            } else window.location.href = o.xbAl.bxUrl + "?fillInsur=" + q.getStore("buyData").releventId + "&val=" + a + "&fs=" + b + "&gradeName=" + encodeURI(q.getStore("buyData").gradeName) + "&source=" + q.getStore("clientMsg").source + "&sid=" + q.getStore("clientMsg").sid + "&version=" + d + "&bizType=2"
        }
        function l(a) {
            q.setStore("gearList", a),
                g(a),
                b(F - 1),
                0 == q.getStore("buyMesg").gradeTerm ? (V.option.ruleCellVal = 100, V.init(q.getStore("buyMesg"))) : V.init(q.getStore("buyMesg")),
                j()
        }
        function m(a) {
            for (var b = 0; b < a.length; b++) if (0 == a[b].gradeTerm) return a[b].productList;
            return null
        }
        function n() {
            i() && a(".wx-tx").show(),
                h();
            var b = r.getQuery("source") || "",
                c = r.getQuery("sid") || "",
                d = r.getQuery("version") || 5;
            q.setStore("clientMsg", {
                source: b,
                sid: c,
                version: d
            }),
                q.setStore("isWeixn", {
                    info: r.getQuery("info") || ""
                }),
                p.getAjax(o.xbAl.xbGetProductList, {
                        sid: c,
                        source: b,
                        version: d
                    },
                    function(d) {
                        if (q.getStore("clientMsg").sid) {
                            var e = m(d);
                            p.getAjax(o.xbAl.xbgetHqInfo, {
                                    productId: e[0].releventId,
                                    sid: c,
                                    source: b
                                },
                                function(b) {
                                    q.setStore("hqInfo", b),
                                        l(d),
                                        a.loading.showContent()
                                })
                        } else l(d),
                            a.loading.showContent()
                    })
        }
        var o = a.rouetMap(),
            p = a.libAjax(),
            q = a.store(),
            r = a.tools(),
            s = a(window).width(),
            t = a("#gear"),
            u = (a("#rule"), a("#money")),
            v = a("#gearCot"),
            w = (a("#ruleCot"), a("#moneyYq")),
            x = a("#moneyMb"),
            y = a("#buyProductBtn"),
            z = a("#productName"),
            A = a("#showTips"),
            B = a("#tipsMsg"),
            C = a("#getDay"),
            D = '<li class="fl ho-h-250 dp-vc tx-c ft-col-999" style="width:#width"><span class="ho-h-to fm-fz ho-dq">&nbsp;</span><br /><span class="ho-h-tt fm-nbb ho-pn">&nbsp;</span><br /><span class="ho-h-th dp-n">&nbsp;</span></li>',
            E = '<li class="fl ho-h-250 dp-vc tx-c ft-col-999" style="width:#width"><span class="ho-h-to fm-fz fm-nb ho-dq">#gradeName</span><br /><span class="ho-h-tt fm-nbb ho-pn"><span class="rateLow dp-n">#gradeLowestAnnualYieldRate~</span><span id="rateHigh">#gradeHighestAnnualYieldRate</span></span><br /><span class="ho-h-th ft-22 dp-n fm-fz ho-tp">年化收益率</span><br />#promotionContent</li>',
            F = 1,
            G = !1,
            H = null,
            I = null,
            J = null,
            K = null,
            L = null,
            M = .1,
            N = null,
            O = null,
            P = null,
            Q = null,
            R = !1,
            S = null,
            T = null,
            U = null;
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(a) {
            U = setTimeout(function() {
                    a()
                },
                15)
        },
            window.cancelAnimationFrame = window.cancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.cancelAnimationFrame || window.webkitCancelAnimationFrame ||
            function(a) {
                clearTimeout(U)
            };
        var V = {
            option: {
                ruleCellWidth: 14,
                ruleCellHeightl: 12,
                ruleCellHeighth: 24,
                ruleLength: 100,
                ruleCellVal: 1e3,
                ruleStartX: 0,
                argsStartX: 0,
                ruleNowVal: 0,
                ruleSrartNum: 20,
                canvasWidth: 0,
                canvasHeight: 0,
                pointStartX: 0,
                pointEndX: 0,
                stopDraw: !1,
                totalMoney: 0,
                dMaxMoney: 199e3,
                defaultMon: 1e3
            },
            init: function(a) {
                a.productList[0].lowestInvestAmount;
                z.html(a.productList[0].productName);
                var b = a.productList[0].gradeName;
                C.html("活期" == b ? "每天": b),
                    H = document.getElementById("ruleCot"),
                    I = H.getContext("2d"),
                    H.width = 2 * H.offsetWidth,
                    H.height = 2 * H.offsetHeight,
                    V.option.canvasWidth = 2 * H.offsetWidth,
                    V.option.canvasHeight = 2 * H.offsetHeight,
                    H.style.width = "",
                    H.style.height = "",
                    V.option.argsStartX = V.returnX(V.option.defaultMon),
                    V.option.ruleStartX = V.option.argsStartX,
                    V.draw(),
                    H.addEventListener("touchstart", V.preDraw, !1),
                    H.addEventListener("touchmove", V.move, !1),
                    H.addEventListener("touchend", V.correct, !1)
            },
            returnX: function(a) {
                return V.option.canvasWidth / V.option.ruleCellWidth / 2 - a / V.option.ruleCellVal
            },
            reDraw: function(a) {
                V.option.ruleStartX = V.returnX(a),
                    V.draw()
            },
            aniDraw: function(a, b) {
                var c = 6;
                T = function() {
                    if (a > .1) {
                        if (b ? V.option.ruleStartX = V.option.ruleStartX + c: V.option.ruleStartX = V.option.ruleStartX - c, V.option.totalMoney < q.getStore("buyData").lowestInvestAmount) return V.option.ruleStartX = V.returnX(q.getStore("buyData").lowestInvestAmount),
                            B.html("起购金额1000元"),
                            V.option.stopDraw = !1,
                            A.show(),
                            void V.draw();
                        if (V.option.totalMoney > q.getStore("buyData").productAmount, V.option.totalMoney > V.option.dMaxMoney) return V.option.ruleStartX = V.returnX(V.option.dMaxMoney),
                            B.html("单笔最高19.9万元"),
                            V.option.stopDraw = !1,
                            A.show(),
                            void V.draw();
                        if (V.option.ruleStartX > V.option.canvasWidth / V.option.ruleCellWidth / 2) return void(V.option.stopDraw = !0);
                        a = .95 * a,
                            V.draw(),
                            c = .95 * c,
                            requestAnimationFrame(T)
                    } else V.option.stopDraw = !0
                },
                    window.requestAnimationFrame(T)
            },
            autoDraw: function() {
                V.option.ruleStartX >= V.option.argsStartX ? V.draw() : (V.draw(), V.autoDraw()),
                    V.option.ruleStartX = V.option.ruleStartX + M
            },
            drawText: function(a, b, c) {
                I.save(),
                    I.fillStyle = "rgb(221, 221, 221)",
                    I.strokeStyle = "rgb(221, 221, 221)",
                    I.font = "lighter 24px HelveticaNeue-Bold",
                    I.textBaseline = "top",
                    I.textAlign = "center",
                    I.fillText(c, a, b),
                    I.restore()
            },
            draw: function() {
                if (!V.option.stopDraw) {
                    I.clearRect(0, 0, V.option.canvasWidth, V.option.canvasHeight),
                        I.strokeStyle = "rgb(221,221,221)",
                        I.fillStyle = "#FFFFFF",
                        I.fillRect(0, 0, V.option.canvasWidth, V.option.canvasHeight);
                    for (var a = V.option.ruleStartX,
                             b = 0; a < V.option.canvasWidth / V.option.ruleCellWidth; a++) if (! (0 > a)) {
                        if (J = V.option.ruleCellWidth * a, K = V.option.canvasHeight, L = parseInt(a - V.option.ruleStartX) * V.option.ruleCellVal, parseInt(a - V.option.ruleStartX) % 10) {
                            if (J > 320 && L > 199e3) continue;
                            I.moveTo(J, K - V.option.ruleCellHeightl),
                                I.lineTo(J, K)
                        } else {
                            if (J > 320 && L > 199e3) continue;
                            I.moveTo(J, K - V.option.ruleCellHeighth),
                                I.lineTo(J, K),
                                V.drawText(J, K - 2.2 * V.option.ruleCellHeighth, L)
                        }
                        if (b++, b >= V.option.canvasWidth / V.option.ruleCellWidth) break
                    }
                    if (I.stroke(), I.save(), I.beginPath(), I.strokeStyle = "rgb(255,128,26)", I.translate(.5, 0), I.moveTo(V.option.canvasWidth / 2, 0), I.lineTo(V.option.canvasWidth / 2, V.option.canvasHeight), I.stroke(), I.closePath(), I.restore(), G) {
                        var c = u.val() || 0;
                        V.option.totalMoney = c,
                            q.setStore("allMoney", {
                                money: c
                            }),
                            d(c)
                    } else {
                        var c = -Math.round(V.option.ruleStartX - Math.round(V.option.canvasWidth / V.option.ruleCellWidth / 2)) * V.option.ruleCellVal;
                        V.option.totalMoney = c,
                            u.val(c),
                            d(c),
                            q.setStore("allMoney", {
                                money: c
                            })
                    }
                    J = null,
                        K = null,
                        L = null,
                        a = null
                }
            },
            move: function(a) {
                if (a.preventDefault(), window.cancelAnimationFrame(T), V.option.totalMoney < q.getStore("buyData").lowestInvestAmount && (V.option.ruleStartX = V.returnX(q.getStore("buyData").lowestInvestAmount), B.html("起购金额1000元"), V.option.stopDraw = !1, A.show()), V.option.totalMoney > V.option.dMaxMoney) V.option.ruleStartX = V.returnX(V.option.dMaxMoney),
                    B.html("单笔最高19.9万元"),
                    V.option.stopDraw = !1,
                    A.show();
                else {
                    V.option.ruleStartX = (Math.round(1e3 * V.option.ruleStartX) + (Math.round(100 * a.touches[0].clientX) - Math.round(100 * V.option.pointStartX))) / 1e3,
                        V.option.pointStartX = Math.round(100 * a.touches[0].clientX) / 100;
                    var b = new Date;
                    O = b.getTime(),
                        Q = a.changedTouches[0].clientX,
                        S = Math.abs((Q - P) / (O - N) * 10),
                        S > 4 ? V.option.ruleStartX > V.option.canvasWidth / V.option.ruleCellWidth / 2 ? (V.option.ruleStartX = V.option.canvasWidth / V.option.ruleCellWidth / 2, V.option.stopDraw = !0) : R = !0 : (R = !1, V.option.ruleStartX > V.option.canvasWidth / V.option.ruleCellWidth / 2 ? (V.option.ruleStartX = V.option.canvasWidth / V.option.ruleCellWidth / 2, V.option.stopDraw = !0) : (V.option.stopDraw = !1, V.draw()))
                }
            },
            correct: function(a) {
                if (R) {
                    var b = Q - P > 0 ? !0 : !1;
                    V.option.stopDraw = !1,
                        V.aniDraw(Math.round(S), b)
                }
                V.option.totalMoney < q.getStore("buyData").lowestInvestAmount && (V.option.ruleStartX = V.returnX(q.getStore("buyData").lowestInvestAmount), B.html("起购金额1000元"), V.option.stopDraw = !1, A.show(), V.draw()),
                V.option.totalMoney > V.option.dMaxMoney && (V.option.ruleStartX = V.returnX(V.option.dMaxMoney), B.html("单笔最高19.9万元"), V.option.stopDraw = !1, A.show(), V.draw())
            },
            preDraw: function(a) {
                G = !1,
                    R = !1,
                    window.cancelAnimationFrame(T),
                    V.option.stopDraw = !0;
                var b = new Date;
                N = b.getTime(),
                    P = a.touches[0].clientX,
                    V.option.pointStartX = Math.round(100 * a.touches[0].clientX) / 100,
                    V.option.ruleStartX = V.returnX(u.val()),
                    V.draw()
            }
        };
        window.getSidt = function(b) {
            if ("object" != typeof b && (b = a.parseJSON(b)), !b || !b.share) {
                var c = parseInt(u.val()),
                    d = parseInt(c / Number(q.getStore("buyData").lowestInvestAmount)),
                    e = q.getStore("buyData").gradeId = c;
                q.setStore("clientMsg", {
                    sid: b.data,
                    source: "app"
                }),
                    q.removeStore("totalItem");
                o.xbAl.bxUrl + "?fillInsur=" + q.getStore("buyData").releventId + "&val=" + e + "&fs=" + d + "&gradeName=" + encodeURI(q.getStore("buyData").gradeName) + "&source=" + q.getStore("clientMsg").source + "&sid=" + q.getStore("clientMsg").sid + "&bizType=2";
                if (parseInt(e) > parseInt(q.getStore("buyData").canBuyAmout)) return B.html("不能超过库存"),
                    void A.show();
                var f = {};
                a.each(q.getStore("gearList"),
                    function(a, b) {
                        0 == b.gradeTerm && (f = b.productList)
                    }),
                    p.getAjax(o.xbAl.xbgetHqInfo, {
                            productId: f[0].releventId,
                            sid: decodeURIComponent(q.getStore("clientMsg").sid),
                            source: "app"
                        },
                        function(a) {
                            q.setStore("hqInfo", a),
                                k(e, d)
                        })
            }
        },
            n(),
            function() {
                var b = r.getQuery("atJDM"),
                    c = "http://st.360buyimg.com/common/commonH_B/js/m_common_header_bottom.js",
                    d = a("body")[0],
                    e = document.createElement("div");
                "1" === b && (e.id = "m_common_header", d.insertBefore(e, d.children[0]), a.getScript(c,
                    function() {
                        var a = new MCommonHeaderBottom,
                            b = {
                                hrederId: "m_common_header",
                                title: document.title
                            };
                        a.header(b)
                    }))
            } ()
    } (Zepto);