$(document).ready(function(event){
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});
 

/* let menu = document.querySelector('.header__burger');
let body = document.querySelector('body');
let headerMenu = document.querySelector('.header-menu');
let mobileMenu = document.querySelector('.header__burger');


menu.addEventListener('click', event => {
  event.preventDefault();
  menu.classList.toggle('_active');// замінила active на start+ в стилях
  headerMenu.classList.toggle('_active');
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('lock');
}); */