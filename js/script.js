$(".aside__burger").click(function(){$(".aside__burger").toggleClass("is-active"),$(".aside").toggleClass("is-hidden")}),$(".aside__nav-link").click(function(){$(".aside__burger").removeClass("is-active"),$(".aside").removeClass("is-hidden")});var mywindow=$(window),mypos=mywindow.scrollTop();mywindow.scroll(function(){mywindow.scrollTop()>2600?$(".header__inner").addClass("arrow_bottom"):$(".header__inner").removeClass("arrow_bottom"),mypos=mywindow.scrollTop()}),mywindow.scroll(function(){mywindow.scrollTop()>600?$(".header__inner").addClass("arrow_top"):$(".header__inner").removeClass("arrow_top"),mypos=mywindow.scrollTop()}),$(".business__inner").slick({slidesToShow:2,variableWidth:!0,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:3e3,pauseOnFocus:!1,pauseOnHover:!1,infinite:!1,responsive:[{breakpoint:950,settings:{autoplay:!1,autoplaySpeed:0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!1,dots:!0}}]}),$(document).ready(function(){function o(){width=$(window).width(),console.log(width),width>=950&&($(".news_page__inner").slick({slidesToShow:3,slidesToScroll:1,infinite:!1,arrows:!1,prevArrow:$(".prev"),nextArrow:$(".next"),responsive:[{breakpoint:680,settings:{slidesToShow:2,slidesToScroll:1,dots:!0}}]}),$(".prev").click(function(){$(".news_page__inner").slick("slickPrev")}),$(".next").click(function(){$(".news_page__inner").slick("slickNext")}))}o(),$(window).resize(o)}),$(document).ready(function(){function o(){width=$(window).width(),console.log(width),width>=950&&($(".news__inner").slick({slidesToShow:3,slidesToScroll:1,infinite:!1,arrows:!1,dots:!0,prevArrow:$(".prev"),nextArrow:$(".next"),responsive:[{breakpoint:680,settings:{slidesToShow:2,slidesToScroll:1,dots:!0}}]}),$(".prev").click(function(){$(".news__inner").slick("slickPrev")}),$(".next").click(function(){$(".news__inner").slick("slickNext")}))}o(),$(window).resize(o)}),$(".cvActive").click(function(){$("#cv").addClass("cvOpen")}),$("#cv__close").click(function(){$("#cv").removeClass("cvOpen")}),$("#rus").click(function(){$(".language_ru").addClass("open"),$("#rus").addClass("red"),$("#ukr").removeClass("red"),$("#usa").removeClass("red")}),$("#language__close").click(function(){$(".language_ru").removeClass("open")}),$("#ukr").click(function(){$(".language_ru").addClass("open"),$("#ukr").addClass("red"),$("#rus").removeClass("red"),$("#usa").removeClass("red")}),$("#usa").click(function(){$(".language_ru").addClass("open"),$("#usa").addClass("red"),$("#rus").removeClass("red"),$("#ukr").removeClass("red")}),$("#consultation").click(function(){$(".consultation").addClass("open")}),$("#consultation__close").click(function(){$(".consultation").removeClass("open")}),$("#practice1").hover(function(){$(".practice1").toggleClass("hover")}),$("#practice2").hover(function(){$(".practice2").toggleClass("hover")}),$("#practice3").hover(function(){$(".practice3").toggleClass("hover")}),$("#practice4").hover(function(){$(".practice4").toggleClass("hover")}),$("#practice5").hover(function(){$(".practice5").toggleClass("hover")}),$(".consultation__name").change(function(){$(this).val().trim().length?$(this).addClass("move-top"):$(this).removeClass("move-top")}),$(".consultation__phone").change(function(){$(this).val().trim().length?$(this).addClass("move-top"):$(this).removeClass("move-top")}),$(".consultation__email").change(function(){$(this).val().trim().length?$(this).addClass("move-top"):$(this).removeClass("move-top")}),$(".consultation__name").hover(function(){$(".consultation__name").toggleClass("hover-top")}),$(".consultation__phone").hover(function(){$(".consultation__phone").toggleClass("hover-top")}),$(".consultation__email").hover(function(){$(".consultation__email").toggleClass("hover-top")});