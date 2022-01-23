import { getInput, getKeyDirection } from "./input.js";
import { getApplePos, newApple } from "./apple.js";
import { WIDTH, HEIGHT, getRun, setRun, setCrashStatus } from "./game.js";
import { getEaglePos } from "./eagle.js";

let GAME_SPEED = 14;
let eatApple = false;
let score = 0;

let snakeBody = [
  { x: 8, y: 11 },
  { x: 7, y: 11 },
  { x: 6, y: 11 },
];

export function update() {
  const input = getInput();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += input.x;
  snakeBody[0].y += input.y;
}

export function draw(gameBoard) {
  // snakeBody.forEach((element) => {
  //   const snakeElement = document.createElement("div");
  //   snakeElement.style.gridColumnStart = element.x;
  //   snakeElement.style.gridRowStart = element.y;
  //   snakeElement.classList.add("snake");
  //   gameBoard.appendChild(snakeElement);
  // });

  const snakeHead = document.createElement("img");
  snakeHead.style.gridColumnStart = snakeBody[0].x;
  snakeHead.style.gridRowStart = snakeBody[0].y;
  switch (getKeyDirection()) {
    case "U":
      snakeHead.src = "img/greenSnake/headU.png";
      break;
    case "D":
      snakeHead.src = "img/greenSnake/headD.png";
      break;
    case "R":
      snakeHead.src = "img/greenSnake/headR.png";
      break;
    case "L":
      snakeHead.src = "img/greenSnake/headL.png";
      break;
  }
  snakeHead.classList.add("snake-head");
  gameBoard.appendChild(snakeHead);

  for (let i = 1; i < snakeBody.length; i++) {
    const snakeElement = document.createElement("img");
    snakeElement.style.gridColumnStart = snakeBody[i].x;
    snakeElement.style.gridRowStart = snakeBody[i].y;
    snakeElement.src = "img/greenSnake/body.png";
    snakeElement.classList.add("snake-body");
    gameBoard.appendChild(snakeElement);
  }
}

export function eatCheck() {
  const applePos = getApplePos();
  if (snakeBody[0].x === applePos.x && snakeBody[0].y === applePos.y) {
    eatApple = true;
    score += 10;
    appleEaten();
  }
}

function appleEaten() {
  if (eatApple == true) {
    snakeBody.push(snakeBody[snakeBody.length - 1]);
    newApple();
    eatApple = false;
  }
}

export function wallCheck() {
  if (snakeBody[0].x > WIDTH - 1 || snakeBody[0].x < 2 || snakeBody[0].y > HEIGHT - 1 || snakeBody[0].y < 2) {
    console.log("crash");
    console.log(snakeBody[0].x);
    console.log(snakeBody[0].y);
    if (getRun() == true) setCrashStatus(true);
  }
}

export function hitSelf() {
  for (let i = 1; i < snakeBody.length; i++) {
    if (snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y) {
      if (getRun() == true) setCrashStatus(true);
    }
  }
}

export function hitByEagle() {
  snakeBody.forEach((element) => {
    if (element.x === getEaglePos().x && element.y === getEaglePos().y) {
      setCrashStatus(true);
    }
  });
}

export function drawScore(gameBoard) {
  const scoreTitle = document.createElement("div");
  scoreTitle.textContent = `Score = ${score}`;
  scoreTitle.classList.add("score");
  gameBoard.appendChild(scoreTitle);
}

export function drawSnakeLenght(gameBoard) {
  const snakeLenght = document.createElement("div");
  snakeLenght.textContent = `Snake Length = ${snakeBody.length}`;
  snakeLenght.classList.add("snake-lenght");
  gameBoard.appendChild(snakeLenght);
}

export function getScore() {
  return score;
}

export function reset() {
  eatApple = false;
  score = 0;

  snakeBody = [
    { x: 8, y: 11 },
    { x: 7, y: 11 },
    { x: 6, y: 11 },
  ];
}

export function setGameSpeed(speed) {
  GAME_SPEED = speed;
}

export function getGameSpeed() {
  return GAME_SPEED;
}
