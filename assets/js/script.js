function addCss(t) {
    var e = document.head
      , i = document.createElement("link");
    i.type = "text/css",
    i.rel = "stylesheet",
    i.href = t,
    i.id = "selected_font",
    e.appendChild(i)
}
function setCookie(t, e, i) {
    if (i) {
        var o = new Date;
        o.setTime(o.getTime() + 864e5 * i);
        var a = "; expires=" + o.toGMTString()
    } else
        a = "";
    document.cookie = t + "=" + e + a + "; path=/"
}
function getCookie(t) {
    for (var e = t + "=", i = document.cookie.split(";"), o = 0; o < i.length; o++) {
        for (var a = i[o]; " " == a.charAt(0); )
            a = a.substring(1, a.length);
        if (0 == a.indexOf(e))
            return a.substring(e.length, a.length)
    }
    return null
}
function antlerSettings({layout: t, color: e, background: i, font: o, header: a, textDirection: n, showSettings: s}) {
    this.showSettings = s || "hide",
    this.layout = "show" === this.showSettings ? getCookie("layout") || "wide" : t || "wide",
    this.color = "show" === this.showSettings ? getCookie("color") || "pink" : e || "pink",
    this.background = "show" === this.showSettings ? getCookie("background") || "dark" : i || "dark",
    this.font = "show" === this.showSettings ? getCookie("font") || "opensans" : o || "opensans",
    this.header = "show" === this.showSettings ? getCookie("header") || "static" : a || "static",
    this.textDirection = "show" === this.showSettings ? getCookie("textDirection") || "ltr" : n || "ltr",
    this.manageLayout(),
    this.manageColor(),
    this.manageBackground(),
    this.manageFont(),
    this.manageHeader(),
    this.manageTextDirection(),
    this.manageSettings()
}
function changeColorStyle() {
    $("img.svg").each(function() {
        var t = jQuery(this)
          , e = t.prop("attributes")
          , i = t.attr("src");
        $.get(i, function(i) {
            var o = $(i).find("svg");
            o = o.removeAttr("xmlns:a"),
            $.each(e, function() {
                o.attr(this.name, this.value)
            }),
            t.replaceWith(o)
        })
    })
}
function switchVisible() {
    document.getElementById("price-val") && ("none" == document.getElementById("price-val").style.display ? (document.getElementById("price-val").style.display = "block",
    document.getElementById("priceon-val").style.display = "none") : (document.getElementById("price-val").style.display = "none",
    document.getElementById("priceon-val").style.display = "block"))
}
function translate() {
    $.getScript("assets/js/lib/i18next.min.js", function() {
        $.getScript("assets/js/lib/i18nextXHRBackend.min.js", function() {
            $.getScript("assets/js/lib/jquery-i18next.min.js", function() {
                var t = localStorage.getItem("lng");
                t || (localStorage.setItem("lng", "en-US"),
                t = "en-US"),
                i18next.use(i18nextXHRBackend).init({
                    lng: t,
                    fallbackLng: "en-US",
                    backend: {
                        loadPath: "assets/locales/{{lng}}/translations.json"
                    }
                }, function(t, e) {
                    jqueryI18next.init(i18next, $, {
                        tName: "t",
                        i18nName: "i18n",
                        handleName: "localize",
                        selectorAttr: "data-i18n",
                        targetAttr: "i18n-target",
                        optionsAttr: "i18n-options",
                        useOptionsAttr: !1,
                        parseDefaultValueFromContent: !0
                    }),
                    $(document).localize()
                })
            })
        })
    })
}


function openNav() {
    document.getElementById("myNav").style.display = "block"
}
function closeNav() {
    document.getElementById("myNav").style.display = "none"
}
function display() {
    $("#showall").on("click", function() {
        $(".targetDiv").show()
    }),
    $(".showSingle").on("click", function() {
        $(".targetDiv").hide(),
        $("#div" + $(this).attr("target")).show()
    })
}
function active() {
    $(".heading a").on("click", function() {
        $(".heading a").removeClass("active"),
        $(this).addClass("active")
    })
}
function scrollgoto() {
    $(".gocheck").on("click", function(t) {
        var e = $(this.getAttribute("href"));
        e.length && (t.preventDefault(),
        $("html, body").stop().animate({
            scrollTop: e.offset().top
        }, 0))
    })
}
function popover() {
    $('[data-bs-toggle="popover"]').popover()
}
function contactform() {
    $("#contactForm").on("submit", function(t) {
        $.ajax({
            type: "POST",
            url: "assets/php/form-process.php",
            data: $(this).serialize(),
            success: function() {
                $("#msgSubmit").fadeIn(100).show()
            }
        }),
        t.preventDefault()
    })
}

function isotope() {
    $(window).on("load", function() {
        var t, e = $(".featured").isotope({
            itemSelector: ".isotope-item",
            masonry: {
                columnWidth: ".isotope-item"
            },
            getSortData: {
                selectedCategory: function(e) {
                    return $(e).hasClass(t) ? 0 : 1
                }
            }
        }), i = $(".featured").find(".featured-items");
        $(".sort-button-group").on("click", ".button", function() {
            if ("all" === (t = $(this).attr("data-category"))) {
                e.isotope({
                    sortBy: "original-order"
                }),
                i.css({
                    opacity: 1
                });
                return
            }
            var o = "." + t;
            i.filter(o).css({
                opacity: 1
            }),
            i.not(o).css({
                opacity: 0
            }),
            e.isotope("updateSortData"),
            e.isotope({
                sortBy: "selectedCategory"
            })
        }),
        $(".button-group").each(function(t, e) {
            var i = $(e);
            i.on("click", "li", function() {
                i.find(".active").removeClass("active"),
                $(this).addClass("active")
            })
        })
    })
}
function backtotop() {
    var t = $(".cd-top");
    $(window).scroll(function() {
        $(this).scrollTop() > 300 ? t.addClass("cd-is-visible") : t.removeClass("cd-is-visible cd-fade-out"),
        $(this).scrollTop() > 1200 && t.addClass("cd-fade-out")
    }),
    t.on("click", function(t) {
        t.preventDefault(),
        $("body,html").animate({
            scrollTop: 0
        }, 0)
    })
}
function loader() {
    $(window).on("load", function() {
        $("#spinner-area").fadeOut("slow")
    })
}
function listenSlick() {
    $(".slick").on("unslick", function() {
        var t = setInterval(function() {
            $(window).width() > 590 && (clearInterval(t),
            slick())
        }, 100)
    })
}
function slick() {
    $("#slider").slick({
        centerMode: !0,
        centerPadding: "200px",
        slidesToShow: 3,
        infinite: !0,
        arrows: !0,
        rtl: !1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: !0,
                centerMode: !0,
                centerPadding: "100px",
                slidesToShow: 3
            }
        }, {
            breakpoint: 991,
            settings: {
                arrows: !0,
                centerMode: !0,
                centerPadding: "200px",
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: !0,
                centerMode: !0,
                centerPadding: "150px",
                slidesToShow: 1
            }
        }, {
            breakpoint: 590,
            settings: "unslick"
        }]
    }),
    $("#slider").length && $("#slider").slick("slickSetOption", "rtl", "rtl" === getCookie("textDirection"))
}
function popup() {
    $(".popup-with-form").length && $(".popup-with-form").magnificPopup({
        type: "image",
        preloader: !0,
        focus: "#name",
        closeOnBgClick: !0,
        callbacks: {
            beforeOpen: function() {
                700 > $(window).width() ? this.st.focus = !1 : this.st.focus = "#name"
            }
        }
    }),
    $(".gallery-item").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        }
    }),
    $(".image-link").magnificPopup({
        type: "image",
        mainClass: "mfp-with-zoom",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            titleSrc: "title"
        },
        zoom: {
            enabled: !0,
            navigateByImgClick: !0,
            duration: 300,
            easing: "ease-in-out",
            opener: function(t) {
                return t.is("img") ? t : t.find("img")
            }
        }
    })
}
function misc() {
    $("#myModal").on("shown.bs.modal", function() {
        $("#myInput").focus()
    })
}
document.addEventListener("DOMContentLoaded", function() {
    "use strict";
    loadWindowSettings(),
    loadWindowEvents(),
    loadMenu(),
    loadTabs(),
    izotope(),
    popup(),
    accordion(),
    loadTooltips(),
    initSliderUI(),
    loadCountdown(),
    speacialCount(),
    loadSkills(),
    misc(),
    slick(),
    listenSlick(),
    loader(),
    backtotop(),
    isotope(),
    livechat(),
    contactform(),
    popover(),
    scrollgoto(),
    active(),
    display(),
    switching(),
    headerfooter(),
    translate(),
    switchVisible(),
    sticky(),
    changeColorStyle()
}),
body = $("body"),
antlerSettings.prototype.manageSettings = function() {
    switch (this.showSettings) {
    case "hide":
        break;
    case "show":
        settings()
    }
}
,
antlerSettings.prototype.manageTextDirection = function() {
    switch (this.textDirection) {
    case "ltr":
        setCookie("textDirection", "ltr", 365),
        body.attr("data-textDirection", "ltr");
        break;
    case "rtl":
        $("html").attr("dir", "rtl"),
        $(function() {
            $("link.rtl").attr("disabled", !1)
        }),
        $(function() {
            $("link.ltr").attr("disabled", !0)
        }),
        setCookie("textDirection", "rtl", 365),
        body.attr("data-textDirection", "rtl")
    }
}
,
antlerSettings.prototype.manageHeader = function() {
    switch (this.header) {
    case "static":
    default:
        body.attr("data-header", "static"),
        setCookie("header", "static", 365);
        break;
    case "fixed":
        body.attr("data-header", "fixed"),
        setCookie("header", "fixed", 365)
    }
}
,
antlerSettings.prototype.manageLayout = function() {
    switch (this.layout) {
    case "wide":
    default:
        body.attr("data-layout", "wide"),
        setCookie("layout", "wide", 365);
        break;
    case "frame":
        body.attr("data-layout", "frame"),
        setCookie("layout", "frame", 365);
        break;
    case "boxed":
        body.attr("data-layout", "boxed"),
        setCookie("layout", "boxed", 365);
        break;
    case "wideboxed":
        body.attr("data-layout", "wideboxed"),
        setCookie("layout", "wideboxed", 365)
    }
}
,
antlerSettings.prototype.manageColor = function() {
    switch (this.color) {
    case "pink":
    default:
        body.attr("data-color", "pink"),
        setCookie("color", "pink", 365);
        break;
    case "green":
        body.attr("data-color", "green"),
        setCookie("color", "green", 365);
        break;
    case "blue":
        body.attr("data-color", "blue"),
        setCookie("color", "blue", 365);
        break;
    case "black":
        body.attr("data-color", "black"),
        setCookie("color", "black", 365)
    }
}
,
antlerSettings.prototype.manageBackground = function() {
    switch (this.background) {
    case "origin":
    default:
        body.attr("data-background", "origin"),
        setCookie("background", "origin", 365);
        break;
    case "dark":
        body.attr("data-background", "dark"),
        setCookie("background", "dark", 365);
        break;
    case "light":
        body.attr("data-background", "light"),
        setCookie("background", "light", 365);
        break;
    case "modern":
        body.attr("data-background", "modern"),
        setCookie("background", "modern", 365)
    }
}
,
antlerSettings.prototype.manageFont = function() {
    switch (this.font) {
    case "opensans":
    default:
        body.attr("data-font", "opensans"),
        addCss("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap"),
        setCookie("font", "opensans", 365);
        break;
    case "poppins":
        body.attr("data-font", "poppins"),
        addCss("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap"),
        setCookie("font", "poppins", 365);
        break;
    case "nunito":
        body.attr("data-font", "nunito"),
        addCss("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap"),
        setCookie("font", "nunito", 365);
        break;
    case "raleway":
        body.attr("data-font", "raleway"),
        addCss("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap"),
        setCookie("font", "raleway", 365)
    }
}
,
jQuery(function(t) {
    var e = window.location.href;
    t("#menu ul li a").each(function() {
        this.href === e && (t(this).addClass("active"),
        t(this).parent().parent().closest("li").addClass("active2"),
        t(".active2 a:first").addClass("active"))
    })
}),
$(".mobile .menu-item").on("click", function() {
    "none" === $(".sub-menu", this).css("display") ? $(".sub-menu", this).css("display", "block") : $(".sub-menu", this).css("display", "none")
}),
$(".header-main-slider").flickity({
    fullscreen: !0,
    draggable: !0,
    prevNextButtons: !1,
    pageDots: !0,
    autoPlay: 6e3,
    fade: !0
}),
$(".header-main-nav").flickity({
    asNavFor: ".header-main-slider",
    prevNextButtons: !1,
    pageDots: !1,
    contain: !0
}),
$(".banner-slider").flickity({
    prevNextButtons: !1,
    pageDots: !0
}),
($ = jQuery)(".carousel").flickity({
    cellSelector: ".carousel-cell"
}),
$(document).ready(function() {
    $("#clients").slick({
        centerMode: !0,
        centerPadding: "100px",
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: !1,
        dots: !1,
        autoplay: !0,
        infinite: !0,
        arrows: !0,
        navigation: !0,
        responsive: [{
            breakpoint: 1940,
            settings: {
                centerPadding: "140px",
                slidesToShow: 5
            }
        }, {
            breakpoint: 1200,
            settings: {
                centerPadding: "150px",
                slidesToShow: 3
            }
        }, {
            breakpoint: 991,
            settings: {
                centerPadding: "180px",
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                centerPadding: "120px",
                slidesToShow: 3
            }
        }, {
            breakpoint: 590,
            settings: {
                centerPadding: "70px",
                slidesToShow: 1
            }
        }]
    })
}),
$(document).ready(function() {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    })
});
var $, mySwiper = new Swiper(".swiper-container",{
    direction: "horizontal",
    loop: !0,
    autoHeight: !0,
    grabCursor: !0,
    centeredSlides: !0,
    autoplay: {
        delay: 5e3,
        speed: 1e3,
        disableOnInteraction: !1
    },
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    scrollbar: {
        el: ".swiper-scrollbar"
    }
});
function loadTooltips() {
    $("#element").tooltip("show"),
    $(function() {
        $('[data-bs-toggle="tooltip"]').tooltip()
    })
}
function initSliderUI() {
    var t = 0;
    $(".slider-ui").length && $(".slider-ui").each(function() {
        var e = $(this)
          , i = e.find(".slider-line")
          , o = e.find(".slider-inp")
          , a = "sliderUI" + t
          , n = "inputUI" + t
          , s = parseInt(o.attr("data-start"))
          , r = parseInt(o.attr("data-count-step"));
        i.attr("id", a),
        o.attr("id", n),
        t++,
        r = r || 300;
        var l = document.getElementById(a)
          , c = document.getElementById(n);
        function d() {
            return {
                VPS1: {
                    name: "Service A",
                    disk: "100GB",
                    ram: "1GB",
                    cpu: "1 Core",
                    bandwith: "100GB",
                    setup: "8€",
                    ip: "2 IPs",
                    price: "99.09",
                    priceon: "8.26",
                    orderlink: "http://inebur.com/whmcs/cart.php?a=add&pid=4&carttpl=antler"
                },
                VPS2: {
                    name: "Service B",
                    disk: "200GB",
                    ram: "4GB",
                    cpu: "2 Core",
                    setup: "15€",
                    ip: "4 IPs",
                    bandwith: "500GB",
                    price: "155.00",
                    priceon: "12.92",
                    orderlink: "http://inebur.com/whmcs/cart.php?a=add&pid=5&carttpl=antler"
                },
                VPS3: {
                    name: "Service C",
                    disk: "300GB",
                    ram: "8GB",
                    cpu: "4 Core",
                    setup: "Free",
                    ip: "8 IPs",
                    bandwith: "2TB",
                    price: "299.99",
                    priceon: "25.00",
                    orderlink: "http://inebur.com/whmcs/cart.php?a=add&pid=6&carttpl=antler"
                },
                VPS4: {
                    name: "Service D",
                    disk: "400GB",
                    ram: "12GB",
                    cpu: "4 Core",
                    setup: "Free",
                    ip: "8 IPs",
                    bandwith: "Unlimited",
                    price: "395.22",
                    priceon: "32.94",
                    orderlink: "http://inebur.com/whmcs/cart.php?a=confproduct&i=3&carttpl=antler"
                },
                VPS5: {
                    name: "Service E",
                    disk: "500GB",
                    ram: "16GB",
                    cpu: "8 Core",
                    setup: "Free",
                    ip: "12 IPs",
                    bandwith: "Unlimited",
                    price: "545.00",
                    priceon: "45.42",
                    orderlink: "http://inebur.com/whmcs/cart.php?a=confproduct&i=4&carttpl=antler"
                }
            }
        }
        noUiSlider.create(l, {
            start: s || 1,
            step: 1,
            connect: "lower",
            tooltips: !0,
            format: {
                to: function(t) {
                    return "VPS" + t
                },
                from: function(t) {
                    return t
                }
            },
            range: {
                min: 1,
                max: r
            },
            pips: {
                mode: "values",
                values: [1, 2, 3, 4, 5],
                density: 5,
                stepped: !0
            }
        }),
        l.noUiSlider.on("change", function t(e, i, o, a) {
            $(this.target).closest(".sidebar").find(".circle").attr("data-percent", parseInt(o) / r * 100)
        }),
        l.noUiSlider.on("update", function(t, e) {
            var i, o, a, n;
            i = t[e],
            o = d(),
            $("#disk-val").html(o[i].disk),
            $("#cpu-val").html(o[i].cpu),
            $("#ram-val").html(o[i].ram),
            $("#setup-val").html(o[i].setup),
            $("#ip-val").html(o[i].ip),
            $("#bw-val").html(o[i].bandwith),
            $("#price-val").html(o[i].price),
            $("#priceon-val").html(o[i].priceon),
            $("#orderlink-val").html(o[i].orderlink),
            c.value = t[e],
            a = t[e],
            n = d(),
            $("#orderlink").attr("href", n[a].orderlink)
        }),
        c.addEventListener("change", function() {
            l.noUiSlider.set([null, this.value])
        }),
        c.addEventListener("keydown", function(t) {
            var e = Number(l.noUiSlider.get())
              , i = l.noUiSlider.steps();
            switch (i = i[0],
            t.which) {
            case 13:
                l.noUiSlider.set(this.value);
                break;
            case 38:
                l.noUiSlider.set(e + i[1]);
                break;
            case 40:
                l.noUiSlider.set(e - i[0])
            }
        })
    })
}
function loadMenu() {
    $(".nav-menu .menu-toggle").on("click", function() {
        $(this).closest(".menu-wrap").toggleClass("active")
    }),
    $(".btn-scroll").on("click", function() {
        return $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - 10
        }, 500),
        !1
    })
}
function izotope() {
    if ($(".izotope-container").length) {
        var t = $(".izotope-container");
        t.isotope({
            itemSelector: ".item",
            layoutMode: "masonry",
            masonry: {
                columnWidth: ".item"
            }
        })
    }
    $("#filters").on("click", ".but", function() {
        $(".izotope-container").each(function() {
            $(this).find(".item").removeClass("animated")
        }),
        $("#filters .but").removeClass("activbut"),
        $(this).addClass("activbut");
        var e = $(this).attr("data-filter");
        t.isotope({
            filter: e
        })
    })
}
function loadTabs() {
    $(".tabs-header").on("click", "li:not(.active)", function() {
        var t = $(this).index();
        $(this).addClass("active").siblings().removeClass("active"),
        $(this).closest(".tabs").find(".tabs-item").removeClass("active").eq(t).addClass("active")
    })
}
function accordion() {
    $(".accordion").on("click", ".panel-title", function() {
        var t = $(this)
          , e = t.parent();
        e.find(".panel-collapse").slideToggle("200"),
        t.toggleClass("active"),
        e.siblings().find(".panel-collapse").slideUp("200"),
        e.siblings().find(".panel-title").removeClass("active")
    }),
    accordHeight()
}
function accordHeight() {
    $(".accordion.faq .square").each(function() {
        $(this).css({
            height: $(this).parent().outerHeight(!0),
            "padding-top": $(this).parent().outerHeight(!0) / 2 - 20
        })
    })
}
function loadSkills() {
    $(".circle").not(".animated").each(function() {
        $(window).scrollTop() >= $(this).offset().top - .7 * $(window).height() && $(this).addClass("animated").circliful()
    })
}
function selectInit() {
    $(".selectpicker").each(function() {
        var t = $(this)
          , e = t.attr("data-class");
        t.selectpicker({
            style: "cst-select " + e
        })
    })
}
function loadWindowEvents() {
    $(window).on("resize", function() {
        offheight(),
        accordHeight()
    }),
    $(window).on("scroll", function() {
        loadSkills()
    }),
    $(window).on("scroll", function() {
        $(window).scrollTop() >= 100 ? $(".menu-wrap").addClass("fixed") : $(".menu-wrap").removeClass("fixed")
    })
}
function loadCountdown() {
    $("#clock").countdown("2022/10/24 00:00", function(t) {
        $(this).html(t.strftime('<div>%w <span class="title">Weeks</span></div><div>%d <span class="title">days</span></div><div>%H <span class="title">hours</span></div><div>%S <span class="title">seconds</span></div>'))
    })
}
function speacialCount() {
    $("#specialclock").countdown("2022/12/6", function(t) {
        $(this).html(t.strftime("Time left: [ %D days %H:%M:%S ]"))
    })
}
function offheight() {
    if ($(window).width() > 750) {
        var t = $(".offers").outerHeight(!0);
        $(".offers.light").css("height", t + 1)
    }
}
function loadWindowSettings() {
    offheight(),
    750 > $(window).width() && $(".nav-menu .main-menu > .menu-item-has-children > a").on("click", function() {
        if ("#" !== $(this).attr("href"))
            return $(this).next().slideToggle(0),
            !1
    })
}
function updateSlidesPerView(t, e, i, o) {
    var a = $(window).width();
    return ($(window).height(),
    a > 1199) ? o : a > 991 ? i : a > 700 ? e : t
}
function sticky() {
    $.fn.scrollBottom = function() {
        return $(document).height() - this.scrollTop() - this.height()
    }
    ;
    var t = $("#sidebar");
    if (t.length) {
        var e = $("#sidebar_content");
        if (e.length) {
            var i = $(window)
              , o = t.parent().position().top;
            i.bind("scroll resize", function() {
                var a = i.scrollTop();
                a < e.offset().top + -35 ? t.css({
                    top: o - a + "px",
                    bottom: "auto"
                }) : a > e.offset().top + e.outerHeight(!0) - t.height() - 165 ? t.css({
                    top: "auto",
                    bottom: i.height() + a - (e.offset().top + e.outerHeight(!0)) + "px"
                }) : t.css({
                    top: -35,
                    bottom: "auto"
                })
            }).scroll()
        }
    }
}
$(function() {
    $('[data-bs-toggle="tooltip"]').tooltip()
}),
AOS.init();


















