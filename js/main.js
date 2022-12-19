


const singInBtn = document.querySelector('.signin-btn');
const singUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.block-form');


singUpBtn.addEventListener('click', function () {
  formBox.classList.add('active');
})

singInBtn.addEventListener('click', function () {
  formBox.classList.remove('active');
})



const btnOpen = document.querySelector('.login-open');
const blockConteiner = document.querySelector('.conteiner-login');
const bac = document.querySelector('.bagr');
const scroll = calcScroll();



btnOpen.addEventListener('click', function () {

  blockConteiner.style.display = "block";
  bac.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${scroll}px`;


})

bac.addEventListener('click', (e) => {
  if (e.target === bac) {
    blockConteiner.style.display = "none";
    bac.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`

  }
})

function calcScroll() {
  let div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}



const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    320: {
      slidesPerView: 1,
    },
    850: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    }
  }
});

var swiperTwo = new Swiper(".myNewSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-two-pagination",
    clickable: true,
  },
});

var swiperThree = new Swiper(".myThreeSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-three-pagination",
    clickable: true,
  },
});

const imgOpen = document.querySelector('.message-btn-border__img-open');
const imgClose = document.querySelector('.message-btn-border__img-close');
const formMessange = document.querySelector('.form-message')
const btnMessange = document.querySelector('.message-btn');

btnMessange.addEventListener('click', function (){
  formMessange.classList.toggle('visit');
})

btnMessange.addEventListener('click', function (){
  imgOpen.classList.toggle('lop');
  imgClose.classList.toggle('pol');
})


const smoothLinks = document.querySelectorAll('a[href*="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



const btnMenuOpen = document.querySelector('.social-btn__menu-click--img-open');
const btnMenuClose = document.querySelector('.social-btn__menu-click--img-close');
const btnMenu = document.querySelector('.social-btn__menu');
const btnSoc = document.querySelector('.social-btn-list--media');

btnMenu.addEventListener('click', function (){
  btnMenuOpen.classList.toggle('triger');
  btnMenuClose.classList.toggle('triger');
  btnSoc.classList.toggle('open');
})


const iconMenu = document.querySelector('.icon-menu');
const burgerMenu = document.querySelector('.nav-box');
const contentMenu = document.querySelector('.nav');

iconMenu.addEventListener('click', function(){
  iconMenu.classList.toggle('black');
  burgerMenu.classList.toggle('open-burger');
})

contentMenu.addEventListener('click', function(){
  burgerMenu.classList.remove('open-burger');
  iconMenu.classList.remove('black');
})

const contactBtnEmail = document.querySelector('contact-ifo-email__img--style');
const modulEmail = document.querySelector('contact-ifo-email__text');
const contactBtnPhone = document.querySelector('contact-info-phone');
const modulPhone = document.querySelector('contact-ifo-phone__text');
const contactBtnAddress = document.querySelector('contact-info-address');
const modulAddress = document.querySelector('contact-ifo-address__text');

contactBtnEmail.addEventListener('click', function (){
  modulEmail.classList.toggle('contact_activ');
})

