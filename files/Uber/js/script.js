window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_ul'),
    menuItem = document.querySelectorAll('.nav_li'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_ul_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_ul_active');
        })
    })
})