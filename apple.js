import { WIDTH, HEIGHT } from "./game.js";

let applePos = { x: 5, y: 5 };

export function draw(gameBoard) {
  const appleElement = document.createElement("img");
  appleElement.style.gridColumnStart = applePos.x;
  appleElement.style.gridRowStart = applePos.y;
  appleElement.src = "img/apple.png";
  appleElement.classList.add("apple");
  gameBoard.appendChild(appleElement);
}

export function getApplePos() {
  return applePos;
}

export function newApple() {
  applePos = { x: Math.floor(Math.random() * (WIDTH - 4)) + 3, y: Math.floor(Math.random() * (HEIGHT - 4)) + 3 };
}

export function reset() {
  applePos = { x: 5, y: 5 };
}
