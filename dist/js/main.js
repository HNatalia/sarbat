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

  // const stroke = () => {
  //   const wrapper = document.querySelector('#skills .wrapper');
  //   const circle = document.querySelector('.progress-line');
  //   const scrollPosition = window.innerHeight * 0.5;

  //   if (scrollPosition > wrapper.getBoundingClientRect().top) {
  //     circle.style.strokeDashoffset = 'calc(400px - (400px * 70) / 100)';
  //   }
  // }

  const carousel = () => {
    const btnRight = document.querySelector('.btn-right');
    const btnLeft = document.querySelector('.btn-left');
    const pages = document.querySelectorAll('.review-page');
    const items = document.querySelector('.items');
    let index = 0;

    const switchPage = index => {
      items.style.transform = `translateX(-${100 * index}%)`;
    }

    btnRight.addEventListener('click', () => {
      if (index > pages.length - 2) {
        return;
      }

      switchPage(index + 1);
      index++;
    });

    btnLeft.addEventListener('click', () => {
      if (index === 0) {
        return;
      }

      switchPage(index - 1);
      index--;    
    });
  };

  fetch ('https://api.unsplash.com/photos/?client_id=3g46TwjtuNPducXJTv7jO5BDjzNALqBZANYCMLQ4-Dc') 
    .then(request => request.json())
    .then(data => console.log(data))

  // acsess key: 3g46TwjtuNPducXJTv7jO5BDjzNALqBZANYCMLQ4-Dc
  // secret key: ZrAJBWAROl_E9BvTrcIBAoRU5A4YvK0q-QA4CgcF7oI

  document.addEventListener('DOMContentLoaded', () => {
    loaded();
    toggle();
    carousel();
    // stroke();

    // const initProgress = () => {
    //   const ctx = document.getElementById('#progress').getContext('2d');
    //   const al = 0;
    //   const start = 4.72;
    //   const cw = ctx.canvas.width;
    //   const ch = ctx.canvas.height;
    //   let diff;

    //   const play = () => {
    //     diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
    //     ctx.clearRect(0, 0, cw, ch);
    //     ctx.lineWidth = '14';
    //     ctx.fillStroke = 'yellow';
    //     ctx.strokeStyle = 'red';
    //     ctx.beginPath();
    //     ctx.arc(35, 35, 30, start, diff/10+start, false);
    //     ctx.stroke();
    //   }

    //   play();
    // }

    // initProgress();

    window.addEventListener('scroll', () => {
      fadeIn('.grid');
      fadeIn('.wrapper');
      fadeIn('.cards-wrapper');
    })
  })
})();