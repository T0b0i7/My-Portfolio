$(document).ready(function() {
    // Fonction pour initialiser le carousel
    function initModalCarousel() {
        $('.modal-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            smartSpeed: 800,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
    }

    // Initialiser le carousel quand le modal est ouvert
    $('#designModal2').on('shown.bs.modal', function() {
        initModalCarousel();
        
        // Gérer la navigation personnalisée
        $('.nav-button.prev').click(function() {
            $(this).closest('.carousel-container').find('.modal-carousel').trigger('prev.owl.carousel');
        });
        
        $('.nav-button.next').click(function() {
            $(this).closest('.carousel-container').find('.modal-carousel').trigger('next.owl.carousel');
        });
    });

    // Détruire le carousel quand le modal est fermé
    $('#designModal2').on('hide.bs.modal', function() {
        var carousel = $(this).find('.modal-carousel');
        if (carousel.length) {
            carousel.trigger('destroy.owl.carousel');
        }
    });
});