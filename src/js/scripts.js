document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");

    // Toggle sidebar handler
    const sidebarButton = document.querySelectorAll(".sidebar__button");
    const sidebar = document.querySelector("#sidebar");

    sidebarButton.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            btn.classList.toggle("sidebar__button--active");
            sidebar.classList.toggle("sidebar--active");
            overlay.classList.toggle("overlay--active");
        })
    })

    // Smooth scroll handler
    const scrollButton = document.getElementById("scroll-button");
    const contentSection = document.getElementById("about");

    scrollButton.addEventListener("click", () => {
        contentSection.scrollIntoView({ behavior: "smooth" });
    });

    // "Become partner" button handler
    const becomePartnerBtn = document.getElementById("become-partner");
    const partnerPopup = document.querySelector(".partner-popup");
    const closePartnerPopupBtn = document.getElementById("close-partner-popup");

    becomePartnerBtn.addEventListener("click", () => {
        overlay.classList.add("overlay--active");
        partnerPopup.classList.add("partner-popup--active");
    })

    closePartnerPopupBtn.addEventListener("click", () => {
        overlay.classList.remove("overlay--active");
        partnerPopup.classList.remove("partner-popup--active");
    })
})