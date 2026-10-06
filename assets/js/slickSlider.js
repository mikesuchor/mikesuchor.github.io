$(document).ready(function () {
  $('.projects__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    // slick 1.8.1's touch handler can block vertical page scrolling when a
    // gesture starts on the slider; switch projects with the dots instead
    swipe: false,
    responsive: [
      // tablet portrait: slides differ in height, and resizing per slide
      // stretches the section's background frame, so keep a fixed height
      { breakpoint: 961, settings: { adaptiveHeight: false } },
      // phones hide the frame, so resizing per slide is fine there
      { breakpoint: 601, settings: { adaptiveHeight: true } }
    ]
  });
});
