// Fonction pour gérer le zoom des images
document.addEventListener('DOMContentLoaded', function() {
    // Créer le modal une seule fois
    const zoomModal = document.createElement('div');
    zoomModal.className = 'modal fade';
    zoomModal.id = 'imageZoomModal';
    zoomModal.tabIndex = '-1';
    zoomModal.setAttribute('aria-hidden', 'true');
    
    zoomModal.innerHTML = `
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
                </div>
                <div class="modal-body">
                    <img src="" class="img-fluid" id="zoomedImage" alt="Image agrandie">
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(zoomModal);
    
    // Initialiser le modal Bootstrap
    const modal = new bootstrap.Modal(document.getElementById('imageZoomModal'));
    
    // Ajouter le gestionnaire d'événements à toutes les images de la galerie
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function(e) {
            e.stopPropagation(); // Empêcher la propagation de l'événement
            const zoomedImg = document.getElementById('zoomedImage');
            zoomedImg.src = this.src;
            zoomedImg.alt = this.alt;
            modal.show();
        });
    });
});