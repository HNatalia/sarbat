(() => {
  const loaded = () => {
    const body = document.querySelector('body');
    const loader = document.querySelector('.loader-container');
    const page = document.querySelector('.page');

    setTimeout(() => {
      page.classList.add('fadeIn');
      loader.style.display = 'none';
      body.style.overflow = 'overlay';
    }, 2700)
  }

  const toggle = () => { 
    const menuList = document.querySelector('.menu-list');
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.line');
    const li = menuList.querySelectorAll('li');

    menu.addEventListener('click', () => {
      if (hamburger.classList.contains('close')) {
        hamburger.classList.remove('close');
        menuList.classList.remove('open');
      } else {
        hamburger.classList.add('close');
        menuList.classList.add('open');
      }
    });

    li.forEach(el => {
      el.addEventListener('click', () => {
        hamburger.classList.remove('close');
        menuList.classList.remove('open');
      });
    });
  }

  const fadeIn = selector => {
    const container = document.querySelector(selector);
    const size = container.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight;

    if (scrollPosition > size) {
      container.classList.add('fadeIn');
    }
  }

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

  const portfolio = () => {
    const picture = document.querySelectorAll('#portfolio .picture');
    const moreBtn = document.querySelector('#portfolio .more');
    const addedGrid = document.querySelector('#portfolio .addedGrid');
    const title = document.querySelectorAll('#portfolio h4');
    const info = document.querySelectorAll('#portfolio a');
    const projectModal = document.querySelector('#modal-project .modal');
    const closeBtn = projectModal.querySelector('.close-btn');
    const projectImg = projectModal.querySelector('img');
    const projectTitle = projectModal.querySelector('h2');
    
    fetch ('https://api.unsplash.com/collections/1270212/photos/?client_id=3g46TwjtuNPducXJTv7jO5BDjzNALqBZANYCMLQ4-Dc') 
    .then(request => request.json())
    .then(data => {
      picture.forEach((el, index)=> {
        el.style.backgroundImage = `url(${data[index].urls.small})`;
      });

      title.forEach((el, index) => {
        el.textContent = `${data[index].user.name}`;
      });

      let titleArr = [];
      let imgArr = [];
      
      for (let i = 0; i < data.length; i++) {
        titleArr.push(data[i].user.name);
        imgArr.push(data[i].urls.small);
      }

      info.forEach((el, index) => {
        el.addEventListener('click', e => {
          e.preventDefault();

          projectModal.classList.add('open');

          projectImg.src = imgArr[index];
          projectTitle.textContent = titleArr[index];

          closeBtn.addEventListener('click', () => {
            projectModal.classList.remove('open');
          });
        });
      });

    });

    moreBtn.addEventListener('click', () => {
      moreBtn.style.display = 'none';

      fetch ('https://api.unsplash.com/collections/1270212/photos/?page=2;client_id=3g46TwjtuNPducXJTv7jO5BDjzNALqBZANYCMLQ4-Dc') 
      .then(request => request.json())
      .then(data => {
        console.log(data)
        addedGrid.style.display = 'grid';

        for (let i = 0; i < 10; i++) {
          let divPictures = document.createElement('div');
          divPictures.classList.add('addedPicture');

          divPictures.innerHTML = `
            <div class="hover">
              <h4></h4>
              <a href="">view more</a>
            </div>
          `;

          addedGrid.appendChild(divPictures);
        }

        const addedPicture = document.querySelectorAll('#portfolio .addedPicture');
        const addedTitle = addedGrid.querySelectorAll('.addedPicture h4');
        const info = addedGrid.querySelectorAll('.addedPicture a');
        
        addedPicture.forEach((el, index) => {
          el.style.backgroundImage = `url(${data[index].urls.small})`
        });

        addedTitle.forEach((el, index) => {
          el.textContent = `${data[index].user.name}`;
        });

        let titleArr = [];
        let imgArr = [];
        
        for (let i = 0; i < data.length; i++) {
          titleArr.push(data[i].user.name);
          imgArr.push(data[i].urls.small);
        }

        info.forEach((el, index) => {
          el.addEventListener('click', e => {
            e.preventDefault();

            projectModal.classList.add('open');

            projectImg.src = imgArr[index];
            projectTitle.textContent = titleArr[index];

            closeBtn.addEventListener('click', () => {
              projectModal.classList.remove('open');
            });
          });
        });
      });
    });
  }


  // acsess key: 3g46TwjtuNPducXJTv7jO5BDjzNALqBZANYCMLQ4-Dc
  // secret key: ZrAJBWAROl_E9BvTrcIBAoRU5A4YvK0q-QA4CgcF7oI

  document.addEventListener('DOMContentLoaded', () => {
    loaded();
    toggle();
    portfolio();
    carousel();

    window.addEventListener('scroll', () => {
      fadeIn('#services .grid');
      fadeIn('#process .wrapper');
      fadeIn('#prices .cards-wrapper');
      fadeIn('#skills .wrapper');
    })
  })
})();