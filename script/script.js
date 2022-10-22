const variables = {
  board: document.querySelector("#board"),
  MATRIX_Y_AXIS: 20,
  MATRIX_X_AXIS: 28,
  cell: null,
  addTexture: null,
};

const resources = {
  sky: "sky",
  dirt: "dirt",
  grass: "grass",
  rock: "rock",
  treeLeg: "tr-leg",
  treeTop: "tr-top",
  cloud: "cloud",
};

function appendElements() {
  for (let i = 1; i <= variables.MATRIX_Y_AXIS; i++) {
    for (let j = 1; j <= variables.MATRIX_X_AXIS; j++) {
      variables.cell = document.createElement("div");
      variables.cell.dataset.y = i;
      variables.cell.dataset.x = j;
      variables.addTexture = drawElements(variables.cell);
      variables.cell.classList.add(variables.addTexture);
      variables.board.append(variables.cell);
    }
  }
}

function drawElements(cell) {
  const y = parseInt(cell.dataset.y);
  const x = parseInt(cell.dataset.x);

  if (y === 18) {
    return resources.grass;
  }
  if (y > 18) {
    return resources.dirt;
  }
  if (
    (y > 13 && y < 18 && x > 3 && x < 5) ||
    (y > 14 && y < 18 && x > 13 && x < 16)
  ) {
    return resources.treeLeg;
  }
  if (
    (y >= 11 && y < 15 && x === 3) ||
    (y >= 11 && y < 14 && x === 4) ||
    (y >= 11 && y < 15 && x === 5)
  ) {
    return resources.treeTop;
  }
  if (
    (y === 9 && x > 10 && x < 19) ||
    (y === 8 && x > 11 && x < 18) ||
    (y === 7 && x > 12 && x < 17) ||
    (y > 11 && y < 20 && x > 11 && x < 18 && x != 15 && x != 14) ||
    (y > 9 && y < 12 && x === 12) ||
    (y > 9 && y < 12 && x > 13 && x < 16) ||
    (y > 9 && y < 12 && x > 16 && x < 18) ||
    (y > 11 && y < 15 && x > 13 && x < 16)
  ) {
    return resources.rock;
  }

  // else return resources.sky;
}

function createGame() {
  appendElements();
  board.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  console.log(e.target);
}

createGame();
