let closeNavbar = document.querySelector('.close-navbar');
let bars = document.querySelector('.fa-bars');
let menuMobile = document.querySelector('.menu-mobile');
let toggleMenu = document.querySelector('.toggle-menu');

// show side-bar 
toggleMenu.addEventListener('click',()=>{
  closeNavbar.classList.toggle('active') 
  bars.classList.toggle('active')
  menuMobile.classList.toggle('show')
});


