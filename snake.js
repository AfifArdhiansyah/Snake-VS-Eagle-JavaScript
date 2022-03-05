import { getInput, getKeyDirection } from "./input.js";
import { getApplePos, newApple } from "./apple.js";
import { WIDTH, HEIGHT, getRun, setRun, setCrashStatus } from "./game.js";
import { getEaglePos } from "./eagle.js";

let GAME_SPEED = 14;
let eatApple = false;
let score = 0;
let chooseChar = sessionStorage.getItem("char-select");
console.log(sessionStorage.getItem("char-select"));
chooseChar = parseInt(chooseChar, 10);
if (isNaN(chooseChar)) {
  chooseChar = 1;
}
console.log(chooseChar);

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

const menuChar = document.getElementById("menu-char");
if (menuChar) {
  document.getElementById("menu-char").onclick = () => {
    console.log("hwlloq");
    setCharacter(1);
  };
}

export function draw(gameBoard) {
  const snakeHead = document.createElement("img");
  snakeHead.style.gridColumnStart = snakeBody[0].x;
  snakeHead.style.gridRowStart = snakeBody[0].y;
  switch (getKeyDirection()) {
    case "U":
      switch (chooseChar) {
        case 1:
          snakeHead.src = "img/greenSnake/headU.png";
          break;
        case 2:
          snakeHead.src = "img/redSnake/headRedU.png";
          break;
        case 3:
          snakeHead.src = "img/yellowSnake/headYellowU.png";
          break;
        case 4:
          snakeHead.src = "img/blueSnake/headBlueU.png";
          break;
      }
      break;
    case "D":
      switch (chooseChar) {
        case 1:
          snakeHead.src = "img/greenSnake/headD.png";
          break;
        case 2:
          snakeHead.src = "img/redSnake/headRedD.png";
          break;
        case 3:
          snakeHead.src = "img/yellowSnake/headYellowD.png";
          break;
        case 4:
          snakeHead.src = "img/blueSnake/headBlueD.png";
          break;
      }
      break;
    case "R":
      switch (chooseChar) {
        case 1:
          snakeHead.src = "img/greenSnake/headR.png";
          break;
        case 2:
          snakeHead.src = "img/redSnake/headRedR.png";
          break;
        case 3:
          snakeHead.src = "img/yellowSnake/headYellowR.png";
          break;
        case 4:
          snakeHead.src = "img/blueSnake/headBlueR.png";
          break;
      }
      break;
    case "L":
      switch (chooseChar) {
        case 1:
          snakeHead.src = "img/greenSnake/headL.png";
          break;
        case 2:
          snakeHead.src = "img/redSnake/headRedL.png";
          break;
        case 3:
          snakeHead.src = "img/yellowSnake/headYellowL.png";
          break;
        case 4:
          snakeHead.src = "img/blueSnake/headBlueL.png";
          break;
      }
      break;
  }
  snakeHead.classList.add("snake-head");
  gameBoard.appendChild(snakeHead);

  for (let i = 1; i < snakeBody.length; i++) {
    const snakeElement = document.createElement("img");
    snakeElement.style.gridColumnStart = snakeBody[i].x;
    snakeElement.style.gridRowStart = snakeBody[i].y;
    switch (chooseChar) {
      case 1:
        snakeElement.src = "img/greenSnake/body.png";
        break;
      case 2:
        snakeElement.src = "img/redSnake/bodyRed.png";
        break;
      case 3:
        snakeElement.src = "img/yellowSnake/bodyYellow.png";
        break;
      case 4:
        snakeElement.src = "img/blueSnake/bodyBlue.png";
        break;
    }
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
    setCrashStatus(true);
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

export function setCharacter(choose) {
  chooseChar = choose;
}
