const schemeSvg = document.querySelector('.scheme__svg'); // места
const totalPriceTag = document.querySelector('.price__total');
const menuButton = document.querySelector('.m-menu'); // бургер
const menu = document.querySelector('.menu');


let cost = 880;


schemeSvg.addEventListener('click', (evt) => {
  console.log(evt.target); // выведет элемент6 на который нажали

  if(!(evt.target.classList.contains('booked'))){ // если надатый эемнет не содерит класс booked(Занято)
    evt.target.classList.toggle('active');
    let totalSeats = schemeSvg.querySelectorAll('.active').length;
    
    totalPriceTag.textContent = totalSeats * cost;
    
  }
});



menuButton.addEventListener('click', () => {

  // menu.style.display = 'block';

  menu.classList.toggle('is-open');

});

