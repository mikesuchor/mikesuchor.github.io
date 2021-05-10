const heroImage = document.querySelector('.hero__image');

const tl = new TimelineMax();

tl.fromTo(heroImage, 1, { height: '0' }, { height: '1080px' });
