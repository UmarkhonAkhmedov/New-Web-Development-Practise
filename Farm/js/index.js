// Show Menu
const navMenu = document.getElementById('header__nav-menu'),
      navToggle = document.getElementById('header__nav-hamburger'),
      navClose = document.getElementById('nav__close');

// Validate if constant exists
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show__menu')
  })
}
// Validate if constant exists
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show__menu')
  })
}
