$(document).ready(function($) {

    $(window).resize(function(){
       $('.height-follower, .height-follower-mobile').height($(window).height());
    })
    $(window).resize();

	/*$('a').smoothScroll();*/

    $(function() {
        $('header a').bind('click',function(event){
            var $anchor = $(this);
     
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });
    });

    if ($(window).width() <= 768) {
            $('body').addClass('height-follower-mobile');
            $('.social-links-container').insertAfter('.mail-input-container');
        }else{
            $('.social-links-container').insertAfter('.zgenius-text-logo');
        }
    $(window).resize(function(){
        if ($(window).width() <= 768) {
            $('body').addClass('height-follower-mobile');
            $('.social-links-container').insertAfter('.mail-input-container');
        }else{
            $('.social-links-container').insertAfter('.zgenius-text-logo');
        }
    });

});