(() => {
  const body = document.querySelector('body');
  const loader = document.querySelector('.loader-container');
  const page = document.querySelector('.page');

  const loaded = () => {
    setTimeout(() => {
      page.classList.add('fadeIn');
      loader.style.display = 'none';
      body.style.overflow = 'overlay';
    }, 2700)
  }

  const menuList = document.querySelector('.menu-list');
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.line');

  const toggle = () => { 
    menu.addEventListener('click', () => {
      if (hamburger.classList.contains('close')) {
        hamburger.classList.remove('close');
        menuList.classList.remove('open');
      } else {
        hamburger.classList.add('close');
        menuList.classList.add('open');
      }
    });
  }

  const fadeIn = selector => {
    const container = document.querySelector(selector);
    const size = container.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight * 0.5;

    if (scrollPosition > size) {
      container.classList.add('fadeIn');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    loaded();
    toggle();

    window.addEventListener('scroll', () => {
      fadeIn('.grid');
      fadeIn('.wrapper')
    })
  })
})();