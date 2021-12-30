function modal() {
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

  const showModalInterval = setTimeout(openModal, 40000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
}

export default modal;