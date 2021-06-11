// const navMenu = document.getElementById("nav-menu"),
//   toggleMenu = document.getElementById("nav-toggle"),
//   closeMenu = document.getElementById("nav-close");

// // show navbar(mobile)
// toggleMenu.addEventListener("click", () => {
//   navMenu.classList.toggle("navbar-show-menu");
// });

// // close navbar(mobile)
// closeMenu.addEventListener("click", () => {
//   navMenu.classList.remove("navbar-show-menu");
// });

// navbar links active
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navLink.forEach((n) => n.classList.remove("navbar-link-active"));
  this.classList.add("navbar-link-active");
  navMenu.classList.remove("navbar-show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
