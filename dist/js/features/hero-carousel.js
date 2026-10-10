/*
  Carrossel do Hero
  Troca as fotos lentamente e permite navegação manual.
*/
(function () {
  'use strict';

  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  const dots = Array.from(document.querySelectorAll('.hero-dot'));
  const current = document.getElementById('heroCurrent');

  if (!slides.length) return;

  let indice = 0;
  let timer;

  function mostrar(n) {
    indice = (n + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === indice);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === indice);
    });

    if (current) {
      current.textContent = String(indice + 1).padStart(2, '0');
    }
  }

  function iniciar() {
    clearInterval(timer);
    timer = setInterval(() => mostrar(indice + 1), 6500);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      mostrar(i);
      iniciar();
    });
  });

  mostrar(0);
  iniciar();
})();
