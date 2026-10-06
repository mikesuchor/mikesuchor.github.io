$(document).ready(function () {
  $('.projects__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    // slick 1.8.1's touch handler can block vertical page scrolling when a
    // gesture starts on the slider; switch projects with the dots instead
    swipe: false
  });
});
