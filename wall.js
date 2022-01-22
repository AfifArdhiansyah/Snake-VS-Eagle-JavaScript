import { WIDTH, HEIGHT } from "./game.js";

export function drawWall(gameBoard) {
  //wall left
  for (let i = 1; i < HEIGHT; i++) {
    const wall = document.createElement("div");
    wall.style.gridColumnStart = 1;
    wall.style.gridRowStart = i;
    wall.classList.add("wall");
    gameBoard.appendChild(wall);
  }
  //wall right
  for (let i = 0; i < HEIGHT - 1; i++) {
    const wall = document.createElement("div");
    wall.style.gridColumnStart = WIDTH;
    wall.style.gridRowStart = i;
    wall.classList.add("wall");
    gameBoard.appendChild(wall);
  }
  //wall top
  for (let i = 1; i < WIDTH; i++) {
    const wall = document.createElement("div");
    wall.style.gridColumnStart = i;
    wall.style.gridRowStart = 1;
    wall.classList.add("wall");
    gameBoard.appendChild(wall);
  }
  //wall bottom
  for (let i = 0; i < WIDTH; i++) {
    const wall = document.createElement("div");
    wall.style.gridColumnStart = i;
    wall.style.gridRowStart = HEIGHT;
    wall.classList.add("wall");
    gameBoard.appendChild(wall);
  }
}
