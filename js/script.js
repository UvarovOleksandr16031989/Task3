$(".aside__burger").click(function(){$(".aside__burger").toggleClass("is-active"),$(".aside").toggleClass("is-hidden")}),$(".aside__nav-link").click(function(){$(".aside__burger").removeClass("is-active"),$(".aside").removeClass("is-hidden")});var mywindow=$(window),mypos=mywindow.scrollTop();mywindow.scroll(function(){mywindow.scrollTop()>2600?$(".header__inner").addClass("arrow_bottom"):$(".header__inner").removeClass("arrow_bottom"),mypos=mywindow.scrollTop()}),mywindow.scroll(function(){mywindow.scrollTop()>600?$(".header__inner").addClass("arrow_top"):$(".header__inner").removeClass("arrow_top"),mypos=mywindow.scrollTop()});