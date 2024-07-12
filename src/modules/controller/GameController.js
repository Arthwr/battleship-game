export default class GameController {
  constructor(players, view) {
    this.players = players;
    this.view = view;
    this.currentPlayer =
      this.players.find((player) => player.name !== "computer") ||
      this.players[0];
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.players[0]
        ? this.players[1]
        : this.players[0];
  }

  getOpponent() {
    return this.players.find((player) => player !== this.currentPlayer);
  }

  processMove(coordinates, event = null) {
    if (event) {
      // Check if the humanPlayer is trying to attack their own board
      const clickedGrid = event.target.closest(".grid");
      if (clickedGrid.id === this.currentPlayer.name) return;
    }

    const opponent = this.getOpponent();
    const gameBoard = opponent.gameBoard;
    const attackStatus = gameBoard.receiveAttack(coordinates);

    if (attackStatus === "already_attacked") return;

    this.view.updateCell(opponent.name, coordinates, attackStatus);
    this.endTurn();
  }

  getWinner() {
    if (this.players[0].gameBoard.isClear()) return this.players[1].name;
    if (this.players[1].gameBoard.isClear()) return this.players[0].name;
    return null;
  }

  endTurn() {
    const winner = this.getWinner();
    if (winner) return this.endGame(winner);

    this.switchPlayer();

    if (this.currentPlayer.name === "computer") {
      setTimeout(() => {
        this.computerTurn();
      }, 1000);
    }
  }

  computerTurn() {
    const opponentGameBoard = this.getOpponent().gameBoard;
    const move = this.currentPlayer.chooseMove(opponentGameBoard);
    if (move) {
      this.processMove(move);
    }
  }

  handleGridClick = (event) => {
    if (this.currentPlayer.name === "computer") return;

    const cell = event.target.closest(".game-cell");
    if (cell) {
      const row = cell.dataset.row;
      const col = cell.dataset.col;
      this.processMove([row, col], event);
    }
  };

  attachGameBoardListeners() {
    this.view.gameGrid.forEach((grid) => {
      grid.addEventListener("click", this.handleGridClick);
    });
  }

  endGame(winner) {
    this.view.gameGrid.forEach((grid) => {
      grid.removeEventListener("click", this.handleGridClick);
    });
    console.log(`Game has ended! ${winner} won!`);
  }

  setupNewGame() {
    this.view.updateView(this.players);
    this.attachGameBoardListeners();
  }
}
