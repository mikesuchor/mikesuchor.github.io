$(document).ready(() => {
  if ($(window).width() > 1200) {
    const abouttrigger = document.querySelector('.abouttrigger');
    const aboutsection = document.querySelector('.about');
    const mosaicCenter = document.querySelector('.mosaic-center');
    const mosaic1 = document.querySelector('.mosaic1');
    const mosaic2 = document.querySelector('.mosaic2');
    const mosaic3 = document.querySelector('.mosaic3');
    const mosaic4 = document.querySelector('.mosaic4');
    const mosaic5 = document.querySelector('.mosaic5');
    const mosaic6 = document.querySelector('.mosaic6');
    const mosaic6_1 = document.querySelector('.mosaic6_1');
    const mosaic6_2 = document.querySelector('.mosaic6_2');
    const mosaic6_3 = document.querySelector('.mosaic6_3');

    // ScrollMagic
    const controller = new ScrollMagic.Controller();

    // About Scene
    let scene = new ScrollMagic.Scene({
      duration: 550,
      triggerElement: abouttrigger,
      triggerHook: 0
    })
      .setPin(aboutsection)
      .addTo(controller);

    // Center Animation
    const centerAnimation = TweenMax.fromTo(mosaicCenter, 3, { transform: 'scale(2)' }, { transform: 'scale(1)' });

    // Center Scene
    let centerScene = new ScrollMagic.Scene({
      duration: 300,
      triggerElement: abouttrigger,
      triggerHook: 0
    })
      .setTween(centerAnimation)
      .addTo(controller);

    // Mosaic1 Animation
    const mosaic1Animation = TweenMax.fromTo(
      mosaic1,
      3,
      { opacity: 0, transform: 'scale(1.5) translate(0, -100px)' },
      { opacity: 1, transform: 'scale(1) translate(0, 0)' }
    );

    // Mosaic1 Scene
    let mosaic1Scene = new ScrollMagic.Scene({
      duration: 400,
      triggerElement: abouttrigger,
      triggerHook: 0
    })
      .setTween(mosaic1Animation)
      .addTo(controller);

    // Mosaic2 Animation
    const mosaic2Animation = TweenMax.fromTo(
      mosaic2,
      3,
      { opacity: 0, transform: 'scale(1.5) translate(200px, -50px)' },
      { opacity: 1, transform: 'scale(1) translate(0, 0)' }
    );

    // Mosaic2 Scene
    let mosaic2Scene = new ScrollMagic.Scene({
      duration: 300,
      triggerElement: abouttrigger,
      triggerHook: 0
    })
      .setTween(mosaic2Animation)
      .addTo(controller);

    // Mosaic3 Animation
    const mosaic3Animation = TweenMax.fromTo(
      mosaic3,
      3,
      { opacity: 0, transform: 'scale(1.5) translate(-100px, -50px)' },
      { opacity: 1, transform: 'scale(1) translate(0, 0)' }
    );

    // Mosaic3 Scene
    let mosaic3Scene = new ScrollMagic.Scene({
      duration: 375,
      triggerElement: abouttrigger,
      triggerHook: 0
    })
      .setTween(mosaic3Animation)
      .addTo(controller);

    // Mosaic4 Animation
    const mosaic4Animation = TweenMax.fromTo(
      mosaic4,
      3,
      { opacity: 0, transform: 'scale(1.5) translate(-75px, 150px)' },
      { opacity: 1, transform: 'scale(1) translate(0, 0)' }
    );

    // Mosaic4 Scene
    let mosaic4Scene = new ScrollMagic.Scene({
      duration: 350,
      triggerElement: abouttrigger,
      triggerHook: 0
    })
      .setTween(mosaic4Animation)
      .addTo(controller);

    // Mosaic5 Animation
    const mosaic5Animation = TweenMax.fromTo(
      mosaic5,
      3,
      { opacity: 0, transform: 'scale(1.5) translate(0px, 150px' },
      { opacity: 1, transform: 'scale(1) translate(0, 0)' }
    );

    // Mosaic5Scene
    let mosaic5Scene = new ScrollMagic.Scene({
      duration: 425,
      triggerElement: abouttrigger,
      triggerHook: 0
    })
      .setTween(mosaic5Animation)
      .addTo(controller);

    // Mosaic6_1 Animation
    const mosaic6_1Animation = TweenMax.fromTo(
      mosaic6_1,
      3,
      { opacity: 0, transform: 'scale(1.5) translate(100px, 100px)' },
      { opacity: 1, transform: 'scale(1) translate(0, 0)' }
    );

    // Mosaic6_1 Scene
    let mosaic6_1Scene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: abouttrigger,
      triggerHook: 0
    })
      .setTween(mosaic6_1Animation)
      .addTo(controller);

    // Mosaic6_2 Animation
    const mosaic6_2Animation = TweenMax.fromTo(
      mosaic6_2,
      3,
      { opacity: 0, transform: 'scale(1.5) translate(120px, 80px)' },
      { opacity: 1, transform: 'scale(1) translate(0, 0)' }
    );

    // Mosaic6_2 Scene
    let mosaic6_2Scene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: abouttrigger,
      triggerHook: 0
    })
      .setTween(mosaic6_2Animation)
      .addTo(controller);

    // Mosaic6 Animation
    const mosaic6_3Animation = TweenMax.fromTo(
      mosaic6_3,
      3,
      { opacity: 0, transform: 'scale(1.5) translate(80px, 120px)' },
      { opacity: 1, transform: 'scale(1) translate(0, 0)' }
    );

    // Mosaic6_3 Scene
    let mosaic6_3Scene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: abouttrigger,
      triggerHook: 0
    })
      .setTween(mosaic6_3Animation)
      .addTo(controller);
  }
});
