const hamMenu = document.querySelector(".hamburger-menu");
const sideBar = document.querySelector(".side-bar");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  sideBar.classList.toggle("active");
});
