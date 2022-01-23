let direction = { x: 1, y: 0 };

let keyDirection = "R";
let boost = false;
let boostLeft = 5;
let pause = false;

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (direction.y !== 1) {
        direction = { x: 0, y: -1 };
        keyDirection = "U";
      }
      break;
    case "ArrowDown":
      if (direction.y !== -1) {
        direction = { x: 0, y: 1 };
        keyDirection = "D";
      }
      break;
    case "ArrowLeft":
      if (direction.x !== 1) {
        direction = { x: -1, y: 0 };
        keyDirection = "L";
      }
      break;
    case "ArrowRight":
      if (direction.x !== -1) {
        direction = { x: 1, y: 0 };
        keyDirection = "R";
      }
      break;
  }
});

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    if (boost == false && boostLeft > 0) {
      boost = true;
      boostLeft -= 1;
    } else boost = false;
  }
};

document.body.onkeydown = function (e) {
  if (e.keyCode == 80) {
    if (pause == false) {
      pause = true;
    } else pause = false;
  }
};

export function getInput() {
  return direction;
}

export function getKeyDirection() {
  return keyDirection;
}

export function getBoostStatus() {
  return boost;
}

export function getPauseStatus() {
  return pause;
}

export function setPauseStatus(status) {
  pause = status;
}

export function drawBoostLeft(gameBoard) {
  const boostLeftView = document.createElement("div");
  boostLeftView.textContent = `Boost = ${boostLeft}`;
  boostLeftView.classList.add("boost-left");
  gameBoard.appendChild(boostLeftView);
}

export function reset() {
  direction = { x: 1, y: 0 };
  keyDirection = "R";
  boost = false;
  boostLeft = 5;
}
