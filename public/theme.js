// theme.js

document.addEventListener("DOMContentLoaded", function () {
    const themeChanger = document.querySelector(".main__block__theme-changer");
    const themeCircle = document.querySelector(".__theme-surface__circle");
    const themeSurface = document.querySelector(".__theme-surface");
    const themeMoon = document.querySelector(".__theme-surface__moon");
    const backgroundChange = document.getElementById("background_change");
    const backgroundChangeMain = document.getElementById("background_change_main");

    let isActive = false;

    function toggleTheme() {
        themeCircle.style.left = isActive ? "-12px" : "40px";
        themeSurface.style.backgroundColor = isActive ? "var(--orange)" : "black";
        themeMoon.style.opacity = isActive ? "1" : "0";
        backgroundChange.style.backgroundColor = isActive ? "" : "black";
        backgroundChangeMain.style.backgroundColor = isActive ? "" : "black";
        document.body.classList.toggle("dark-theme", !isActive);
        isActive = !isActive;
    }

    themeChanger.addEventListener("click", toggleTheme);
});
