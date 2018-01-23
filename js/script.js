var swiper = new Swiper('#slider .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.s-right',
    prevEl: '.s-left',
  },
});
var topswiper = new Swiper('#top .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '#top .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#top .s-right',
    prevEl: '#top .s-left',
  },
});

var videoswiper = new Swiper('#video .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '#top .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#top .s-right',
    prevEl: '#top .s-left',
  },
});
