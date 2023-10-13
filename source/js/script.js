/* в этот файл добавляет скрипты*/

//mobile menu
let header = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
let navList = document.querySelector(".site-list");

navToggle.addEventListener("click", function () {
  navList.classList.toggle("site-list--closed");
  navToggle.classList.toggle("main-nav__toggle--closed")
});




//hero-slider
const prev = document.querySelector('.hero-slider__button--previous');
const next = document.querySelector('.hero-slider__button--next');
const cards = document.querySelectorAll('.hero-card');
const buttons = document.querySelectorAll('.button-slider');
const maxCount = cards.length-1;
let currentSlide = 0;

const setActiveCard = (index) => {
  cards.forEach((card) => card.classList.remove('hero-card--active'));
  cards[index].classList.add('hero-card--active');
  buttons.forEach((button) => button.classList.remove('button-slider--active'));
  buttons[index].classList.add('button-slider--active');
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

buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    currentSlide = index
    setActiveCard(currentSlide)
  })
})


const slider = document.querySelector('.range');
const inputMin = document.querySelector('.input-range--min');
const inputMax = document.querySelector('.input-range--max');
const inputs = [inputMin, inputMax];

noUiSlider.create(slider, {
    start: [0, 900],
  connect: true,
  step: 1,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
    range: {
        'min': 0,
        'max': 1000
    }
});

slider.noUiSlider.on('update', (values, handle) => {
  inputs[handle].value=values[handle]
} )





