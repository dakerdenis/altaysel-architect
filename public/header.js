// header.js

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const languageToggle = document.querySelector(".language__toggle");
    const languageDropdown = document.querySelector(".language__dropdown");
    const arrow = document.querySelector(".arrow");

    function toggleLanguageDropdown(event) {
        event.stopPropagation();
        languageDropdown.classList.toggle("show");
        arrow.classList.toggle("rotate");
    }

    function closeLanguageDropdown(event) {
        if (!languageToggle.contains(event.target) && !languageDropdown.contains(event.target)) {
            languageDropdown.classList.remove("show");
            arrow.classList.remove("rotate");
        }
    }

    window.addEventListener("scroll", () => {
        header.classList.toggle("header__scrolled", window.scrollY > 0);
    });

    languageToggle.addEventListener("click", toggleLanguageDropdown);
    document.addEventListener("click", closeLanguageDropdown);
});
