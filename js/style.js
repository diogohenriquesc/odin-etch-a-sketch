const grid = document.querySelector('.grid');

function createGrid(number) {
  for (let i = 0; i < number; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid__item');
    grid.appendChild(gridItem);
  }
}

createGrid(256);


const gridItems = document.querySelectorAll('.grid__item');
gridItems.forEach(item => item.addEventListener('mouseenter', changeColor));

function changeColor(e) {
  e.target.classList.add('hovered');
}

