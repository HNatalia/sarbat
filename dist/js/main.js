(() => {
  const body = document.querySelector('body');
  console.log(body)
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

  document.addEventListener('DOMContentLoaded', () => {
    loaded();
    toggle();
  })
})();