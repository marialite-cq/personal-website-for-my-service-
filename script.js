// Smooth scrolling for anchor links
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Basic CTA popup (can be expanded)
document.querySelectorAll(".cta-button, .micro-cta").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        alert("Booking a call! (This would link to Calendly/TidyCal)");
        // In a real scenario, you would redirect to Calendly or open a modal
        // window.location.href = "YOUR_CALENDLY_LINK_HERE";
    });
});


