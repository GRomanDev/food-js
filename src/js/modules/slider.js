function slider({
  container,
  slide,
  prevArrow,
  nextArrow,
  totalCounter,
  curentCounter,
  wrapper,
  field
}) {
  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(curentCounter),
    slidesWrapper = document.querySelector(wrapper),
    width = window.getComputedStyle(slidesWrapper).width,
    slidesField = document.querySelector(field);

  let slideIndex = 1,
    offset = 0;

  setFraction(current, slideIndex);
  setFraction(total, slides.length);

  slidesField.style.display = 'flex';
  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.transition = '.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => {
    slide.style.width = width;
  });

  slider.style.position = 'relative';

  const indicators = document.createElement('ol'),
    dots = [];
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  function deleteNotDigit(str) {
    return +str.replace(/\D/g, '');
  }

  function setFraction(frac, content) {
    if (slides.length < 10) {
      frac.textContent = `0${content}`;
    } else {
      frac.textContent = content;
    }
  }

  function setDotsStyle() {
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = '1';
  }

  next.addEventListener('click', () => {
    if (offset == (deleteNotDigit(width) * (slides.length - 1))) {
      offset = 0;
    } else {
      offset += deleteNotDigit(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    setFraction(current, slideIndex);

    setDotsStyle();
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = (deleteNotDigit(width) * (slides.length - 1));
    } else {
      offset -= deleteNotDigit(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    setFraction(current, slideIndex);

    setDotsStyle();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = deleteNotDigit(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      setFraction(current, slideIndex);

      setDotsStyle();
    });
  });


  // showSlides(slideIndex);

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // }

  // function showSlides(n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach((item) => item.style.display = 'none');

  //   slides[slideIndex - 1].style.display = 'block';

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = `${slideIndex}`;
  //   }
  // }

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // prev.addEventListener('click', function () {
  //   plusSlides(-1);
  // });

  // next.addEventListener('click', function () {
  //   plusSlides(1);
  // });

}

export default slider;