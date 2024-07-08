export default class GameController {
  constructor(players, view) {
    this.players = players;
    this.view = view;
  }

  handleBoardClick(player, coordinates) {
    const gameBoard = player.gameBoard;
    const attackStatus = gameBoard.receiveAttack(coordinates);
    this.view.updateCell(player.name, coordinates, attackStatus);
  }

  attachListeners() {
    const gridList = this.view.gameGrid;
    gridList.forEach((grid, index) => {
      grid.addEventListener("click", (event) => {
        const cell = event.target.closest(".game-cell")
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
