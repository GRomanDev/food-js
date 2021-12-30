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

    tabs();
    timer();
    modal('[data-modal]', '.modal', modalTimerId);
    card();
    form('form', modalTimerId);
    slider();
    calculator();
  });