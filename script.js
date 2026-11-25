
/* =====================================
   MARVZY0519 - PERSONAL IT PORTFOLIO
   JavaScript Interactions
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    // 1. ACTIVE NAVIGATION INDICATOR

    const navLinks = document.querySelectorAll(".navbar nav a");
    const sections = document.querySelectorAll("main section");

    const sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute("id");

                    navLinks.forEach(function (link) {
                        const linkId = link.getAttribute("href");

                        if (linkId === "#" + currentId) {
                            link.setAttribute("aria-current", "location");
                        } else {
                            link.removeAttribute("aria-current");
                        }
                    });
                }

            });
        },
        {
            threshold: 0.35
        }
    );

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });


    // 2. BACK TO TOP BUTTON

    const backToTop = document.createElement("button");

    backToTop.innerHTML = "↑";
    backToTop.setAttribute("aria-label", "Back to top");

    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        background: #202020;
        color: #ffffff;
        font-size: 22px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        transition: 0.3s ease;
    `;

    document.body.appendChild(backToTop);


    // 3. SHOW BUTTON WHEN SCROLLING

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });


    // 4. BACK TO TOP CLICK EVENT

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // 5. BUTTON HOVER EFFECT

    backToTop.addEventListener("mouseenter", function () {
        backToTop.style.background = "#555555";
        backToTop.style.transform = "translateY(-3px)";
    });

    backToTop.addEventListener("mouseleave", function () {
        backToTop.style.background = "#202020";
        backToTop.style.transform = "translateY(0)";
    });


    // 6. CONSOLE MESSAGE

    console.log("Marvzy's IT Portfolio loaded successfully!");

});

