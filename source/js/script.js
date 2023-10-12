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
const prev = document.querySelector('.hero-slider__button--previous');
const next = document.querySelector('.hero-slider__button--next');
const cards = document.querySelectorAll('.hero-card');
const maxCount = cards.length-1;
let currentSlide = 0;

const setActiveCard = (index) => {
  cards.forEach((card) => card.classList.remove('hero-card--active'));
  cards[index].classList.add('hero-card--active');
}

prev.setAttribute('disabled', '')

prev.addEventListener('click', function () {
  if (currentSlide === 0) {
    return
  }
  currentSlide = currentSlide - 1;
  if (currentSlide === 0) {
    prev.setAttribute('disabled', '')
  }
  if (currentSlide !== maxCount) {
    next.removeAttribute('disabled')
  }
  setActiveCard(currentSlide);

});


next.addEventListener('click', function () {
  if (currentSlide === maxCount) {
    return
  }
  console.log(currentSlide)
  currentSlide = currentSlide + 1;
  if (currentSlide === maxCount) {
    next.setAttribute('disabled', '')
  }
  if (currentSlide !== 0) {
    prev.removeAttribute('disabled')
  }
  setActiveCard(currentSlide);
});

//range slider
var slider = document.querySelector('.range-bar');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
