$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
  });
  // $(".whatWeDoRight ul li").click(function () {
  //   $(this).addClass("active").siblings().removeClass("active");
  // });
});
$(".owl-carousel.detail_carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: true,
      loop: false,
    },
  },
});
