document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop() || "index.html"; 

    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        let linkPage = link.getAttribute("href").split("/").pop(); 
        if (linkPage.toLowerCase() === currentPage.toLowerCase()) { 
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
