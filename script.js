const menuBar = document.querySelector(".fa-menu");
const menu = document.querySelector(".menu");

menuBar.addEventListener("click", function (event) {
  menu.classList.toggle("menu-active");
});
