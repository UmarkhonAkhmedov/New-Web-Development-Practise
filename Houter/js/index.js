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

// SLide Image in features
const previous = document.getElementById('next__image');
const next = document.getElementById('previous__image');
const feature = document.getElementById('feature__img');


if(next){
  next.addEventListener('click', () => {
  
  feature.style.left = "-90%";
  if(next){
    next.addEventListener('click', () => {
    
    feature.style.left = "-185%";
    if(next){
      next.addEventListener('click', () => {
      
      feature.style.left = "-285%";
      if(next){
        next.addEventListener('click', () => {
        
        feature.style.left = "0%";
      
        })
      }
      })
    }
    })
  }
  })
}
if(previous){
  previous.addEventListener('click', () => {
  
  feature.style.left = "-285%";
  if(previous){
    previous.addEventListener('click', () => {
    
    feature.style.left = "-185%";
    if(previous){
      previous.addEventListener('click', () => {
      
      feature.style.left = "-90%";
      if(previous){
        previous.addEventListener('click', () => {
        
        feature.style.left = "0%";
      
        })
      }
      })
    }
    })
  }
  })
}

