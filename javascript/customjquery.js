$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    lazyLoad: true,
  });
  $(".owl-carousell").owlCarousel({
    loop: true,
    autoplay: false,
    margin: 0,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    items: 5,
    lazyLoad: true,
  });
});
