import * as flsFunction from "./modules/functions.js";
flsFunction.isWebp();
(function() {
    'use strict';
   
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          upArroy = document.querySelector('.up'),
          liMenu = document.querySelectorAll('.menu__link'),
          targetMenu = document.querySelectorAll('.menu__target');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
    });
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Backquote' && !menu.classList.contains('menu_active')){
            menu.classList.add('menu_active');
            hamburger.classList.add('hamburger_active');
        }
    });
    function closeMenuList (){
        menu.addEventListener('click', (e) => {
            if (e.target === menu){
                menu.classList.remove('menu_active');
                hamburger.classList.remove('hamburger_active');
            }
        });
        document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape' && menu.classList.contains('menu_active')){
                menu.classList.remove('menu_active');
                hamburger.classList.remove('hamburger_active');
            }
        });
    }
    document.addEventListener('scroll', function () {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 800){
            upArroy.classList.remove('hidden');
        } else {
            upArroy.classList.add('hidden');
        }
    });
    upArroy.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    liMenu.forEach((item, i) =>{
        item.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.remove('menu_active');
            hamburger.classList.remove('hamburger_active');
            const val = targetMenu[i].getBoundingClientRect();
            window.scrollBy({
                top: val.top - 50,
                behavior: "smooth"
            });

        });
    });
    closeMenuList();
  })();




