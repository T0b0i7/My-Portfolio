$(document).ready(function(){
    $(".portrait-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        nav: false,
        dots: true,
        onChanged: function(event) {
            // Ajouter l'effet de zoom
            $('.portrait-slider .owl-item').removeClass('zoom-effect');
            $('.portrait-slider .owl-item.active').addClass('zoom-effect');
        }
    });
});