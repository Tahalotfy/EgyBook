$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }

});
$(".top").click(function () {
    $('body , html').animate({
        scrollTop: 0
    }, 1200)
});


jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});