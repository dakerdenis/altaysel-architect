// popup.js

document.addEventListener("DOMContentLoaded", function () {
    async function fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch data from ${url}`);
        return response.json();
    }

    async function initializePopup() {
        const popupOverlay = document.getElementById("popup_overlay");
        const popupClose = document.getElementById("popup_close");
        const popupImage = document.getElementById("popup_image");
        const popupName = document.getElementById("popup_name");
        const popupDescription = document.getElementById("popup_description");

        let currentImageIndex = 0;

        function openPopup() {
            popupOverlay.style.display = "flex";
            document.body.style.overflow = "hidden";
        }

        function closePopup() {
            popupOverlay.style.display = "none";
            document.body.style.overflow = "auto";
        }

        function createPopup(data) {
            console.log("Opening popup for project:", data);
            popupName.innerHTML = data.name_az || "N/A";
            popupDescription.innerHTML = data.desc_az || "No description available.";
            popupImage.src = data.main_image || "";
            openPopup();
        }

        popupClose.addEventListener("click", closePopup);

        const mainProjects = await fetchData("/api/mainprojects");
        document.querySelectorAll(".project-item").forEach((item, index) => {
            item.addEventListener("click", () => createPopup(mainProjects[index]));
        });
    }

    initializePopup().catch(console.error);
});
