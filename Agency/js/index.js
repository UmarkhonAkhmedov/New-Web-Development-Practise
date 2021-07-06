const list = document.getElementById('header__nav-list'),
      menu = document.getElementById('header__nav-menu'),
      close = document.getElementById('close__icon');


if(menu){
  menu.addEventListener('click', () => {
    list.classList.add('show__right');
  })
}
if(close){
  close.addEventListener('click', () =>{
    list.classList.remove('show__right');
  })
}
