// services.js

document.addEventListener("DOMContentLoaded", function () {
    const serviceElements = document.querySelectorAll(".services__block__element");

    function toggleServiceContent(service) {
        const defaultElement = service.querySelector(".services__block__element-default");
        const openedElement = service.querySelector(".services__block__element-oppened");
        defaultElement.style.display = "none";
        openedElement.style.display = "block";

        function closeOpenedContent(event) {
            if (!service.contains(event.target)) {
                defaultElement.style.display = "block";
                openedElement.style.display = "none";
                document.removeEventListener("click", closeOpenedContent);
            }
        }

        document.addEventListener("click", closeOpenedContent);
    }

    serviceElements.forEach((service) => {
        service.querySelector(".services__element__link").addEventListener("click", (event) => {
            event.stopPropagation();
            toggleServiceContent(service);
        });
    });
});
