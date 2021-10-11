const navList = document.querySelector(".nav");
const closeBtn = document.querySelector(".nav__list--close");
const navHambur = document.querySelector(".nav__hambur");



if(navHambur){
  navHambur.addEventListener('click', () => {
    navList.classList.add('show__bar');
    navHambur.classList.add('remove__hambur');

  })
}

if(closeBtn){
  closeBtn.addEventListener('click', () =>{
    navList.classList.remove('show__bar');
    navHambur.classList.remove('remove__hambur');
  })
}


// Changing the selection option image
const nathan = document.querySelector(".nathan");
const smith = document.querySelector(".smith");
const adam = document.querySelector(".adam");
const image = document.querySelector(".header__info--select");

if(nathan){
  nathan.addEventListener('option', () => {
    var img = document.createElement('img');
    img.src = "../img/top__option-men.svg";
    document.getElementById('header__info--select').appendChild(img);
    console.log("clicked")
  })
}
