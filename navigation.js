document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop() || "index.html"; // Default to "index.html" if empty

    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        let linkPage = link.getAttribute("href").split("/").pop(); // Extract filename from href
        
        if (linkPage.toLowerCase() === currentPage.toLowerCase()) { // Case-insensitive check
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
