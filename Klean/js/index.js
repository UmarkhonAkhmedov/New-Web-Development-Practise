const list = document.getElementById('nav__main-list'),
      links = document.getElementById('nav__links'),
      menu = document.getElementById('nav__menu'),
      close = document.getElementById('nav__main-close');


function open(){
  list.classList.add('show__menu');
  links.classList.add('show__links');
}
menu.addEventListener('click', open);

function closed(){
  list.classList.remove('show__menu');
  links.classList.remove('show__links');
}
close.addEventListener('click', closed)


