const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".board");
const aganeBtn = document.querySelector(".new-game-button");

let counter = 0;

const clickOnCell = (cell, index) => {
  let cross = document.createElement("div");
  let circle = document.createElement("div");
  cross.style.display = "none";
  const currentCell = document.querySelector(`.cell:nth-of-type(${index + 1})`);
  if (
    currentCell.classList.contains("cross") ||
    currentCell.classList.contains("circle")
  ) {
    alert("This cell already conatins character");
  } else {
    if (counter % 2 == 0) {
      cross.style.content = "×";
      cross.style.width = "98px";
      cross.style.height = "98px";
      cross.style.position = "absolute";
      cross.style.backgroundColor = "#3e3d49";
      cross.style.display = "block";
      currentCell.classList.add("cross");
      currentCell.append(cross);
      ++counter;
    } else {
      circle.style.content = "×";
      circle.style.width = "98px";
      circle.style.height = "98px";
      circle.style.position = "absolute";
      circle.style.backgroundColor = "#F5B441";
      circle.style.display = "block";
      currentCell.classList.add("circle");
      currentCell.append(circle);
      ++counter;
    }
  }
};

const clickOnNewGameBtn = () => {
  window.location.reload();
};

const cellLoop = (cell, index) => {
  cell.addEventListener("click", () => clickOnCell(cell, index));
};

aganeBtn.addEventListener("click", clickOnNewGameBtn);

cells.forEach(cellLoop);
