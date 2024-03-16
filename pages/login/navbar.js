// for disappearing and appeaaring animations
let menuHamburger = document.querySelector('.menu-hamburger');
let navLinks = document.querySelector('.nav-links');
    menuHamburger.addEventListener('click',()=>{
      navLinks.classList.toggle('mobile-menu');
    })
  
    const bg_menu = document.querySelectorAll(".disappear");
  
  menuHamburger.addEventListener('click', () => {
    bg_menu.forEach(element => {
      element.classList.toggle('hide');
      element.classList.toggle('appear');
    });
  });
