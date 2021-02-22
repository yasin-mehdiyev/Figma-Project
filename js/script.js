$(document).ready(function() {
    // ---> Preloader Section <---
    $(window).on('load', function() {
        $(".preloader-activate").removeClass('preloader-active');

        setTimeout(function() {
            $('.open_tm_preloader').addClass('loaded');
        }, 1000);
    });

    // ---> Preloader Section <---

    // ---> ScrollIt Plugins Importing <---
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'swing',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -60
    });
    // ---> ScrollIt Plugins Importing <---

    // ---> ScrollTop Section <---
    $(window).on('scroll', function() {
        var distanceFromTop = $(window).scrollTop();
        var buttonTop = $('.button-top');

        if (distanceFromTop > 400) {
            buttonTop.addClass('button-show');
        } else {
            buttonTop.removeClass('button-show');
        }
    });

    $(".button-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })

    // ---> ScrollTop Section <---

    // ---> Wow.JS <---
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    // ---> Wow.JS <---

})