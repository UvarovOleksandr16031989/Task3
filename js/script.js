$('.aside__burger').click(function() {
    $('.aside__burger').toggleClass('is-active');
    $('.aside').toggleClass('is-hidden');
});


var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function() {
    if(mywindow.scrollTop() > 2700)
    {
        $('.header__inner').addClass('rotate');
    }
    else
    {
        $('.header__inner').removeClass('rotate');
    }
    mypos = mywindow.scrollTop();
});