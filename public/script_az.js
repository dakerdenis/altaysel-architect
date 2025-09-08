document.addEventListener("DOMContentLoaded", function () {
    // Hide the preloader when all content is loaded or after 1.5 seconds
    const preloader = document.getElementById("preloader");

    // Set minimum duration for preloader visibility (1.5 seconds)
    const minDuration = 100;
    const startTime = performance.now();

    // Function to hide the preloader
    function hidePreloader() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        const remainingTime = Math.max(0, minDuration - elapsedTime);

        setTimeout(function () {
            preloader.style.display = "none";
        }, remainingTime);
    }

    // Hide the preloader when all content is loaded
    window.addEventListener("load", function () {
        hidePreloader();
    });

    // Hide the preloader after 1.5 seconds even if all content is not loaded
    hidePreloader();

    // Theme changer functionality
    // Theme changer functionality
    // Theme changer functionality
    // Theme changer functionality
    const themeChanger = document.querySelector(".main__block__theme-changer");
    const themeCircle = document.querySelector(".__theme-surface__circle");
    const themeSurface = document.querySelector(".__theme-surface");
    const themeMoon = document.querySelector(".__theme-surface__moon");
    const backgroundChange = document.getElementById("background_change");
    const backgroundChange2 = document.getElementById("background_change2");
    /**!!!!!!*********** */
    /**!!!!!!*********** */
    // Correct selector for social container
    const socialContainer = document.querySelector(".popup__social__container");
    /**!!!!!!*********** */
    /**!!!!!!*********** */
    const backgroundChange3 = document.getElementById("background_change3");
    const backgroundChange4 = document.getElementById("background_change4");

    const color_change_team = document.getElementById("color_change_team");
    const colorChangeElements1 = document.getElementById(
        "colorChangeElements1"
    );
    const colorChangeElements2 = document.getElementById(
        "colorChangeElements2"
    );

    const colorChangeElements = document.querySelectorAll("#color_change");

    const color_change3 = document.querySelectorAll("#color_change3");

    const imageChange = document.getElementById("image_change");
    const imageChange2 = document.getElementById("image_change2");
    const imageChange3 = document.getElementById("image_change3");
    const imageChange4 = document.getElementById("image_change4");
    const imageChange5 = document.getElementById("image_change5");
    const imageChange6 = document.getElementById("image_change6");
    const backgroundChangeMain = document.getElementById(
        "background_change_main"
    );
    const backgroundChangeMainServices = document.querySelectorAll(
        "#background_change_main_services"
    );
    let isActive = false;

    function toggleTheme() {
        themeCircle.style.left = isActive ? "-12px" : "40px";
        themeSurface.style.backgroundColor = isActive
            ? "var(--orange)"
            : "black";
        themeMoon.style.opacity = isActive ? "1" : "0";
        backgroundChange.style.backgroundColor = isActive ? "" : "black";
        backgroundChangeMain.style.backgroundColor = isActive ? "" : "black";

        backgroundChange3.style.backgroundColor = isActive ? "" : "#323232";
        backgroundChange3.style.color = isActive ? "" : "#fff";

        backgroundChange4.style.backgroundColor = isActive ? "" : "#323232";
        backgroundChange4.style.color = isActive ? "" : "#fff";

        color_change_team.style.color = isActive ? "" : "#fff";
        colorChangeElements1.style.color = isActive ? "" : "#fff";
        colorChangeElements2.style.color = isActive ? "" : "#fff";

        backgroundChange2.style.background = isActive
            ? ""
            : "linear-gradient(90deg, #000000 1.9%, rgba(154, 104, 17, 0.7) 21.65%, #000000 42.98%)";
        colorChangeElements.forEach(
            (element) => (element.style.color = isActive ? "" : "white")
        );
        color_change3.forEach(
            (element) => (element.style.color = isActive ? "" : "white")
        );

        imageChange.src = isActive
            ? "./style/imgs/Vector1.svg"
            : "./style/imgs/Vector2.svg";
        imageChange2.src = isActive
            ? "./style/imgs/main_image_2.jpeg"
            : "./style/imgs/main_image_1.jpeg";
        imageChange3.src = isActive
            ? "./style/imgs/about_1_white.jpeg"
            : "./style/imgs/about_1_black.jpeg";
        imageChange4.src = isActive
            ? "./style/imgs/about_2_white.jpeg"
            : "./style/imgs/about_2_black.jpeg";
        imageChange5.src = isActive
            ? "./style/imgs/about_3_white.jpeg"
            : "./style/imgs/about_3_black.jpeg";
        imageChange6.src = isActive
            ? "./style/imgs/about_4_white.jpeg"
            : "./style/imgs/about_4_black.jpeg";

        // Toggle dark theme class on the body
        document.body.classList.toggle("dark-theme", !isActive);

        isActive = !isActive;
    }

    themeChanger.addEventListener("click", toggleTheme);

    // Header related functionality
    const header = document.querySelector(".header");
    const languageToggle = document.querySelector(".language__toggle");
    const languageDropdown = document.querySelector(".language__dropdown");
    const arrow = document.querySelector(".arrow");
    const numberBlocks = document.querySelectorAll(".number__block__element");

    function scrollToTarget(button) {
        const targetElement = document.querySelector(button.dataset.target);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 95,
                behavior: "smooth",
            });
        }
    }

    document
        .querySelectorAll(".header__navigation__container button")
        .forEach((button) => {
            button.addEventListener("click", () => scrollToTarget(button));
        });

    window.addEventListener("scroll", () => {
        header.classList.toggle(
            isActive ? "header__scrolled_black" : "header__scrolled",
            window.scrollY > 0
        );
        if (!window.scrollY)
            setTimeout(() => header.classList.add("header__transition"), 100);
    });

    languageToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        languageDropdown.classList.toggle("show");
        arrow.classList.toggle("rotate");
    });

    document.addEventListener("click", (event) => {
        if (
            !languageToggle.contains(event.target) &&
            !languageDropdown.contains(event.target)
        ) {
            languageDropdown.classList.remove("show");
            arrow.classList.remove("rotate");
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function countNumbers(element) {
        const targetNumber = parseInt(element.querySelector("span").innerText);
        let currentNumber = 0;
        const increment = Math.ceil(targetNumber / 60);

        const interval = setInterval(() => {
            if (currentNumber < targetNumber) {
                currentNumber += increment;
                if (currentNumber > targetNumber) currentNumber = targetNumber;
                element.querySelector("span").innerText = currentNumber;
            } else clearInterval(interval);
        }, 20);

        element.classList.add("counted");
    }
    function handleScroll() {
        numberBlocks.forEach(
            (block) =>
                isInViewport(block) &&
                !block.classList.contains("counted") &&
                countNumbers(block)
        );
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Function to toggle service content
    const serviceElements = document.querySelectorAll(
        ".services__block__element"
    );
    function toggleServiceContent(service) {
        const link = service.querySelector(".services__element__link");
        const defaultElement = service.querySelector(
            ".services__block__element-default"
        );
        const openedElement = service.querySelector(
            ".services__block__element-oppened"
        );
        defaultElement.style.display = "none";
        openedElement.style.display = "block";

        document.addEventListener("click", closeOpenedContent);

        function closeOpenedContent(event) {
            if (!service.contains(event.target)) {
                defaultElement.style.display = "block";
                openedElement.style.display = "none";
                document.removeEventListener("click", closeOpenedContent);
            }
        }
    }
    serviceElements.forEach((service) =>
        service
            .querySelector(".services__element__link")
            .addEventListener("click", (event) => {
                event.stopPropagation();
                toggleServiceContent(service);
            })
    );

    //! POPUP CODE
    //! POPUP CODE
    //! POPUP CODE
    // Function to fetch JSON data from external file
    async function fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }
        return response.json();
    }

    // Load project data
    Promise.all([
        fetchData("/api/mainprojects"),
        fetchData("/api/mapprojects"),
        fetchData("/api/futureprojects"),
    ])
        .then(([mainProjectData, mapProjectData, futureProjectData]) => {
            handlePopupContainers(
                mainProjectData,
                mapProjectData,
                futureProjectData
            );
        })
        .catch((error) => {
            console.error("Error fetching project data:", error);
        });

    // Function to handle popup containers after fetching data
// Popup functionality
function handlePopupContainers(mainProjectData, mapProjectData, futureProjectData) {
    const popupContainers = document.querySelectorAll(
        ".projects__block-hover__popup, .map__project-view_more, .future_slide__link"
    );
    const popupImage = document.getElementById("popup_image");
    const popupName = document.getElementById("popup_name");
    const popupAdress = document.getElementById("popup__adress");
    const popupYear = document.getElementById("popup_year");
    const popupYearBlock = document.getElementById("popup_year_block");
    const popupLocation = document.getElementById("popup_location");
    const popupDescription = document.getElementById("popup_description");
    const popupClose = document.getElementById("popup_close");
    const prevButton = document.getElementById("prev_button");
    const nextButton = document.getElementById("next_button");
    const popupVideo = document.getElementById("popup_video");
    const imagesTabButton = document.getElementById("images_tab_button");
    const videoTabButton = document.getElementById("video_tab_button");
    const videoTab = document.getElementById("video_tab");
    const imagesTab = document.getElementById("images_tab");

    const placeholderVideoUrl = "https://www.youtube.com/embed/H_ReGaTJ92s?si=F7ZSyz1kUfDl8Sp1";
    let currentImageIndex = 0;
    let currentData;

    popupContainers.forEach((popupContainer) => {
        popupContainer.addEventListener("click", () => {
            const projectId = popupContainer.dataset.projectId;
            let project = mainProjectData.find(
                (project) => project.id === parseInt(projectId)
            );
            let isFutureProject = false;

            if (!project) {
                project = mapProjectData.find(
                    (project) => project.id === parseInt(projectId)
                );
            }

            if (!project) {
                project = futureProjectData.find(
                    (project) => project.id === parseInt(projectId)
                );
                isFutureProject = !!project; // Check if the project is a future project
            }

            if (project) {
                createPopup(project, isFutureProject);
            }
        });
    });

    function openPopup() {
        const popupOverlay = document.getElementById("popup_overlay");
        popupOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";

        popupOverlay.addEventListener("click", (event) => {
            if (event.target === popupOverlay) closePopup();
        });
        popupClose.addEventListener("click", closePopup);
    }

    function closePopup() {
        const popupOverlay = document.getElementById("popup_overlay");
        popupOverlay.style.display = "none";
        document.body.style.overflow = "auto";
        popupVideo.src = ""; // Clear the video URL when popup is closed
    }

    function updateImage() {
        if (currentData.images.length > 0) {
            const currentImageSrc = currentData.images[currentImageIndex];
            popupImage.src = `./archi/public/uploads/projects/${currentImageSrc}`;
        }
    }

    function createPopup(data, isFutureProject = false) {
        console.log("Opening popup for project:", data);

        // Remove previous event listeners
        prevButton.onclick = null;
        nextButton.onclick = null;

        currentData = data;
        currentImageIndex = 0;

        // Ensure images is a proper array
        let images = [];
        try {
            images = Array.isArray(data.images) ? data.images : JSON.parse(data.images);
        } catch (error) {
            console.error("Error parsing images:", error);
            images = [];
        }

        if (!images.includes(data.main_image)) {
            images.unshift(data.main_image);
        }
        currentData.images = images;

        // Set popup data
        popupName.innerHTML = data.name_az;
        popupDescription.innerHTML = data.desc_az || "";
        popupAdress.innerHTML = data.adress || "N/A";
        popupYear.innerHTML = data.year || "N/A";
        popupLocation.href = data.location || "#";

        // Show or hide year block
        popupYearBlock.style.display = data.year ? "block" : "none";

        if (images.length > 0) {
            popupImage.src = `./archi/public/uploads/projects/${images[0]}`;
        } else {
            popupImage.src = ""; // Fallback if no images are available
        }

        // Handle video
        const videoUrl = data.video_url && data.video_url.trim() ? data.video_url : placeholderVideoUrl;

        // Handle navigation buttons
        prevButton.style.display = images.length > 1 ? "block" : "none";
        nextButton.style.display = images.length > 1 ? "block" : "none";

        prevButton.onclick = () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateImage();
        };

        nextButton.onclick = () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateImage();
        };

        // Handle tabs
        imagesTabButton.onclick = () => {
            imagesTab.style.display = "flex";
            videoTab.style.display = "none";
            popupVideo.src = ""; // Clear video URL when switching to images tab
            imagesTabButton.classList.add("active-tab");
            videoTabButton.classList.remove("active-tab");
        };

        videoTabButton.onclick = () => {
            imagesTab.style.display = "none";
            videoTab.style.display = "flex";
            popupVideo.src = videoUrl; // Set video URL dynamically
            videoTabButton.classList.add("active-tab");
            imagesTabButton.classList.remove("active-tab");
        };

        // Default to images tab
        imagesTab.style.display = "flex";
        videoTab.style.display = "none";
        imagesTabButton.classList.add("active-tab");
        videoTabButton.classList.remove("active-tab");

        // Open the popup
        openPopup();
    }
}

// Fetch project data and initialize the popup functionality
Promise.all([
    fetchData("/api/mainprojects"),
    fetchData("/api/mapprojects"),
    fetchData("/api/futureprojects"),
])
    .then(([mainProjectData, mapProjectData, futureProjectData]) => {
        handlePopupContainers(mainProjectData, mapProjectData, futureProjectData);
    })
    .catch((error) => {
        console.error("Error fetching project data:", error);
    });

    function createPopup(data, isFutureProject = false) {
        console.log("Opening popup for project:", data);
    
        const popupOverlay = document.getElementById("popup_overlay");
        const popupImage = document.getElementById("popup_image");
        const popupName = document.getElementById("popup_name");
        const popupAdress = document.getElementById("popup__adress");
        const popupYear = document.getElementById("popup_year");
        const popupYearBlock = document.getElementById("popup_year_block");
        const popupLocation = document.getElementById("popup_location");
        const popupDescription = document.getElementById("popup_description");
        const prevButton = document.getElementById("prev_button");
        const nextButton = document.getElementById("next_button");
        const imagesTabButton = document.getElementById("images_tab_button");
        const videoTabButton = document.getElementById("video_tab_button");
        const videoTab = document.getElementById("video_tab");
        const imagesTab = document.getElementById("images_tab");
        const popupVideo = document.getElementById("popup_video");
    
        // Placeholder video URL
        const placeholderVideoUrl = "https://www.youtube.com/embed/H_ReGaTJ92s?si=F7ZSyz1kUfDl8Sp1";
        const videoUrl = data.video_url && data.video_url.trim() ? data.video_url : placeholderVideoUrl;
    
        let currentImageIndex = 0;
    
        // Ensure all critical elements are present
        if (!popupOverlay || !popupImage || !popupName || !popupAdress) {
            console.error("Critical popup elements are missing in the DOM.");
            return;
        }
    
        // Ensure `images` is a valid array
        let images = [];
        try {
            images = Array.isArray(data.images) ? data.images : JSON.parse(data.images);
        } catch (error) {
            console.error("Error parsing images:", error);
        }
        if (!images.includes(data.main_image)) images.unshift(data.main_image);
    
        // Populate popup data
        popupName.innerHTML = data.name_az || "N/A";
        popupDescription.innerHTML = data.desc_az || "No description available.";
        popupAdress.innerHTML = data.adress || "N/A";
        popupLocation.href = data.location || "#";
    
        // Handle year display
        if (popupYearBlock) {
            if (data.year) {
                popupYearBlock.style.display = "block";
                popupYear.innerHTML = data.year;
            } else {
                popupYearBlock.style.display = "none";
            }
        }
    
        // Handle images
        if (images.length > 0) {
            popupImage.src = `./archi/public/uploads/projects/${images[0]}`;
            currentImageIndex = 0;
        } else {
            popupImage.src = ""; // No image available
            console.warn("No images available for this project.");
        }
    
        // Navigation buttons
        prevButton.style.display = images.length > 1 ? "block" : "none";
        nextButton.style.display = images.length > 1 ? "block" : "none";
    
        prevButton.onclick = () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            popupImage.src = `./archi/public/uploads/projects/${images[currentImageIndex]}`;
        };
    
        nextButton.onclick = () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            popupImage.src = `./archi/public/uploads/projects/${images[currentImageIndex]}`;
        };
    
        // Handle tabs (Images and Video)
        imagesTabButton.style.display = isFutureProject ? "block" : "none";
        videoTabButton.style.display = isFutureProject ? "block" : "none";
    
        imagesTabButton.onclick = () => {
            imagesTab.style.display = "flex";
            videoTab.style.display = "none";
            popupVideo.src = ""; // Clear video when switching tabs
            imagesTabButton.classList.add("active-tab");
            videoTabButton.classList.remove("active-tab");
        };
    
        videoTabButton.onclick = () => {
            imagesTab.style.display = "none";
            videoTab.style.display = "flex";
            popupVideo.src = videoUrl; // Assign video URL
            videoTabButton.classList.add("active-tab");
            imagesTabButton.classList.remove("active-tab");
        };
    
        // Default to images tab
        imagesTab.style.display = "flex";
        videoTab.style.display = "none";
        imagesTabButton.classList.add("active-tab");
        videoTabButton.classList.remove("active-tab");
    
        // Open popup
        popupOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";
    
        // Close popup
        popupOverlay.onclick = (e) => {
            if (e.target === popupOverlay) closePopup();
        };
    
        document.getElementById("popup_close").onclick = closePopup;
    
        function closePopup() {
            popupOverlay.style.display = "none";
            document.body.style.overflow = "auto";
            popupVideo.src = ""; // Clear video URL on close
        }
    }
    
    
    
    
    
    
    function openPopup() {
        const popupOverlay = document.getElementById("popup_overlay");
        popupOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    
    function closePopup() {
        const popupOverlay = document.getElementById("popup_overlay");
        popupOverlay.style.display = "none";
        document.body.style.overflow = "auto";
    
        // Reset video src to stop playback when closing the popup
        const popupVideo = document.getElementById("popup_video");
        if (popupVideo) popupVideo.src = "";
    }
    
    
    function openPopup() {
        const popupOverlay = document.getElementById("popup_overlay");
        popupOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    
    function closePopup() {
        const popupOverlay = document.getElementById("popup_overlay");
        popupOverlay.style.display = "none";
        document.body.style.overflow = "auto";
    
        // Reset video src to stop playback when closing the popup
        const popupVideo = document.getElementById("popup_video");
        if (popupVideo) popupVideo.src = "";
    }
    
    
// Remaining code continues here, including window.onload and handlePopupContainers
window.onload = function () {
    console.log("Page loaded. Checking URL parameters...");
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("projectId");

    console.log("Project ID from URL:", projectId);

    if (projectId) {
        console.log("Project ID detected. Fetching project data...");

        Promise.all([
            fetchData("/api/mainprojects"),
            fetchData("/api/mapprojects"),
            fetchData("/api/futureprojects"),
        ])
            .then(([mainProjectData, mapProjectData, futureProjectData]) => {
                const futureProject = futureProjectData.find(
                    (project) => project.id === parseInt(projectId)
                );

                console.log("Future project data:", futureProject);

                if (futureProject) {
                    createPopup(futureProject, true);

                    if (history.pushState) {
                        const newUrl = window.location.origin + window.location.pathname;
                        history.pushState({}, document.title, newUrl);
                    }
                } else {
                    console.log("Project not found with the provided ID.");
                }
            })
            .catch((error) => {
                console.error("Error fetching project data:", error);
            });
    } else {
        console.log("No project ID in URL.");
    }
};
    
    
    
    
});




document.addEventListener("DOMContentLoaded", function () {
    const imagesTabButton = document.getElementById("images_tab_button");
    const videoTabButton = document.getElementById("video_tab_button");
    const imagesTab = document.getElementById("images_tab");
    const videoTab = document.getElementById("video_tab");
    const popupVideo = document.getElementById("popup_video");

    const placeholderVideoUrl = "https://www.youtube.com/embed/H_ReGaTJ92s?si=F7ZSyz1kUfDl8Sp1"; // Replace with your placeholder video UR
    function switchToImagesTab() {
        console.log("Images tab clicked");
        imagesTab.style.display = "flex";
        videoTab.style.display = "none";
        imagesTabButton.classList.add("active-tab");
        videoTabButton.classList.remove("active-tab");
    }

    function switchToVideoTab() {
        console.log("Video tab clicked");
        imagesTab.style.display = "none";
        videoTab.style.display = "flex";
        imagesTabButton.classList.remove("active-tab");
        videoTabButton.classList.add("active-tab");

        // Use placeholder video URL
        popupVideo.src = placeholderVideoUrl;
    }

    // Event listeners for tab buttons
    imagesTabButton.addEventListener("click", () => {
        switchToImagesTab();
    });

    videoTabButton.addEventListener("click", () => {
        switchToVideoTab();
    });

    // Reset tabs to default state when opening the popup
    function resetTabs() {
        console.log("Resetting tabs to default state");
        switchToImagesTab();
        popupVideo.src = ""; // Clear the video URL when switching tabs
    }

    // Example: Call resetTabs when the popup opens
    function openPopup() {
        const popupOverlay = document.getElementById("popup_overlay");
        popupOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";

        resetTabs(); // Reset tabs to their default state
    }
});


