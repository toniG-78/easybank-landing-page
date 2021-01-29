console.log("hello");

const hamburger = document.querySelector(".header__hamburger-container");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".header__mobile-menu");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    hamburger.classList.add("open");
    overlay.classList.remove("fadeOut");
    overlay.classList.add("fadeIn");
    //mobileMenu.style.display = "block";
    mobileMenu.classList.add("fadeIn");
    mobileMenu.classList.remove("fadeOut");
    menuOpen = true;
  } else {
    hamburger.classList.remove("open");
    overlay.classList.remove("fadeIn");
    overlay.classList.add("fadeOut");
    mobileMenu.classList.remove("fadeIn");
    mobileMenu.classList.add("fadeOut");
    //mobileMenu.style.display = "none";
    menuOpen = false;
  }
});

const mediaQuery = window.matchMedia("(min-width: 1024px)");
function handleTabletChange(e) {
  if (e.matches) {
    hamburger.classList.remove("open");
    overlay.classList.remove("fadeIn");
    //mobileMenu.style.display = "none";
    mobileMenu.classList.remove("fadeIn");
    menuOpen = false;
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
