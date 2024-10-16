const cardWrapper = document.querySelector('.card-wrapper');

function scrollLeft() {
  cardWrapper.scrollBy({
    top: 0,
    left: -300,
    behavior: 'smooth'
  });
}

function scrollRight() {
  cardWrapper.scrollBy({
    top: 0,
    left: 300,
    behavior: 'smooth'
  });
}