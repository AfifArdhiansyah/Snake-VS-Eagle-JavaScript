import { GAME_SPEED, update as updateSnake, draw as drawSnake, eatCheck, wallCheck, drawScore, hitSelf, hitByEagle, reset as resetSnake, getScore } from "./snake.js";
import { draw as drawApple, reset as resetApple } from "./apple.js";
import { drawWall } from "./wall.js";
import { draw as drawEagle, eagleMove, reset as resetEagle } from "./eagle.js";
import { reset as resetInput } from "./input.js";

let firstTime = 0;
const gameBoard = document.getElementById("game-board");
export const WIDTH = 52;
export const HEIGHT = 26;
let run = true;

function main(time) {
  if (run == true) window.requestAnimationFrame(main);
  const timeSeconds = (time - firstTime) / 1000;
  if (timeSeconds < 1 / GAME_SPEED) return;
  firstTime = time;

  if (run == true) {
    update();
    eagleMove();
    wallCheck();
    hitSelf();
    eatCheck();
    hitByEagle();
    draw();
  }
  gameOver();
}

window.requestAnimationFrame(main);

export function getRun() {
  return run;
}

export function setRun(status) {
  run = status;
}

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  drawWall(gameBoard);
  drawSnake(gameBoard);
  drawApple(gameBoard);
  drawScore(gameBoard);
  drawEagle(gameBoard);
}

// function gameOver() {
//   if (run == false) {
//     const playAgain = confirm("Game Over\nKlik Ok to Play Again");
//     if (playAgain == true) {
//       run = true;
//       reset();
//     }
//   }
// }

function gameOver() {
  if (run == false) {
    const gameOverView = document.createElement("div");
    gameOverView.classList.add("game-over");
    gameBoard.appendChild(gameOverView);

    const titleGO = document.createElement("h1");
    titleGO.textContent = "Game Over";
    gameOverView.appendChild(titleGO);

    const pGO2 = document.createElement("p");
    pGO2.textContent = `Your Score = ${getScore()}`;
    gameOverView.appendChild(pGO2);

    const pGO = document.createElement("p");
    pGO.textContent = "Klik OKE to Play Again";
    gameOverView.appendChild(pGO);

    const buttonGO = document.createElement("button");
    buttonGO.textContent = "OKE";
    buttonGO.onclick = () => {
      reset();
      run = true;
      window.requestAnimationFrame(main);
    };
    gameOverView.appendChild(buttonGO);
  }
}

export function reset() {
  resetSnake();
  resetApple();
  resetEagle();
  resetInput();
}
