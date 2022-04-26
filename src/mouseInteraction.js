import { GRID_ID } from "./statics";

export class MouseInteraction {
  constructor() {
    this.grid = document.getElementById(GRID_ID);
    this.start = null;
    this.prev = null;
    this.grid.addEventListener("mousedown", this.startDrawing);
    this.grid.addEventListener("mouseup", this.endDrawing);
  }

  resetDrawing() {
    const selected = document.querySelectorAll(".drawn");
    (selected || []).forEach((element) => {
      element.classList.remove("drawn");
    });
  }

  startDrawing = (evt) => {
    this.start = { col: evt.target.dataset.col, row: evt.target.dataset.row };
    evt.preventDefault();
    grid.addEventListener("mousemove", this.draw);
  };

  endDrawing = () => {
    grid.removeEventListener("mousemove", this.draw);
    this.start = null;
    this.prev = null;
  };

  draw = (evt) => {
    if (
      evt.target.dataset.col &&
      (evt.target.dataset.col !== this.prev?.col ||
        evt.target.dataset.row !== this.prev?.row)
    ) {
      this.resetDrawing();
      this.prev = { col: evt.target.dataset.col, row: evt.target.dataset.row };
      for (
        let i = Math.min(this.start.row, evt.target.dataset.row);
        i <= Math.max(this.start.row, evt.target.dataset.row);
        ++i
      ) {
        for (
          let j = Math.min(this.start.col, evt.target.dataset.col);
          j <= Math.max(this.start.col, evt.target.dataset.col);
          ++j
        ) {
          const square = document.getElementById(`${j}-${i}`);
          square.classList.add("drawn");
        }
      }
      evt.target.classList.add("drawn");
    }
  };
}
