/** @format */

//Close and open sidebars
const sideBarNav = document.querySelector(".sidebar");
const toggleMenu = document.querySelector(".fa-bars");

const searchBarNav = document.querySelector(".search-bar");
const searchMenu = document.querySelector(".fa-magnifying-glass");

function closeSidebar(sidebar, icon) {
  icon.addEventListener("click", () => {
    const visibilityNav = sidebar.getAttribute("data-visible");

    if (visibilityNav === "false") {
      sidebar.setAttribute("data-visible", true);
    } else if (visibilityNav === "true") {
      sidebar.setAttribute("data-visible", false);
    }
  });
}

closeSidebar(sideBarNav, toggleMenu);

closeSidebar(searchBarNav, searchMenu);

//Shrinking and Expanding navigation bar on scroll
const mastHead = document.querySelector(".masthead").style;
const logoImg = document.querySelector(".logo-img").style;
const hiddenNav = document.querySelector(".scroll-hidden-nav").style;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    (screen.width > 600 && document.body.scrollTop > 50) ||
    document.documentElement.scrollTop > 50
  ) {
    mastHead.height = "5em";
    mastHead.transition = "350ms";
    logoImg.transition = "350ms";
    logoImg.width = "25rem";
    hiddenNav.display = "none";
  } else if (screen.width > 600) {
    mastHead.height = "10em";
    logoImg.width = "40rem";
    hiddenNav.display = "flex";
  }
}
