gsap.from("body", { opacity: 0, duration: 1 });
document.querySelectorAll("a.nav-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetUrl = this.href;
        gsap.to("body", { opacity: 0, duration: 0.3, onComplete: () => {
            window.location.href = targetUrl;
        }});
    });
});