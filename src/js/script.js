import * as flsFunction from "./modules/functions.js";
flsFunction.isWebp();
(function() {
    'use strict';
   
    

    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
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
    closeMenuList();
  })();




