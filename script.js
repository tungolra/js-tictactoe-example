/*----- constants -----*/
const O_PLAYER = "O";
const X_PLAYER = "X";
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*----- app's state (variables) -----*/
let cells = Array.from(document.querySelectorAll(".cell"));
let currentPlayer = X_PLAYER;
// let gameResult = null;
let spaces = Array(9).fill(null);
let playAgain = document.querySelector(".restart-game");
let header = document.querySelector("h1");
let oScore = 0;
let xScore = 0;
let oPoints = document.querySelector("#o");
let xPoints = document.querySelector("#x");
let gameboard = document.querySelector(".gameboard");

/*----- functions -----*/
startGame();
initialize();

function initialize() {
  // const squares = document.querySelectorAll(".cell");
  for (let x of cells) {
    x.textContent = null;
  }
  spaces.forEach(function (space, i) {
    spaces[i] = null;
  });
  playAgain.style.display = "none";
  header.innerText = "Tic-Tac-Toe";
  oPoints.innerText = oScore;
  xPoints.innerText = xScore;
  gameboard.style.display = "flex";
}

/*----- event listeners -----*/
// loop over all cells and add eventlistener to all dom elements
function startGame() {
  cells.forEach(function (cell) {
    cell.addEventListener("click", boxClicked);
  });
}


//Keep track of which box was clicked of the 9 blocks
function boxClicked(e) {
  const id = e.target.id;
  if (spaces[id] === null) {
    spaces[id] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWinner() !== false) {
      header.innerText = `${currentPlayer} Won!`;
      currentPlayer === X_PLAYER ? xScore++ : oScore++;
      restartGame();
    }

    if (currentPlayer === X_PLAYER) {
      currentPlayer = O_PLAYER;
    } else {
      currentPlayer = X_PLAYER;
    }
  } else {
    // alert("Can't choose that!");
    return;
  }
  // console.log(currentPlayer)
}
function checkWinner() {
  for (combo of winningCombos) {
    let [a, b, c] = combo;
    // console.log(combo)
    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return [a, b, c];
    }
  }
  // spaces.forEach(function (arr) {
  if (spaces.indexOf(null) === -1) {
    restartGame();
    // alert("Tie Game!");
    header.innerText = "It's a Tie!";
  }
  return false;
}

//restart function
function restartGame() {
  if (checkWinner !== false) {
    playAgain.style.display = "block";
  }
  playAgain.addEventListener("click", initialize);
  gameboard.style.display = "none";
}
