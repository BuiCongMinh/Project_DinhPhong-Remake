AOS.init();
let listImage = document.querySelector(".list-images");
let imgs = document.querySelectorAll(".slide-item");
let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");
let item1 = document.querySelector(".item-1");
let indexItems = document.querySelectorAll(".index-item");

// side-bar 
let rightNav = document.querySelector('#rightNav');
let toggleRightNav = document.querySelector('#toggle-rightNav');


let current = 0;
let length = imgs.length;

toggleRightNav.addEventListener('click', () => {
  rightNav.classList.toggle('hide-sidebar');
  toggleRightNav.classList.toggle('out');
})


// sector-6 
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  autoplaySpeed:1500,
  dotsSpeed:1500,
  navSpeed:1500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


