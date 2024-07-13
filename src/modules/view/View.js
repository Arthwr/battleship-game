import grid from "../../components/grid";

export default class View {
  constructor() {
    this.gameContainer = document.getElementById("game-container");
    this.gameGrid = [];
  }

  renderGrid(players) {
    const combinedGridHTML = grid(players);
    this.gameContainer.innerHTML = combinedGridHTML;
    this.gameGrid = document.querySelectorAll(".grid");
  }

  renderSingleShip(row, col, boardId) {
    const cellSelector = `.row[data-row="${row}"] .game-cell[data-col="${col}"]`;
    const gameBoard = document.getElementById(boardId);
    const cell = gameBoard.querySelector(cellSelector);
    cell.classList.add("ship");
  }

  renderShips(player) {
    const gameBoard = player.grid();
    if (gameBoard !== null) {
      gameBoard.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell && typeof cell === "object") {
            const rowToRender = rowIndex + 1;
            const colToRender = colIndex + 1;
            this.renderSingleShip(rowToRender, colToRender, player.name);
          }
        });
      });
    }
  }

  updateCell(playerName, coordinates, status) {
    const [row, col] = coordinates;
    const cellSelector = `.row[data-row="${row}"] .game-cell[data-col="${col}"]`;
    const gameBoard = document.getElementById(playerName);
    const cell = gameBoard.querySelector(cellSelector);

    switch (status) {
      case "missed":
        cell.classList.add("missed");
        break;
      case "hit":
        cell.classList.add("hit");
        break;
      default:
        console.log(`Unknown status ${status}`);
    }
  }

  updatePlayerLabel(currentPlayer) {
    const previousActiveLabel = document.querySelector(".player-label.active");
    if (previousActiveLabel) {
      previousActiveLabel.classList.remove("active");
    }

    const currentPlayerLabel = document.querySelector(`.player-label[data-player=${currentPlayer.name}]`);
    if (currentPlayerLabel) {
      currentPlayerLabel.classList.add("active")
    }
  }

  updateView(players) {
    this.gameContainer.innerHTML = "";
    this.renderGrid(players);
    players.forEach((player) => this.renderShips(player));
  }
}
