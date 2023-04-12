$(function () {

    "use strict";

    $('.dh-container').directionalHover();

    $(window).scroll(function () {
        var winscroll = $(window).scrollTop();
        // Background Fixed
        if (winscroll > 120) {
            $(".navbar").addClass('navbar-bg');
        } else {
            $(".navbar").removeClass('navbar-bg');
        }

        // Show & Hide The Arrow
        if ($(window).scrollTop() > 600) {
            $('.scroll-top').fadeIn(500);
        } else {
            $('.scroll-top').fadeOut(500);
        }

        // Sync Navbar Links With Section
        $('.block').each(function () {
            if($(window).scrollTop() > $(this).offset().top) {
            var blockId = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll = "' + blockId + '"]').addClass('active');
            }
        });
    });
    
    // Smoothly Scroll To Element
    $('.navbar li a').on('click',function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1200);
    });

    // Add Active Class On Navbar Link And Remove From Siblings
    $(".navbar li a").on('click', function (e){
        e.preventDefault();
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
    });

    // Click On arrow-up  To Go Up
    $('.scroll-top').click(function (e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});