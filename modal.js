function openModal(imageSrc, title) {
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-title").textContent = title;
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}