import { getGameSpeed, update as updateSnake, draw as drawSnake, eatCheck, wallCheck, drawScore, hitSelf, hitByEagle, reset as resetSnake, getScore, drawSnakeLenght, setCharacter } from "./snake.js";
import { draw as drawApple, reset as resetApple } from "./apple.js";
import { drawWall } from "./wall.js";
import { draw as drawEagle, eagleMove, reset as resetEagle } from "./eagle.js";
import { reset as resetInput, getBoostStatus, drawBoostLeft, getPauseStatus, setPauseStatus } from "./input.js";
import { gameOver, pauseCheck, infoPage, levelPage } from "./view.js";

export const WIDTH = 52;
export const HEIGHT = 26;
let firstTime = 0;
let run = true;
let crash = false;
let countSeconds = 0;
let countSecondsInt = 0;
let runGame;

const gameBoard = document.getElementById("game-board");

//main
function main(time) {
  if (run == true) window.requestAnimationFrame(main);

  const timeSeconds = (time - firstTime) / 1000;
  if (timeSeconds < 1 / getGameSpeed()) return;
  if (timeSeconds < 0.6 / getGameSpeed() && getBoostStatus() == true) return;

  firstTime = time;

  if (run == true) {
    runGame();
  }
  if (gameBoard) {
    gameOver(gameBoard);
    pauseCheck(gameBoard);
  }
}

//html game
if (gameBoard) {
  runGame = () => {
    update();
    eagleMove();
    wallCheck();
    hitSelf();
    eatCheck();
    hitByEagle();
    draw();
    boostStatus();
    addCount();
  };

  const infoBtn = document.getElementById("info-btn");
  if (infoBtn) {
    document.getElementById("info-btn").onclick = () => {
      infoPage(gameBoard);
    };
  }

  const levelBtn = document.getElementById("level-btn");
  if (levelBtn) {
    document.getElementById("level-btn").onclick = () => {
      levelPage(gameBoard);
    };
  }

  function addCount() {
    countSeconds++;
    countSecondsInt = countSeconds / getGameSpeed();
    countSecondsInt = Math.floor(countSecondsInt);
    // console.log(countSecondsInt);
  }

  function boostTime() {
    if (run == true) {
      updateSnake();
      drawSnake(gameBoard);
      wallCheck();
      hitSelf();
      eatCheck();
      hitByEagle();
    }
    gameOver(gameBoard);
    pauseCheck(gameBoard);
  }

  window.requestAnimationFrame(main);

  function update() {
    updateSnake();
  }

  function draw() {
    gameBoard.innerHTML = "";
    drawWall(gameBoard);
    drawSnake(gameBoard);
    drawApple(gameBoard);
    drawScore(gameBoard);
    drawSnakeLenght(gameBoard);
    drawEagle(gameBoard);
    drawBoostLeft(gameBoard);
  }

  function boostStatus() {
    if (getBoostStatus()) {
      window.requestAnimationFrame(boostTime);
    }
  }
}

export function play() {
  run = true;
  window.requestAnimationFrame(main);
}

export function getRun() {
  return run;
}

export function setRun(status) {
  run = status;
}

export function setCrashStatus(status) {
  crash = status;
}

export function getCrashStatus() {
  return crash;
}

export function reset() {
  resetSnake();
  resetApple();
  resetEagle();
  resetInput();
  crash = false;
}
