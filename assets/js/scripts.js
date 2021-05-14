$(document).ready(() => {
  centerHeroText();

  const aboutMosaic = $('.about__mosaic');
  const projectsImages = $('.project__right__half');

  const aboutMosaicObserver = new IntersectionObserver((entry) => {
    console.log(entry[0].intersectionRatio);
    if (entry[0].intersectionRatio > 0) {
      aboutMosaic.children().addClass('animated');
    } else {
      aboutMosaic.children().removeClass('animated');
    }
  });

  const projectsSliderObserver = new IntersectionObserver((entry) => {
    if (entry[0].intersectionRatio > 0) {
      projectsImages.children().addClass('animated');
    } else {
      projectsImages.children().removeClass('animated');
    }
  });

  aboutMosaicObserver.observe(aboutMosaic[0]);
  projectsSliderObserver.observe(projectsImages[0]);
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
