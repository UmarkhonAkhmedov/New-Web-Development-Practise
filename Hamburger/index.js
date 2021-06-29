// Show Menu
const navMenu = document.getElementById('navbar__list'),
      navToggle = document.getElementById('navbar__hamburger'),
      navClose = document.getElementById('navbar__close');

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

