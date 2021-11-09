/*=============================================abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
}

/*========================================== quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  });
}

/*======================================== coloca uma pequena sombra no header quando der scroll na página */
const header = document.querySelector('#header'); //pega o header
const navHeight = header.offsetHeight; //vê a altura do header pra quando ele rolar + do que a altura

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll');
  } else {
    // menor que a altura do header
    header.classList.remove('scroll');
  }
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  hide: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]'); // pega todas as sections que contenham id
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4; // pega o deslocamento Y da janela + todo tamanho da window e divide por 8 pedaços vezes 4

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

/* When Scroll */

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '40px', // distancia que o item percorre de cima pra baixo (efeito)
  duration: 600, //duração em milisegundos (aconselhado no máximo 800 pro site não ficar com cara de "lento")
  reset: true, //quando der scroll até o fim, quando subir ele continua fazendo o efeito
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #products header, #products .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text,.swiper-slide, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 },
);
