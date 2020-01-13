

const debounce = function (func, wait, immediate) {
   let timeout;
   return function (...args) {
      const context = this;
      const later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args)
   };
};

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';

function animeScroll() {
   const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 5);
   target.forEach(function (element) {
      if ((windowTop) > element.offsetTop) {
         element.classList.add(animationClass);
      } else {
         element.classList.remove(animationClass)
      }
   })
}

animeScroll();

if (target.length) {
   window.addEventListener('scroll', debounce(function () {
      animeScroll();
   }, 200))
}

function iniciaModal(modalID) {
   const modal = document.getElementById(modalID)

   if (modal) {
      modal.classList.add('mostrar')
      modal.addEventListener('click', (e) => {
         if (e.target.id == modalID || e.target.className == 'fechar' || e.target.id == ('fechar')) {
            modal.classList.remove('mostrar')

         }

      });
   }
}
const logo = document.querySelector('#Cadastro-Restaurante');
logo.addEventListener('click', () => iniciaModal('Modal-Cadastro'))