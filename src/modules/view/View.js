import grid from "../../components/grid";

export default class View {
  constructor() {
    this.gameContainer = document.getElementById("game-container");
  }

  renderGrid(players) {
    const combinedGridHTML = grid(players);
    this.gameContainer.innerHTML = combinedGridHTML;
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

  updateView(players) {
    this.gameContainer.innerHTML = "";
    this.renderGrid(players);
    players.forEach((player) => this.renderShips(player));
  }
}
