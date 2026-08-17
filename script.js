/* =========================================================
   WALEXECOM — TELEGRAM MARKETING WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");

            if (nav.classList.contains("active")) {
                menuBtn.textContent = "✕";
                menuBtn.setAttribute("aria-label", "Close menu");
            } else {
                menuBtn.textContent = "☰";
                menuBtn.setAttribute("aria-label", "Open menu");
            }
        });


        /* Close mobile menu when a link is clicked */

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuBtn.textContent = "☰";
                menuBtn.setAttribute("aria-label", "Open menu");

            });

        });

    }


    /* =====================================================
       FAQ ACCORDION
       ===================================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) return;

        question.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");


            /* Close all other FAQ items */

            faqItems.forEach((otherItem) => {

                if (otherItem !== item) {

                    otherItem.classList.remove("active");

                    const otherAnswer =
                        otherItem.querySelector(".faq-answer");

                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }

                }

            });


            /* Toggle selected FAQ */

            if (isOpen) {

                item.classList.remove("active");
                answer.style.maxHeight = null;

            } else {

                item.classList.add("active");
                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header =
                document.querySelector(".header");

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       TELEGRAM ORDER BUTTONS
       ===================================================== */

    const telegramLinks =
        document.querySelectorAll(
            'a[href*="t.me/WalexEcom"]'
        );

    telegramLinks.forEach((link) => {

        link.addEventListener("click", () => {

            console.log(
                "Opening WalexEcom Telegram contact..."
            );

        });

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .pricing-card, .step, .about-box, .contact-card"
    );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";
                            entry.target.style.transform =
                                "translateY(0)";

                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            element.style.opacity = "0";
            element.style.transform = "translateY(25px)";
            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(element);

        });

    }


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener("click", (event) => {

        if (!nav || !menuBtn) return;

        const clickedInsideNav =
            nav.contains(event.target);

        const clickedMenuButton =
            menuBtn.contains(event.target);

        if (
            nav.classList.contains("active") &&
            !clickedInsideNav &&
            !clickedMenuButton
        ) {

            nav.classList.remove("active");

            menuBtn.textContent = "☰";
            menuBtn.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    });


    /* =====================================================
       ESCAPE KEY CLOSES MOBILE MENU
       ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (nav) {
                nav.classList.remove("active");
            }

            if (menuBtn) {

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        }

    });


    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "🚀 WalexEcom Marketing Website Loaded Successfully."
    );

});
