// preloader.js

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const minDuration = 1500;

    function hidePreloader() {
        setTimeout(() => {
            preloader.style.display = "none";
        }, minDuration);
    }

    window.addEventListener("load", hidePreloader);
});
