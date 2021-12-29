window.addEventListener('DOMContentLoaded', function () {
  const tabs = require('./modules/tabs'),
    timer = require('./modules/timer'),
    modal = require('./modules/modal'),
    card = require('./modules/card'),
    form = require('./modules/form'),
    slider = require('./modules/slider'),
    calculator = require('./modules/calculator');

  tabs();
  timer();
  modal();
  card();
  form();
  slider();
  calculator();
});