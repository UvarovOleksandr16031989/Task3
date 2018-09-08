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
    if(mywindow.scrollTop() > 2600)
    {
        $('.header__inner').addClass('arrow_bottom');
    }
    else
    {
        $('.header__inner').removeClass('arrow_bottom');
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
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
]

});
