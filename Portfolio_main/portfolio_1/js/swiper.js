/* first-slide area */
var swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  observer: true,
  observeParents: true,
});

$(".stopbtn a img").on('click', function() {
  swiper.autoplay.stop();
  $(this).css("display", "none");
  $(".startbtn a img").css("display", "block");
  return false;
});

$(".startbtn a img").on('click', function() {
  swiper.autoplay.start();
  $(this).css("display", "none");
  $(".stopbtn a img").css("display", "block");
  return false;
});

/* second-slide area */
var secondswiper = new Swiper(".second-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".second-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".second-button-next",
    prevEl: ".second-button-prev",
  },
  observer: true,
  observeParents: true,
});
