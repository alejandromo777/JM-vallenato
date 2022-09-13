const mobileIconMenu = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.navegation__mobile');

const itemHome = document.querySelector('#uno');
const itemVideos = document.querySelector('#dos');
const itemFotos = document.querySelector('#tres');
const itemPrecios = document.querySelector('#cuatro');
const itemContactos = document.querySelector('#cinco');

const verMasButton = document.querySelector('.images__ver-mas');
const verMenosButton = document.querySelector('.images__ver-menos');
const sectionDosFotos = document.querySelector('.images__parte-dos');


mobileIconMenu.addEventListener('click', toggleMobileMenu);
itemHome.addEventListener('click', closeMenuMobile)
itemVideos.addEventListener('click', closeMenuMobile);
itemFotos.addEventListener('click', closeMenuMobile);
itemPrecios.addEventListener('click', closeMenuMobile);
itemContactos.addEventListener('click', closeMenuMobile);
verMasButton.addEventListener('click', openFotsDos);
verMenosButton.addEventListener('click', closeFotosDos);

function toggleMobileMenu() {
   menuMobile.classList.toggle('inactive');
   console.log("siii");
}
 
function closeMenuMobile() {
   menuMobile.classList.add('inactive');
}

 function openFotsDos() {
   verMasButton.classList.add('inactive');
   sectionDosFotos.classList.remove('inactive');
   verMenosButton.classList.remove('inactive');
 }

function closeFotosDos() {
   verMenosButton.classList.add('inactive');
   sectionDosFotos.classList.add('inactive');
   verMasButton.classList.remove('inactive');
}