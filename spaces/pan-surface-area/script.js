let gridCells = 100;

let gridSideLength = Math.sqrt(gridCells);

grid.style['grid-template-rows'] = `repeat(${gridSideLength}, 1fr)`;
grid.style['grid-template-columns'] = `repeat(${gridSideLength}, 1fr)`;

for (let i = 0; i < gridCells; i++) {
  grid.appendChild(document.createElement('div'));
}
