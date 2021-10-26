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


// Think about us
const reviews = [
  {
    id: 1,
    name: "Thomas Adam",
    img: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
    date: "Stayed 27 Sep, 2021",
    text: "It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. It is very nearby most of the popular places",
  },
  {
    id: 2,
    name: "Megan Fox",
    img: "../img/about__main-woman.svg",
    date: "Stayed 9 Aug, 2020",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, accusamus dolor maiores iste sunt voluptates reprehenderit fugiat expedita ullam molestiae quae provident pariatur corporis aut, illum doloribus animi aliquid earum cupiditate unde odio. Ducimus ipsam delectus, quasi vitae obcaecati libero saepe adipisci! Odio esse beatae ratione cumque reprehenderit fugit distinctio illo ipsam repellendus optio laboriosam delectus, modi atque laborum incidunt velit commodi quasi consequatur magnam doloremque vel temporibus harum error. ",
  },
  {
    id: 3,
    name: "Smith John",
    img: "https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859",
    date: "Stayed 18 Nov, 2019",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, est, ipsam, quos maiores voluptatum ducimus deleniti delectus quidem sequi cupiditate reiciendis odio magni animi ab accusantium reprehenderit! Dolores repellendus corrupti asperiores error obcaecati est, quisquam vel, velit quis totam fugiat, magnam quam reiciendis incidunt fuga amet maxime a earum. Quam ab, sunt deserunt dolorum aspernatur veritatis? Animi, nesciunt provident exercitationem minus facilis quisquam laboriosam magnam nostrum ducimus. Enim consequuntur.",
  }
  
];

// Select items
const author = document.getElementById("author");
const img = document.getElementById("person-img");
const date = document.getElementById('think__date');
const text = document.getElementById('think__text');

const prevBtn = document.querySelector('.think__left');
const nextBtn = document.querySelector('.think__right');

let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', function(){
  showPerson();
})

// Show person based on item
function showPerson(){
  const item = reviews[currentItem];
  author.textContent = item.name;
  date.textContent = item.date;
  img.src = item.img;
  text.textContent = item.text;
}
// Show next person
nextBtn.addEventListener('click', function(){
  currentItem++
  if (currentItem > reviews.length - 1){
    currentItem = 0
  }
  showPerson();
})
prevBtn.addEventListener('click', function(){
  currentItem--
  if (currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
})


