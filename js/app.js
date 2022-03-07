const menu = document.querySelector(".menu");
const openBtn = document.querySelector(".open");
const cerrarBtn = document.querySelector(".cerrar");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openBtn.addEventListener("click", toggleMenu);
cerrarBtn.addEventListener("click", toggleMenu);