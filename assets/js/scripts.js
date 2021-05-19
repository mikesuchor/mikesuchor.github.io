$(document).ready(() => {
  const aboutMosaic = $('.about__mosaic');
  const projectsImages = $('.project__right__column');

  const aboutMosaicObserver = new IntersectionObserver((entry) => {
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
