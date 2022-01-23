import { getScore, setGameSpeed } from "./snake.js";
import { getRun, setRun, reset, play, getCrashStatus } from "./game.js";
import { getPauseStatus, setPauseStatus } from "./input.js";

//draw game over
export function gameOver(gameBoard) {
  if (getCrashStatus()) {
    setRun(false);
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
    pGO.textContent = "Klik OKAY to Play Again";
    gameOverView.appendChild(pGO);

    const buttonGO = document.createElement("button");
    buttonGO.textContent = "OKAY";
    buttonGO.onclick = () => {
      reset();
      setRun(true);
      play();
    };
    gameOverView.appendChild(buttonGO);
  }
}

//check pause
export function pauseCheck(gameBoard) {
  if (getPauseStatus() && getRun() == true) {
    setRun(false);
    drawPausePage(gameBoard);
  }
}

//draw info
export function infoPage(gameBoard) {
  setRun(false);

  const infoPageView = document.createElement("div");
  infoPageView.classList.add("info-page");
  gameBoard.appendChild(infoPageView);

  const infoTitle = document.createElement("h1");
  infoTitle.textContent = "Information";
  infoPageView.appendChild(infoTitle);

  const infoList = document.createElement("ul");
  infoPageView.appendChild(infoList);

  let infoListChild = document.createElement("li");
  infoListChild.textContent = "Press UP key for go up";
  infoList.appendChild(infoListChild);

  infoListChild = document.createElement("li");
  infoListChild.textContent = "Press DOWN key for go down";
  infoList.appendChild(infoListChild);

  infoListChild = document.createElement("li");
  infoListChild.textContent = "Press RIGHT key for go right";
  infoList.appendChild(infoListChild);

  infoListChild = document.createElement("li");
  infoListChild.textContent = "Press LEFT key for go left";
  infoList.appendChild(infoListChild);

  infoListChild = document.createElement("li");
  infoListChild.textContent = "Press P key for pause the game";
  infoList.appendChild(infoListChild);

  infoListChild = document.createElement("li");
  infoListChild.textContent = "Press SPACE key for boost, and press again for cancel it";
  infoList.appendChild(infoListChild);

  const btnInfoPlay = document.createElement("button");
  btnInfoPlay.textContent = "Got It!";
  btnInfoPlay.onclick = () => {
    if (!getCrashStatus()) play();
    infoPageView.remove();
  };
  infoPageView.appendChild(btnInfoPlay);
}

//draw pause
export function drawPausePage(gameBoard) {
  const pausePage = document.createElement("div");
  pausePage.classList.add("pause-page");
  gameBoard.appendChild(pausePage);

  const pauseText = document.createElement("div");
  pauseText.textContent = "Game Paused, click for play again";
  pausePage.appendChild(pauseText);

  const pausePlayBtn = document.createElement("button");
  pausePlayBtn.textContent = "Play";
  pausePlayBtn.onclick = () => {
    play();
    setPauseStatus(false);
  };
  pausePage.appendChild(pausePlayBtn);
}

//level page
export function levelPage(gameBoard) {
  setRun(false);

  const levelPageView = document.createElement("div");
  levelPageView.classList.add("level-page");
  gameBoard.appendChild(levelPageView);

  const levelTitle = document.createElement("h1");
  levelTitle.textContent = "Choose Level";
  levelPageView.appendChild(levelTitle);

  const level1 = document.createElement("button");
  level1.textContent = "Easy";
  level1.onclick = () => {
    setGameSpeed(10);
    if (!getCrashStatus()) {
      play();
      reset();
    }
    levelPageView.remove();
  };
  levelPageView.appendChild(level1);

  const level2 = document.createElement("button");
  level2.textContent = "Medium";
  level2.onclick = () => {
    setGameSpeed(14);
    if (!getCrashStatus()) {
      play();
      reset();
    }
    levelPageView.remove();
  };
  levelPageView.appendChild(level2);

  const level3 = document.createElement("button");
  level3.textContent = "Hard";
  level3.onclick = () => {
    setGameSpeed(18);
    if (!getCrashStatus()) {
      play();
      reset();
    }
    levelPageView.remove();
  };
  levelPageView.appendChild(level3);
}
