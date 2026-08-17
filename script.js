document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            if (nav.classList.contains("active")) {

                menuBtn.textContent = "✕";

            } else {

                menuBtn.textContent = "☰";

            }

        });


        nav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuBtn.textContent = "☰";

            });

        });

    }


    /* ================= FAQ ================= */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");

        if (!question || !answer) return;

        question.addEventListener("click", () => {

            const currentlyOpen =
                item.classList.contains("active");


            faqItems.forEach((otherItem) => {

                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                }

            });


            if (!currentlyOpen) {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });


    /* ================= YEAR ================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ================= SMOOTH SCROLL ================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

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

            const position =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });

        });

    });


    /* ================= OUTSIDE MENU CLICK ================= */

    document.addEventListener("click", (event) => {

        if (!nav || !menuBtn) return;

        if (
            nav.classList.contains("active") &&
            !nav.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            nav.classList.remove("active");

            menuBtn.textContent = "☰";

        }

    });


    /* ================= ESCAPE MENU ================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (nav) {
                nav.classList.remove("active");
            }

            if (menuBtn) {
                menuBtn.textContent = "☰";
            }

        }

    });


    /* ================= SCROLL ANIMATION ================= */

    const animatedElements =
        document.querySelectorAll(
            ".service-card, .benefit-card, .package-card, .process-card, .about-box"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

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


        animatedElements.forEach((element) => {

            observer.observe(element);

        });

    }


    /* ================= TELEGRAM ================= */

    document.querySelectorAll(
        'a[href*="t.me/WalexEcom"]'
    ).forEach((link) => {

        link.addEventListener("click", () => {

            console.log(
                "Opening WalexEcom on Telegram..."
            );

        });

    });


    console.log(
        "🚀 WalexEcom website loaded successfully."
    );

});
