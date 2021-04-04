(() => {
  const menuList = document.querySelector('.menu-list');
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.line');

  menu.addEventListener('click', () => {
    if (hamburger.classList.contains('close')) {
      hamburger.classList.remove('close');
      menuList.classList.remove('open');
    } else {
      hamburger.classList.add('close');
      menuList.classList.add('open');
    }
  })
})();