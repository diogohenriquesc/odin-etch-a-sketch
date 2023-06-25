const grid = document.querySelector('.grid');
const gridRange = document.querySelector('#range-grid');
const cleanBtn = document.querySelector('#clear-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');
const gridColor = '#FF7700';
let rainbowMode = false; 

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

function clearGrid(value) {
  removeGrid();
  createGrid(value * value);
}

function updateGridLayout(value) {
  grid.style = `grid-template-columns: repeat(${value}, 1fr)`;
}

function changeColor(e) {
  if (!rainbowMode) {
    e.target.style.background = gridColor;
  } else {
    e.target.style.background = getRandomColor();
  }
}

function getRandomColor() {
  return `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
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
  rangerOutput.textContent = `${value}  x  ${value}`;
}

cleanBtn.addEventListener('click', () => {
  clearGrid(gridRange.value);
});

rainbowBtn.addEventListener('click', () => {
  rainbowMode = rainbowMode ? false : true;

  if (rainbowMode) {
    rainbowBtn.classList.add('checked');
  } else {
    rainbowBtn.classList.remove('checked');
  }
});


createGrid(256);
