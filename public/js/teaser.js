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

