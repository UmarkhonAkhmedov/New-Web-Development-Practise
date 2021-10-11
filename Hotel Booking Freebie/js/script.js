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
