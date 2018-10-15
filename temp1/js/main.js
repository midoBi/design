$(function () {
    'use strict';

    $(window).scroll(function() {
        var navbar = $('.navbar');
        if($(window).scrollTop() >= navbar.height()){
            if(!navbar.hasClass('scrolled')){
                navbar.addClass('scrolled');
            }
        }else {
            if(navbar.hasClass('scrolled')){
                navbar.removeClass('scrolled');
            }
        }
    })
    // Deal with tabs 
    $('.tab-switch li').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected')
        
        $('.tabs-section .tabs-content > div').hide();

        $('.' + $(this).data('class')).show();
    })
});