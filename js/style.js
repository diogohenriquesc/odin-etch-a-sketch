const grid = document.querySelector('.grid');
const gridRange = document.querySelector('#range-grid');

function createGrid(number) {
  for (let i = 0; i < number; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid__item');
    gridItem.addEventListener('mouseenter', changeColor)
    grid.appendChild(gridItem);
  }
}

function removeGrid() {
  const gridItems = document.querySelectorAll('.grid__item');
  gridItems.forEach(item => item.remove());
}

function updateGridLayout(value) {
  grid.style = `grid-template-columns: repeat(${value}, 1fr)`;
}

function changeColor(e) {
  e.target.classList.add('hovered');
}

gridRange.addEventListener('change', (e) => {
  const rangeValue = e.target.value;
  updateRangeOutput(rangeValue);
  removeGrid();
  createGrid(rangeValue * rangeValue);
  updateGridLayout(rangeValue);
});

function updateRangeOutput(value) {
  const rangerOutput = document.querySelector('.range__output');
  rangerOutput.textContent = `${value} x ${value}`;
}

createGrid(256);
