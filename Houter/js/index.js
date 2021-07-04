// Show Menu
const navMenu = document.getElementById('nav__main'),
      navToggle = document.getElementById('nav__hamburger'),
      navClose = document.getElementById('nav__main-icon');

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

// Slide Show
const first = document.getElementById("review__menu-first"),
      second = document.getElementById("review__menu-second"),
      third = document.getElementById("review__menu-third"),
      review = document.getElementById("review__list");

if(first){
  first.addEventListener('click', () => {
    review.classList.add("show__first"),
    review.classList.remove("show__third"),
    review.classList.remove("show__second"),
    first.style.backgroundColor = "#3C4563",
    second.style.backgroundColor = "#E0E3EB";
    third.style.backgroundColor = "#E0E3EB";
  })
}
if(second){
  second.addEventListener('click', () => {
    review.classList.remove("show__first"),
    review.classList.remove("show__third"),
    review.classList.add("show__second");
    first.style.backgroundColor = "#E0E3EB",
    second.style.backgroundColor = "#3C4563";
    third.style.backgroundColor = "#E0E3EB";
  })
}
if(third){
  third.addEventListener('click', () => {
    review.classList.remove("show__first"),
    review.classList.add("show__third"),
    review.classList.remove("show__second");
    first.style.backgroundColor = "#E0E3EB",
    second.style.backgroundColor = "#E0E3EB";
    third.style.backgroundColor = "#3C4563";
  })
}

