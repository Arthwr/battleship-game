export default class GameController {
  constructor(game, view) {
    this.game = game;
    this.view = view;

    this.handleGridClick = this.handleGridClick.bind(this);
    this.handleShipSetup = this.handleShipSetup.bind(this);
    this.handleFormStartClick = this.handleFormStartClick.bind(this);
    this.handleMove = this.handleMove.bind(this);

    this.humanPlayersQueue = [];
  }

  init() {
    this.view.showPlayersForm(this.handleFormStartClick);
  }

  setupPlayerFleet(player) {
    this.view.showShipSetup(player, this.handleShipSetup);
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

  handleFormStartClick() {
    const playersData = document.querySelectorAll(".menu-col");
    this.game.setupPlayers(playersData);
    this.humanPlayersQueue = this.game.getHumanPlayers();
    this.handleShipSetup();
  }

  handleShipSetup() {
    if (this.view.hasUnplacedShips()) {
      const message = "Can't continue unless all ships are placed on gameboard";
      return this.view.showError(message);
    }

    if (this.humanPlayersQueue.length === 0) {
      return this.setupNewGame();
    }

    const nextPlayer = this.humanPlayersQueue.shift();
    this.setupPlayerFleet(nextPlayer);
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
      return this.#handleGameEnd(turnResult);
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
    this.view.gridHTML.forEach((grid) => {
      grid.addEventListener("click", this.handleGridClick);
    });
  }

  #removeGameBoardListeners() {
    this.view.gridHTML.forEach((grid) => {
      grid.removeEventListener("click", this.handleGridClick);
    });
  }
}
