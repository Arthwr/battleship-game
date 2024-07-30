export default class GameController {
  constructor(game, view) {
    this.game = game;
    this.view = view;

    this.handleGridClick = this.handleGridClick.bind(this);
    this.handleFormStartClick = this.handleFormStartClick.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }

  init() {
    this.view.showPlayersForm(this.handleFormStartClick);
  }

  setupPlayerFleet() {
    const humanPlayers = this.game.getHumanPlayers();
    this.view.showShipSetup(humanPlayers);
  }

  setupNewGame() {
    const players = this.game.getPlayers();
    const currentPlayer = this.game.getCurrentPlayer();
    this.view.showGameView(players, currentPlayer);
    this.#attachGameBoardListeners();
  }

  handleGridClick(event) {
    // Prevent humanPlayer click on gameboard during computer turn
    const currentPlayer = this.game.getCurrentPlayer();
    if (currentPlayer.name === "computer") return;

    const cell = event.target.closest(".game-cell");
    if (cell) {
      const coordinates = [cell.dataset.row, cell.dataset.col];
      this.handleMove(coordinates, event);
    }
  }

  handleFormStartClick(form) {
    const playersData = form.querySelectorAll(".menu-col");
    this.game.setupPlayers(playersData);
    this.setupPlayerFleet();
  }

  handleMove(coordinates, event = null) {
    const currentPlayer = this.game.getCurrentPlayer();

    // Check if the humanPlayer is trying to attack their own board
    if (event) {
      const activeGrid = event.target.closest(".grid");
      if (activeGrid.id === currentPlayer.name) return;
    }

    const moveResult = this.game.processMove(coordinates);
    if (!moveResult) return;

    const { opponentName, status } = moveResult;
    this.view.updateGameCell(opponentName, coordinates, status);

    const turnResult = this.game.checkWinner(status);
    if (turnResult) {
      this.#handleGameEnd(turnResult);
    }

    this.#handlePlayerLabelUpdate();
    this.game.endTurn(status, this.handleMove);
  }

  #handleGameEnd(winner) {
    this.#removeGameBoardListeners();
    this.view.showGameResult(winner);
  }

  #handlePlayerLabelUpdate() {
    const currentPlayer = this.game.getCurrentPlayer();
    this.view.updatePlayerLabel(currentPlayer);
  }

  #attachGameBoardListeners() {
    this.view.gameGrid.forEach((grid) => {
      grid.addEventListener("click", this.handleGridClick);
    });
  }

  #removeGameBoardListeners() {
    this.view.gameGrid.forEach((grid) => {
      grid.removeEventListener("click", this.handleGridClick);
    });
  }
}
