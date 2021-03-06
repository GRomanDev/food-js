  import tabs from './modules/tabs';
  import timer from './modules/timer';
  import modal from './modules/modal';
  import card from './modules/card';
  import form from './modules/form';
  import slider from './modules/slider';
  import calculator from './modules/calculator';
  import {
    openModal
  } from './modules/modal';

  window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-01-21 00:00');
    modal('[data-modal]', '.modal', modalTimerId);
    card();
    form('form', modalTimerId);
    slider({
      container: '.offer__slider',
      slide: '.offer__slide',
      prevArrow: '.offer__slider-prev',
      nextArrow: '.offer__slider-next',
      totalCounter: '#total',
      curentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner'
    });
    calculator();
  });