
$(document).ready(function () {

    function mySuperFunc () {
        width = $(window).width();
        console.log(width);
        if (width >= 950) {



// ------------- VARIABLES ------------- //
    var ticking = false;
    var isFirefox = (/Firefox/i.test(navigator.userAgent));
    var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
    var scrollSensitivitySetting = 60; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
    var slideDurationSetting = 600; //Amount of time for which slide is "locked"
    var currentSlideNumber = 0;
    var totalSlideNumber = $(".section").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //

    $('.section').not(currentSlideNumber).addClass('next');
    $('.section').eq(currentSlideNumber).removeClass('next');
    function parallaxScroll(evt) {

        if (isFirefox) {
            //Set delta for Firefox
            delta = evt.detail * (-120);
        } else if (isIe) {
            //Set delta for IE
            delta = -evt.deltaY;
        } else {
            //Set delta for all other browsers
            delta = evt.wheelDelta;
        }

        if (ticking != true) {
            if (delta <= -scrollSensitivitySetting) {
                //Down scroll
                ticking = true;
                if (currentSlideNumber !== totalSlideNumber - 1) {
                    currentSlideNumber++;
                    nextItem();
                }
                slideDurationTimeout(slideDurationSetting);
                if ($(".section.active").hasClass('stop')) {
                    $('body').addClass('footer_up')
                }
            }
            if (delta >= scrollSensitivitySetting) {
                //Up scroll

                if ($('body').hasClass('footer_up')) {
                    $('body').removeClass('footer_up')
                } else {
                    ticking = true;
                    if (currentSlideNumber !== 0) {
                        currentSlideNumber--;
                    }
                    previousItem();
                    slideDurationTimeout(slideDurationSetting);
                }

            }
            if (currentSlideNumber == totalSlideNumber) {
                activeItem();
                console.log(888);
            }
            $(".section").removeClass('active')
            $(".section").eq(currentSlideNumber).addClass("active")
            // if (totalSlideNumber == currentSlideNumber) {
            //     //Up scroll
            //     $(".section").eq(currentSlideNumber)
            //     ticking = true;
            //     activeItem()
            //     console.log(currentSlideNumber);
            //     slideDurationTimeout(slideDurationSetting);
            // }


        }

        if ($(".section.active").index() == totalSlideNumber - 1) {
            $(".section.active").addClass('stop')
        } else {
            $(".section").removeClass('stop')
        }


    }

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
    function slideDurationTimeout(slideDuration) {
        setTimeout(function () {
            ticking = false;
        }, slideDuration);
    }

// ------------- ADD EVENT LISTENER ------------- //
    var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
    function nextItem() {
        var $previousSlide = $(".section").eq(currentSlideNumber - 1);
        $previousSlide.removeClass("next").addClass("prev");
    }

    function activeItem() {
        var $previousSlide = $(".section").eq(currentSlideNumber);
        $previousSlide.removeClass("next").addClass("active");
    }

    function previousItem() {
        var $currentSlide = $(".section").eq(currentSlideNumber);
        $currentSlide.removeClass("prev").addClass("next")
    }


    (function () {
        $('.block h3').hover(function () {
            $(this).parent().addClass('hover')
        }, function () {
            $(this).parent().removeClass('hover')
        })
    })();

    $(document).ready(function () {
        $('.section').eq(0).addClass('tactive')
        function w() {
            var d = $(".slider_news");
            // var c = $(".actual-news");
            var g = $(".actual-news .slider_block");
            var currentSlideNumber = 0;
            // var h = (d.width() / 3);
            g.eq(0).addClass('active')
            g.eq(1).addClass('active')
            g.eq(2).addClass('active')
            function e() {
                g.each(function (i) {
                })
            }

            $('.slider_block a').hover(function () {
                $(this).parent().addClass('hover')
            }, function () {
                $('.slider_block').removeClass('hover')
            })
            $(".slider-btn").click(function () {
                // console.log(currentSlideNumber);
                a = d.find(".slider_block.active").index()
                // g = $(".actual-news .slider_block");
                // forw = parseInt($(this).attr("data-slide")) > 0 ? true : false;
                if ($(this).hasClass('prev')) {
                    if (a !== 0) {
                        if (currentSlideNumber !== 0) {
                            currentSlideNumber--;
                        }
                        g.removeClass('active').removeAttr('style')
                        g.eq(currentSlideNumber - 1).css('transform', 'translate(-25.390625vw,0vw)');
                        g.eq(currentSlideNumber + 3).css('transform', 'translate(70.859375vw,0vw)');

                        g.eq(currentSlideNumber)
                            .addClass('active')
                            .css('transform', 'translate(0,0vw)');
                        g.eq(currentSlideNumber + 1).addClass('active').css('transform', 'translate(25.390625vw,0vw)');
                        g.eq(currentSlideNumber + 2).addClass('active').css('transform', 'translate(50.859375vw,0vw)');


                        // c.append(g.eq(0))
                    }
                } else if ($(this).hasClass('next')) {
                    if (a !== g.length - 1) {
                        if (currentSlideNumber !== g.length - 3) {
                            currentSlideNumber++;
                        }
                        g.removeClass('active').removeAttr('style')
                        g.eq(currentSlideNumber - 1).css('transform', 'translate(-25.390625vw,0vw)');
                        g.eq(currentSlideNumber + 3).css('transform', 'translate(70.859375vw,0vw)');

                        g.eq(currentSlideNumber + 2).addClass('active').css('transform', 'translate(50.859375vw,0vw)');
                        g.eq(currentSlideNumber + 1).addClass('active').css('transform', 'translate(25.390625vw,0vw)');
                        g.eq(currentSlideNumber).addClass('active').css('transform', 'translate(0,0vw)');
                        // c.prepend(g.eq(g.length - 1))


                    }
                }
            })
        }

        w();


        function v() {
            $('.header__btn:nth-child(1)').on('click', function () {
                $('.order_consultation').addClass('open');

            })
            $('.close').on('click', function () {
                $('.popup').removeClass('open')
            })
        }

        v()
    })


        }
    }

    mySuperFunc ();
    $(window).resize( mySuperFunc );
});