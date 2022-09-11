const mobileIconMenu = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.navegation__mobile');

const itemVideos = document.querySelector('#uno');
const itemFotos = document.querySelector('#dos');
const itemPrecios = document.querySelector('#tres');
const itemContactos = document.querySelector('#cuatro');


mobileIconMenu.addEventListener('click', toggleMobileMenu);
itemVideos.addEventListener('click', closeMenuMobile);
itemFotos.addEventListener('click', closeMenuMobile);
itemPrecios.addEventListener('click', closeMenuMobile);
itemContactos.addEventListener('click', closeMenuMobile);

function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive');
    console.log("siii");
 }
 
 function closeMenuMobile() {
    menuMobile.classList.add('inactive');
 }