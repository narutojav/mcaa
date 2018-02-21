var swiper = new Swiper('#slider .swiper-container', {
  slidesPerView: 1,

  loop: true,
  speed:2000,
  autoplay: {
         delay: 6000,

         disableOnInteraction: false,
       },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.s-right',
    prevEl: '.s-left',
  },

});
var topswiper = new Swiper('#partner .swiper-container', {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  autoplay: 4000,
  speed: 800,
});
