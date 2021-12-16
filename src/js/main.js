window.addEventListener('DOMContentLoaded', function () {

  let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {

    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
      }

    );

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
      }

    );
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', function (e) {
      if (e.target && e.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (e.target == item) {
              hideTabContent();
              showTabContent(i);
            }
          }

        );
      }
    }

  );


  const deadline = '2021-12-13 00:00';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor((t / (1000 * 60 * 60 * 24))),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      minutes = Math.floor((t / (1000 * 60) % 60)),
      seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else if (num < 0) {
      return '0';
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
      days = document.querySelector('#days'),
      hours = document.querySelector('#hours'),
      minutes = document.querySelector('#minutes'),
      seconds = document.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);


  const modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('.modal__close'),
    modalBtns = document.querySelectorAll('[data-modal]');

  function openModal() {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    clearInterval(showModalInterval);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  modalBtns.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });

  modalCloseBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // const showModalInterval = setTimeout(openModal, 2000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);


  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 73.57;
      this.changeToRUB();
    }

    changeToRUB() {
      this.price = Math.round(this.price * this.transfer);
    }

    render() {
      const element = document.createElement('div');
      element.innerHTML = `
        <div class = "menu__item">
          <img src = ${this.src} alt = ${this.alt}>
          <h3 class = "menu__item-subtitle">${this.title}</h3> 
          <div class = "menu__item-descr"> ${this.descr}</div> 
        <div class = "menu__item-divider"> </div>
        <div class = "menu__item-price">
          <div class = "menu__item-cost" > Цена: </div> 
          <div class = "menu__item-total" > <span> ${this.price} </span> руб/день </div> 
          </div> 
        </div>
      `;
      this.parent.append(element);
    }
  }

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container"
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    10,
    ".menu .container"
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    12,
    ".menu .container"
  ).render();

});