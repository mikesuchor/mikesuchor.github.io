$(document).ready(() => {
  const aboutMosaic = $('.about__mosaic');

  const aboutMosaicObserver = new IntersectionObserver((entry) => {
    if (entry[0].intersectionRatio > 0) {
      aboutMosaic.children().addClass('animated');
    } else {
      aboutMosaic.children().removeClass('animated');
    }
  });

  aboutMosaicObserver.observe(aboutMosaic[0]);

  // Projects: the index on the left picks which project fills the stage
  const projects = document.querySelector('.projects');
  const tabs = [...document.querySelectorAll('.projects__tab')];
  const panels = tabs.map((tab) =>
    document.getElementById(tab.getAttribute('aria-controls'))
  );

  const select = (index, focus) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.classList.toggle('is-active', on);
      tab.setAttribute('aria-selected', on);
      tab.tabIndex = on ? 0 : -1;
      panels[i].classList.toggle('is-active', on);
    });
    if (focus) tabs[index].focus();
    // keep the picked tab visible in the scrolling row on phones
    tabs[index].scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (e) => {
      const keys = {
        ArrowDown: i + 1,
        ArrowRight: i + 1,
        ArrowUp: i - 1,
        ArrowLeft: i - 1,
        Home: 0,
        End: tabs.length - 1,
      };
      if (!(e.key in keys)) return;
      e.preventDefault();
      select((keys[e.key] + tabs.length) % tabs.length, true);
    });
  });

  // play the entrance each time the section scrolls into view
  new IntersectionObserver((entry) => {
    projects.classList.toggle('in-view', entry[0].isIntersecting);
  }).observe(projects);
});
