export default class GameController {
  constructor(players, view) {
    this.players = players;
    this.currentPlayer = this.players[1];
    this.view = view;
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.players[0]
        ? (this.currentPlayer = this.players[1])
        : (this.currentPlayer = this.players[0]);
  }

  handleBoardClick(player, coordinates) {
    if (this.currentPlayer === player) {
      const gameBoard = player.gameBoard;
      const attackStatus = gameBoard.receiveAttack(coordinates);

      if (attackStatus === "already_attacked") return;
      this.view.updateCell(player.name, coordinates, attackStatus);
      this.switchPlayer();
    }
  }

  attachListeners() {
    const gridList = this.view.gameGrid;
    gridList.forEach((grid, index) => {
      grid.addEventListener("click", (event) => {
        const cell = event.target.closest(".game-cell");
        if (cell) {
          const player = this.players[index];
          const row = cell.dataset.row;
          const col = cell.dataset.col;
          this.handleBoardClick(player, [row, col]);
        }
      });
    });
  }

  setupNewGame() {
    this.view.updateView(this.players);
    this.attachListeners();
  }
}
