$(document).ready(() => {
  centerHeroText();

  const aboutTrigger = $('.abouttrigger').offset();
  const aboutMosaicImages = $('.about__mosaic');

  $(window).scroll(() => {
    if ($(window).scrollTop() >= aboutTrigger.top - 300) {
      aboutMosaicImages.children().addClass('animated');
    }
  });
});

$(window).resize(() => {
  centerHeroText();
});

// Center hero text by resizing grid container based on height of the overlay image
const centerHeroText = () => {
  const hero = $('.hero');
  const heroOverlay = $('.hero__overlay');
  const heroOverlayHeight = heroOverlay.css('height');

  hero.css('height', heroOverlayHeight);
};
