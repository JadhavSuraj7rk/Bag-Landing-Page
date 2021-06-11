$(document).ready(function(){
  $('.ham-btn').click(function(){
    $('.nav-list').toggleClass("show");
    $('ul li').toggleClass("hide");
  });
});

// navbar links active
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navLink.forEach((n) => n.classList.remove("navbar-link-active"));
  this.classList.add("navbar-link-active");
  navMenu.classList.remove("navbar-show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
