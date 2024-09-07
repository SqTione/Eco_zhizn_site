document.addEventListener("DOMContentLoaded", () => {
    // Toggle sidebar handler
    const sidebarButton = document.querySelectorAll(".sidebar__button");
    const sidebar = document.querySelector("#sidebar");

    sidebarButton.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            btn.classList.toggle("sidebar__button--active");
            sidebar.classList.toggle("sidebar--active");
        })
    })
})