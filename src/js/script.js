import * as flsFunction from "./modules/functions.js";
flsFunction.isWebp();
(function() {
    'use strict';
   
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          upArroy = document.querySelector('.up'),
          liMenu = document.querySelectorAll('.menu__link'),
          targetMenu = document.querySelectorAll('.menu__target'),
          bodys = document.querySelector('.about-me');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
        bodys.classList.add('hidden');
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
                bodys.classList.remove('hidden');
            }
        });
        document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape' && menu.classList.contains('menu_active')){
                menu.classList.remove('menu_active');
                hamburger.classList.remove('hamburger_active');
                bodys.classList.remove('hidden');
            }
        });
    }
    document.addEventListener('scroll', function () {
        if(document.scrollingElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1200){
            upArroy.classList.remove('none');
        } else {
            upArroy.classList.add('none');
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
            bodys.classList.remove('hidden');
            const val = targetMenu[i].getBoundingClientRect();
            window.scrollBy({
                top: val.top - 50,
                behavior: "smooth"
            });

        });
    });
    closeMenuList();
        
  })();




