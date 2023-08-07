// Add interactivity to the navigation links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });

        // Hide all sections except the clicked one
        const allSections = document.querySelectorAll("section");
        allSections.forEach(section => {
            if ("#" + section.id === targetId) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const contactItems = document.querySelectorAll(".contact-item");

    contactItems.forEach(item => {
        item.addEventListener("click", redirectToLink);
    });

    function redirectToLink() {
        const link = this.querySelector(".contact-link");

        if (link) {
            const url = link.getAttribute("href");
            if (url) {
                window.open(url, "_blank");
            }
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const certificateBoxes = document.querySelectorAll(".certificate");

    certificateBoxes.forEach(box => {
        const link = box.getAttribute("data-link");
        box.addEventListener("click", () => {
            window.location.href = link;
        });
    });
});


