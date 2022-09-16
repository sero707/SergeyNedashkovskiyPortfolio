import * as flsFunction from "./modules/functions.js";
flsFunction.isWebp();

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
})

