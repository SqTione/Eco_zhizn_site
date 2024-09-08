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

    // Floating navigation menu
    const navMenu = document.querySelector('.floating-nav-menu');
    const mediaQuery = window.matchMedia('(min-width: 1025px)');

    function handleMediaQueryChange(event) {
        if (event.matches) {
            navMenu.classList.remove('hidden');
        } else {
            navMenu.classList.add('hidden');
        }
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    handleMediaQueryChange(mediaQuery);

    const sections = document.querySelectorAll('.is-in-floating-nav'); // Секции для навигации
    const navItems = document.querySelectorAll('.floating-nav__item');
    const indicator = document.createElement('div');

    indicator.classList.add('floating-nav-menu__indicator');
    navMenu.querySelector('ul').appendChild(indicator);

    const mainScreen = document.querySelector('#main-screen');
    const partnersSection = document.querySelector('#partners-section');

    const observerOptions = {
        root: null,
        threshold: 0.5,
    };

    const mainScreenObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navMenu.classList.add('floating-nav-menu--visible');
            } else {
                navMenu.classList.remove('floating-nav-menu--visible');
            }
        });
    }, observerOptions);

    mainScreenObserver.observe(mainScreen);

    const partnersSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navMenu.classList.add('floating-nav-menu--visible');
            } else {
                navMenu.classList.remove('floating-nav-menu--visible');
            }
        });
    }, observerOptions);

    partnersSectionObserver.observe(partnersSection);

    navItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            sections[index].scrollIntoView({ behavior: 'smooth' });

            localStorage.setItem('activeSectionIndex', index);

            setActiveNavItem(item);
            moveIndicator(item);
        });
    });

    function highlightSection() {
        let scrollPos = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                setActiveNavItem(navItems[index]);
                moveIndicator(navItems[index]);

                localStorage.setItem('activeSectionIndex', index);
            }
        });
    }

    function setActiveNavItem(activeItem) {
        navItems.forEach(item => item.classList.remove('floating-nav__item--active'));
        activeItem.classList.add('floating-nav__item--active');
    }

    function moveIndicator(activeItem) {
        indicator.style.transform = `translateX(${activeItem.offsetLeft}px)`;
        indicator.style.width = `${activeItem.offsetWidth}px`;
    }

    window.addEventListener('load', () => {
        const activeItem = document.querySelector('.floating-nav__item--active');
        if (activeItem) {
            moveIndicator(activeItem);
        }
    });

    window.addEventListener('scroll', highlightSection);

    highlightSection();
})