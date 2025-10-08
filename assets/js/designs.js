document.addEventListener('DOMContentLoaded', function() {
    // Initialisation des animations AOS
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true
    });

    // Configuration du slider de designs
    const designSliderConfig = {
        items: 1,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        },
        onInitialized: function() {
            // Animation des éléments après initialisation
            $('.design-preview').addClass('visible');
        }
    };

    // Initialiser les sliders existants
    $('.logo-slider').owlCarousel(designSliderConfig);
    $('.flyer-slider').owlCarousel(designSliderConfig);
    $('.branding-slider').owlCarousel(designSliderConfig);

    // Gestion des modales de design
    const designModals = document.querySelectorAll('.design-modal');
    designModals.forEach(modal => {
        // Zoom sur l'image au clic
        const modalImage = modal.querySelector('img');
        if (modalImage) {
            modalImage.addEventListener('click', function() {
                this.classList.toggle('zoomed');
            });
        }

        // Réinitialiser le zoom à la fermeture
        modal.addEventListener('hidden.bs.modal', function() {
            const img = this.querySelector('img');
            if (img) {
                img.classList.remove('zoomed');
            }
        });
    });

    // Gestion des previews de design
    const designPreviews = document.querySelectorAll('.design-preview');
    designPreviews.forEach(preview => {
        // Animation au survol
        preview.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        preview.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        // Gestion tactile pour mobile
        preview.addEventListener('touchstart', function() {
            const overlay = this.querySelector('.design-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
            }
        }, { passive: true });

        preview.addEventListener('touchend', function() {
            const overlay = this.querySelector('.design-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        }, { passive: true });
    });

    // Observer pour les animations au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    designPreviews.forEach(preview => {
        observer.observe(preview);
    });
});