const hamMenu = document.querySelector('hamburger-menu');
const sideBar = document.querySelector('.side-bar');

hamMenu.addEventListener('click', () => {
    hamMenu.classlist.toggle('active');
    sideBar.classList.toggle('active');
});