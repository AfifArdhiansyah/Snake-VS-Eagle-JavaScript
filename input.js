let direction = { x: 1, y: 0 };

let keyDirection = "R";

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

export function getInput() {
  return direction;
}

export function getKeyDirection() {
  return keyDirection;
}

export function reset() {
  direction = { x: 1, y: 0 };
  keyDirection = "R";
}
