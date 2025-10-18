// Recommended portfolio transition: crossfade + subtle parallax on the Vanta background
// Respects prefers-reduced-motion and handles safe link behaviors (new tab / external links)

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Page load: gentle fade-in; if motion is allowed, add a tiny background parallax
gsap.from("body", { opacity: 0, duration: 0.6, ease: "power2.out" });
if (!reducedMotion) {
    gsap.from("#vanta-bg", { y: 10, opacity: 0.98, duration: 0.9, ease: "power2.out" });
} else {
    gsap.from("#vanta-bg", { opacity: 0.98, duration: 0.6, ease: "power1.out" });
}

function navigateWithTransition(targetUrl) {
    if (reducedMotion) {
        // Reduced-motion users: quick fade then navigate
        gsap.to("body", { opacity: 0, duration: 0.3, ease: "power1.inOut", onComplete: () => { window.location.href = targetUrl; } });
        return;
    }

    const tl = gsap.timeline();
    // subtle parallax on background (few pixels)
    tl.to("#vanta-bg", { y: -10, opacity: 0.95, duration: 0.6, ease: "power2.inOut" });
    // crossfade content simultaneously
    tl.to("body", { opacity: 0, duration: 0.6, ease: "power2.inOut" }, "<");
    tl.call(() => { window.location.href = targetUrl; });
}

document.querySelectorAll("a.nav-link").forEach(link => {
    link.addEventListener("click", function (event) {
        // allow modifier keys / middle click / right-click to keep native behavior
        if (event.defaultPrevented) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; // let browser handle

        const targetUrl = this.href;
        const targetIsExternal = this.hostname && this.hostname !== window.location.hostname;
        const hasBlank = this.target && this.target === '_blank';

        // If it's external or explicitly opens in new tab, let it behave normally
        if (targetIsExternal || hasBlank || targetUrl.startsWith('mailto:')) return;

        event.preventDefault();
        navigateWithTransition(targetUrl);
    });
});