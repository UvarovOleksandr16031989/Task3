$('.aside__burger').click(function() {
    $('.aside__burger').toggleClass('is-active');
    $('.aside').toggleClass('is-hidden');
});
$('.aside__nav-link').click(function() {
    $('.aside__burger').removeClass('is-active');
    $('.aside').removeClass('is-hidden');
});


var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function() {
    if(mywindow.scrollTop() > 1)
    {
        $('.header__inner').addClass('arrow_bottom');
        $('.aside__header-mobile').addClass('add_bg');
    }
    else
    {
        $('.header__inner').removeClass('arrow_bottom');
        $('.aside__header-mobile').removeClass('add_bg');
    }
    mypos = mywindow.scrollTop();
});
mywindow.scroll(function() {
    if(mywindow.scrollTop() > 600)
    {
        $('.header__inner').addClass('arrow_top');
    }
    else
    {
        $('.header__inner').removeClass('arrow_top');
    }
    mypos = mywindow.scrollTop();
});


$('.business__inner').slick({
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: false,
    responsive: [
        {
            breakpoint: 950,
            settings: {
                variableWidth: false,
                autoplay: false,
                autoplaySpeed: 0,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                dots: true
            }
        }
]

});

$(document).ready(function () {

    function mySuperFunc () {
        width = $(window).width();
        console.log(width);
        if (width >= 990) {


            $('.news_page__inner').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                dots: true,
                prevArrow: $('.prev'),
                nextArrow: $('.next'),
                responsive: [
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        },
    ]

});



$('.prev').click(function(){
    $('.news_page__inner').slick('slickPrev');
})


$('.next').click(function(){
    $('.news_page__inner').slick('slickNext');
})
        }
    }

    mySuperFunc ();
    $(window).resize( mySuperFunc );
});


$(document).ready(function () {

    function mySuperFunc () {
        width = $(window).width();
        console.log(width);
        if (width <= 990) {


            $('.slider_inner').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                dots: true,
                prevArrow: $('.prev'),
                nextArrow: $('.next'),


            });


        }
    }

    mySuperFunc ();
    $(window).resize( mySuperFunc );
});


$(document).ready(function () {

    function mySuperFunc () {
        width = $(window).width();
        console.log(width);
        if (width >= 990) {


            $('.news__inner').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                dots: true,
                prevArrow: $('.prev'),
                nextArrow: $('.next'),
                responsive: [
                    {
                        breakpoint: 680,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    },
                ]

            });

            $('.prev').click(function(){
                $('.news__inner').slick('slickPrev');
            })


            $('.next').click(function(){
                $('.news__inner').slick('slickNext');
            })
        }
    }

    mySuperFunc ();
    $(window).resize( mySuperFunc );
});


$('.cvActive').click(function() {
    $('#cv').addClass('cvOpen');
});
$('#cv__close').click(function() {
    $('#cv').removeClass('cvOpen');
});



$('#rus').click(function() {
    $('.language_ru').addClass('open');
    $('#rus').addClass('red');
    $('#ukr').removeClass('red');
    $('#usa').removeClass('red');
});
$('#language__close').click(function() {
    $('.language_ru').removeClass('open');
});
$('#ukr').click(function() {
    $('.language_ru').addClass('open');
    $('#ukr').addClass('red');
    $('#rus').removeClass('red');
    $('#usa').removeClass('red');
});
$('#usa').click(function() {
    $('.language_ru').addClass('open');
    $('#usa').addClass('red');
    $('#rus').removeClass('red');
    $('#ukr').removeClass('red');
});


$('#consultation').click(function() {
    $('.consultation').addClass('open');
});
$('#consultation__close').click(function() {
    $('.consultation').removeClass('open');
});



$('#practice1').hover(function(){
    $('.practice1').toggleClass('hover');
    ;
});
$('#practice2').hover(function(){
    $('.practice2').toggleClass('hover');
});
$('#practice3').hover(function(){
    $('.practice3').toggleClass('hover');
});
$('#practice4').hover(function(){
    $('.practice4').toggleClass('hover');
});
$('#practice5').hover(function(){
    $('.practice5').toggleClass('hover');
});




$(".consultation__name").change(function() {
    if ($(this).val().trim().length) {
        $(this).addClass("move-top");
    } else {
        $(this).removeClass("move-top");
    }
})
$(".consultation__phone").change(function() {
    if ($(this).val().trim().length) {
        $(this).addClass("move-top");
    } else {
        $(this).removeClass("move-top");
    }
})
$(".consultation__email").change(function() {
    if ($(this).val().trim().length) {
        $(this).addClass("move-top");
    } else {
        $(this).removeClass("move-top");
    }
})

$('.consultation__name').hover(function(){
    $('.consultation__name').toggleClass('hover-top');
});
$('.consultation__phone').hover(function(){
    $('.consultation__phone').toggleClass('hover-top');
});
$('.consultation__email').hover(function(){
    $('.consultation__email').toggleClass('hover-top');
});
