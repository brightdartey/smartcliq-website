const toggler = document.querySelector(".humburger");
const sideMenu = document.querySelector(".menu");
const navbar = document.querySelector(".nav-links");
const cta = document.querySelector("#nav-btn");

toggler.addEventListener("click", () => {
    toggler.classList.toggle("open");
    sideMenu.classList.toggle("close");
    cta.classList.toggle("close");
})