import { GRID_ID } from "./statics";

export function drawGrid(size) {
  const app = document.getElementById("app");
  const grid = document.createElement("div");
  document.documentElement.style.setProperty("--grid-size", size);
  grid.classList.add("grid");
  grid.setAttribute("id", GRID_ID);
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.col = j;
      square.dataset.row = i;
      square.id = `${j}-${i}`;
      grid.append(square);
    }
  }
  app.append(grid);
}
