export default class GameController {
  constructor(players, view) {
    this.players = players;
    this.currentPlayer = this.players[0];
    this.view = view;
    this.computerAttacks = new Set();
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.players[0]
        ? this.players[1]
        : this.players[0];
  }

  handleBoardClick(player, coordinates) {
    if (this.currentPlayer !== player) {
      const gameBoard = player.gameBoard;
      const attackStatus = gameBoard.receiveAttack(coordinates);

      if (attackStatus === "already_attacked") return;

      this.view.updateCell(player.name, coordinates, attackStatus);
      this.switchPlayer();
      this.triggerComputerTurn();
    }
  }

  triggerComputerTurn() {
    if (this.currentPlayer.name === "Computer") {
      setTimeout(() => {
        this.computerTurn();
      }, 1000);
    }
  }

  computerTurn() {
    let attackOnRow, attackOnCol;
    const userPlayer = this.players[0];
    const { rowCount, columnCount } = userPlayer.gameBoard.getDimensions();

    do {
      attackOnRow = Math.floor(Math.random() * (rowCount - 1)) + 1;
      attackOnCol = Math.floor(Math.random() * (columnCount - 1)) + 1;
    } while (this.computerAttacks.has(`${attackOnRow}, ${attackOnCol}`));

    this.computerAttacks.add(`${attackOnRow}, ${attackOnCol}`);
    this.handleBoardClick(this.players[0], [attackOnRow, attackOnCol]);
  }

  attachListeners() {
    const computerGrid = this.view.gameGrid[1];
    computerGrid.addEventListener("click", (event) => {
      const cell = event.target.closest(".game-cell");
      if (cell) {
        const player = this.players[1];
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        this.handleBoardClick(player, [row, col]);
      }
    });
  }

  setupNewGame() {
    this.view.updateView(this.players);
    this.attachListeners();
  }
}
