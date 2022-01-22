import { HEIGHT, WIDTH } from "./game.js";

let eaglePos = { x: 2, y: 2 };
let eagleDirection = { x: 1, y: 0 };
let eagleDirectionKey = "R";

export function draw(gameBoard) {
  const eagleElement = document.createElement("img");
  eagleElement.style.gridColumnStart = eaglePos.x;
  eagleElement.style.gridRowStart = eaglePos.y;
  switch (eagleDirectionKey) {
    case "U":
      eagleElement.src = "img/eagleFlyImgU.png";
      break;
    case "D":
      eagleElement.src = "img/eagleFlyImgD.png";
      break;
    case "R":
      eagleElement.src = "img/eagleFlyImgR.png";
      break;
    case "L":
      eagleElement.src = "img/eagleFlyImgL.png";
      break;
  }
  eagleElement.classList.add("eagle");
  gameBoard.appendChild(eagleElement);
}

export function eagleMove() {
  if (eaglePos.x > 1 && eaglePos.x < WIDTH - 1 && eaglePos.y > 1 && eaglePos.y < HEIGHT - 1) {
    eaglePos.x += eagleDirection.x;
    eaglePos.y += eagleDirection.y;
  } else {
    newEagle();
  }
}

function newEagle() {
  //horizontal wall
  if (newChance(1, 2)) {
    //top wall
    if (newChance(1, 2)) {
      eagleDirection.x = 0;
      eagleDirection.y = 1;
      eaglePos.x = Math.floor(Math.random() * (WIDTH - 2)) + 2;
      eaglePos.y = 2;
      eagleDirectionKey = "D";
    }
    //bottom wall
    else {
      eagleDirection.x = 0;
      eagleDirection.y = -1;
      eaglePos.x = Math.floor(Math.random() * (WIDTH - 2)) + 2;
      eaglePos.y = HEIGHT - 2;
      eagleDirectionKey = "U";
    }
  }
  //vertical wall
  else {
    //left wall
    if (newChance(1, 2)) {
      eagleDirection.x = 1;
      eagleDirection.y = 0;
      eaglePos.x = 2;
      eaglePos.y = Math.floor(Math.random() * (HEIGHT - 2)) + 2;
      eagleDirectionKey = "R";
    }
    //right wall
    else {
      eagleDirection.x = -1;
      eagleDirection.y = 0;
      eaglePos.x = WIDTH - 2;
      eaglePos.y = Math.floor(Math.random() * (HEIGHT - 2)) + 2;
      eagleDirectionKey = "L";
    }
  }
}

function newChance(ask, universe) {
  let chance = Math.floor(Math.random() * universe - 1) + 1;
  if (ask <= chance) return true;
  else false;
}

export function getEaglePos() {
  return eaglePos;
}

export function reset() {
  eaglePos = { x: 2, y: 2 };
  eagleDirection = { x: 1, y: 0 };
  eagleDirectionKey = "R";
}
