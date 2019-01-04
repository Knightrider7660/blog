

$( document ).ready(function () {
    //owlCarousel
    $('.testimonial_carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });
//owlCarousel

// Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    $('.counter').addClass('animated fadeInDownBig');
//counter up

});

