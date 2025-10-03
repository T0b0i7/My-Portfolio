$(document).ready(function() {
    // Initialisation des carousels dans les cartes de design
    $('.design-preview .design-carousel').each(function() {
        $(this).owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: false,
            nav: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            smartSpeed: 450
        });
    });

    // Initialisation du carousel dans le modal
    function initModalCarousel() {
        $('.design-modal .design-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            smartSpeed: 450
        });

        // Navigation personnalisée
        $('.design-modal .nav-button.prev').click(function() {
            $(this).closest('.modal-body').find('.design-carousel').trigger('prev.owl.carousel');
        });

        $('.design-modal .nav-button.next').click(function() {
            $(this).closest('.modal-body').find('.design-carousel').trigger('next.owl.carousel');
        });
    }

    // Initialiser le carousel quand le modal est ouvert
    $('.design-modal').on('shown.bs.modal', function() {
        initModalCarousel();
    });

    // Détruire le carousel quand le modal est fermé
    $('.design-modal').on('hidden.bs.modal', function() {
        var carousel = $(this).find('.design-carousel');
        if (carousel.length) {
            carousel.trigger('destroy.owl.carousel');
        }
    });
});