/* в этот файл добавляет скрипты*/
let header = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
let navList = document.querySelector(".site-list");

// header.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  navList.classList.toggle("site-list--closed");
});
