// Modal functions for enlarged certificate view
function openModal(imageSrc, imageAlt) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});