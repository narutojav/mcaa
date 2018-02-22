var swiper = new Swiper('#slider .swiper-container', {
  slidesPerView: 1,

  loop: true,
  speed: 2000,
  // autoplay: {
  //   delay: 6000,
  //
  //   disableOnInteraction: false,
  // },

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


$("#collapse-btn").click(function() {
  $("#header .navmain").addClass("selected");
  $("body").addClass("overflow-hide");
  $(".overplay").css('display','block');
  $( ".overplay" ).blur();

});
$(".overplay").click(function() {
  $("#header .navmain").removeClass("selected");
  $("body").removeClass("overflow-hide");
  $(".overplay").toggle();

});
