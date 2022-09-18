
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (item) {
  item.addEventListener ('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function(item){
      item.classList.remove('tabs-nav__btn--active');
    });

    tabsItem.forEach(function(item){
      item.classList.remove('tabs-item--active');
    });

    currentBtn.classList.add('tabs-nav__btn--active');
    currentTab.classList.add('tabs-item--active');
  });
});

// tabsBtn.forEach(function (element) {
//   element.addEventListener('click', function (e) {
//     const path = e.currentTarget.dataset.path;

//     tabsBtn.forEach(function (btn) {
//       btn.classList.remove('tabs-nav__btn--active');
//     });
//     e.currentTarget.classList.add('tabs-nav__btn--active');

//     tabsItem.forEach(function (element) {
//       element.classList.remove('tabs-item--active');
//     });
//     document.querySelectorAll(`[data-target="${path}"]`).classList.add('tabs-item--active');
//   });
// });

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-menu__list');
let menuLink = menu.querySelectorAll('.nav-menu__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav-menu__list--active');
    document.body.toggle('stop-scroll');
  });

menuLink.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');
    menu.classList.remove('nav-menu__list--active');
    document.body.classList.remove('stop-scroll');

  });
});

let search = document.querySelector('.search')
let searchLink = document.querySelector('.search-on-site');
let searchClose = document.querySelector('.close-search');
let searchHidden = document.querySelector('.search__hidden');

searchLink.addEventListener('click', 
  function() {
    searchHidden.classList.add('search-on-site--active');
  });

  searchClose.addEventListener('click', 
  function () {
    searchHidden.classList.remove('search-on-site--active');
  });


document.addEventListener("DOMContentLoaded", function() {
    let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
    openOnInit: [0],
      collapse: false
  });
  })
