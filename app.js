import { drawGrid } from "./src/drawGrid";
import { MouseInteraction } from "./src/mouseInteraction";
import { GRID_ID } from "./src/statics";
import { waitElement } from "./src/waitElement";

(async () => {
  drawGrid(10);
  await waitElement(GRID_ID);
  new MouseInteraction();
})();
