let chooseChar = sessionStorage.getItem("char-select");
if (!chooseChar) chooseChar = 1;
chooseChar = parseInt(chooseChar, 10);

let chooseCharTemp = chooseChar;

const totalChar = 4;

let highScore = sessionStorage.getItem("high-score");
if (!highScore) highScore = 0;

// let musicStatus = sessionStorage.getItem("music-status");
// if (!musicStatus) musicStatus = 0;
// console.log(musicStatus);

//play
document.getElementById("play-btn").onclick = () => {
  window.location.replace("./game.html");
};

//theme music
const music = document.getElementById("theme-music");
function pauseMusic() {
  music.pause();
}
function playMusic() {
  music.play();
}

//play and pause music
// console.log(sessionStorage.getItem("music-status"));
if (!sessionStorage.getItem("music-status") || sessionStorage.getItem("music-status") == 0) {
  pauseMusic();
  document.getElementById("audio-btn").src = "img/mute.png";
  sessionStorage.setItem("music-status", 0);
} else if (sessionStorage.getItem("music-status") == 1) {
  console.log("play music");
  playMusic();
  document.getElementById("audio-btn").src = "img/playMusic.png";
  sessionStorage.setItem("music-status", 1);
}
const playMusicBtn = document.getElementById("audio-btn");
playMusicBtn.onclick = () => {
  if (!sessionStorage.getItem("music-status") || sessionStorage.getItem("music-status") == 0) {
    console.log("play music");
    playMusic();
    document.getElementById("audio-btn").src = "img/playMusic.png";
    sessionStorage.setItem("music-status", 1);
  } else if (sessionStorage.getItem("music-status") == 1) {
    pauseMusic();
    document.getElementById("audio-btn").src = "img/mute.png";
    sessionStorage.setItem("music-status", 0);
  }
};

//character choose page
document.getElementById("menu-char").onclick = () => {
  drawCharacterPage();
};

function setCharChoose(choose) {
  sessionStorage.setItem("char-select", choose);
}

//snake on menu page
function drawSnakeDisplay() {
  switch (chooseChar) {
    case 1:
      document.getElementById("menu-snake").src = "img/greenSnake/snakeGreen.png";
      break;
    case 2:
      document.getElementById("menu-snake").src = "img/redSnake/snakeRed.png";
      break;
    case 3:
      document.getElementById("menu-snake").src = "img/yellowSnake/snakeYellow.png";
      break;
    case 4:
      document.getElementById("menu-snake").src = "img/blueSnake/snakeBlue.png";
      break;
  }
}
drawSnakeDisplay();

//highscore
document.getElementById("menu-highscore").textContent = `High Score : ${highScore} point`;

//draw menu page
const menuPage = document.getElementById("menu-page");
//draw choose character
function drawCharacterPage() {
  const charPage = document.createElement("div");
  charPage.classList.add("char-page");
  menuPage.appendChild(charPage);

  //title chat
  const titleChar = document.createElement("h1");
  titleChar.textContent = "Choose Character";
  charPage.appendChild(titleChar);

  //close button
  const closeChar = document.createElement("img");
  closeChar.src = "img/close.png";
  closeChar.classList.add("close-btn");
  closeChar.onclick = () => {
    charPage.remove();
    chooseCharTemp = chooseChar;
    chooseCharTemp = parseInt(chooseCharTemp, 10);
  };
  charPage.appendChild(closeChar);

  //display char
  let charChooseDisplayTemp;
  function drawCharDisplay() {
    const charChooseDisplay = document.createElement("img");
    switch (chooseCharTemp) {
      case 1:
        charChooseDisplay.src = "img/greenSnake/snakeGreen.png";
        break;
      case 2:
        charChooseDisplay.src = "img/redSnake/snakeRed.png";
        break;
      case 3:
        charChooseDisplay.src = "img/yellowSnake/snakeYellow.png";
        break;
      case 4:
        charChooseDisplay.src = "img/blueSnake/snakeBlue.png";
        break;
    }
    charChooseDisplay.classList.add("char-choose-display");
    charPage.appendChild(charChooseDisplay);
    charChooseDisplayTemp = charChooseDisplay;
  }
  drawCharDisplay();

  //draw arrow
  const menuArrowLeft = document.createElement("img");
  menuArrowLeft.src = "img/arrowLeft.png";
  menuArrowLeft.onclick = () => {
    charChooseDisplayTemp.remove();
    if (chooseCharTemp > 1) chooseCharTemp -= 1;
    else chooseCharTemp = totalChar;
    drawCharDisplay();
  };
  menuArrowLeft.classList.add("arrow-left");
  charPage.appendChild(menuArrowLeft);

  const menuArrowRight = document.createElement("img");
  menuArrowRight.src = "img/arrowRight.png";
  menuArrowRight.onclick = () => {
    charChooseDisplayTemp.remove();
    if (chooseCharTemp < totalChar) chooseCharTemp += 1;
    else chooseCharTemp = 1;
    drawCharDisplay();
  };
  menuArrowRight.classList.add("arrow-right");
  charPage.appendChild(menuArrowRight);

  //select button
  const selectCharBtn = document.createElement("button");
  selectCharBtn.textContent = "select";
  selectCharBtn.onclick = () => {
    chooseChar = chooseCharTemp;
    charPage.remove();
    setCharChoose(chooseChar);
    drawSnakeDisplay();
  };
  selectCharBtn.classList.add("select-char-btn");
  charPage.appendChild(selectCharBtn);
}
