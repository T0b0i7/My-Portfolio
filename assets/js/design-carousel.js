$(document).ready(function(){
    // Initialisation des carousels dans les cartes de design
    $('.design-carousel').each(function(){
        $(this).owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
    });

    // Gestion des contrôles de navigation personnalisés
    $('.design-preview').each(function(){
        var carousel = $(this).find('.design-carousel');
        
        // Ajouter des boutons de navigation personnalisés
        $(this).append(`
            <div class="design-nav">
                <button class="prev-design"><i class="bi bi-chevron-left"></i></button>
                <button class="next-design"><i class="bi bi-chevron-right"></i></button>
            </div>
        `);

        // Navigation personnalisée
        $(this).find('.prev-design').click(function() {
            carousel.trigger('prev.owl.carousel');
        });

        $(this).find('.next-design').click(function() {
            carousel.trigger('next.owl.carousel');
        });
    });
});