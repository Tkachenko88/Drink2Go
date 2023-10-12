/* в этот файл добавляет скрипты*/
//mobile menu
let header = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
let navList = document.querySelector(".site-list");

// header.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  navList.classList.toggle("site-list--closed");
});

//hero-slider
var left = document.querySelector('.hero-slider__button--previous');
var right = document.querySelector('.hero-slider__button--next');
var viewport = document.querySelector('.hero-card');

left.addEventListener('click', function() {

});
right.addEventListener('click', function() {

});
