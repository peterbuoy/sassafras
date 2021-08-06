const navburger = document.querySelector(".navburger");
const navMenu = document.querySelector(".nav-menu");

const mobileMenu = () => {
  console.log("mobile toggled");
  navburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

navburger.addEventListener("click", mobileMenu);
