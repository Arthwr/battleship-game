import PlayerFactory from "../models/factories/PlayerFactory";
import DragAndDropManager from "../controller/DragAndDropManager";

export default class GameController {
  constructor(players, view) {
    this.view = view;
    this.dragAndDropManager = new DragAndDropManager();
    this.players = players;
    this.currentPlayer = null;
  }

  // Initialization

  initApp() {
    const form = this.view.showIntroScreen();
    this.setupFormListeners(form);
  }

  setupPlayersFleet() {
    const humanPlayers = this.players.filter(
      (player) => player.name !== "computer"
    );
    this.view.showShipSetupView(humanPlayers);
    this.dragAndDropManager.setupDragAndDrop(this.view.gameGrid);
  }

  setupNewGame() {
    this.view.showGameView(this.players, this.currentPlayer);
    this.attachGameBoardListeners();
  }

  // Player management

  assignPlayers(playersData) {
    const playersArray = [...playersData];
    this.players = playersArray.map((playersData) =>
      PlayerFactory.createPlayer(playersData)
    );

    // Set initial player currentPlayer after player creation
    this.currentPlayer =
      this.players.find((player) => player.name !== "computer") ||
      this.players[0];
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.players[0]
        ? this.players[1]
        : this.players[0];
    this.view.updatePlayerLabel(this.currentPlayer);
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

    this.view.updateGameCell(opponent.name, coordinates, attackStatus);
    this.endTurn(attackStatus);
  }

  endTurn(attackStatus) {
    const winner = this.getWinner();
    if (winner) return this.endGame(winner);

    // Extra turn for current player for successful hit on a ship
    if (attackStatus !== "hit") this.switchPlayer();

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

  // Game State

  getWinner() {
    if (this.players[0].gameBoard.isClear()) return this.players[1].name;
    if (this.players[1].gameBoard.isClear()) return this.players[0].name;
    return null;
  }

  endGame(winner) {
    this.removeGameBoardListeners();
    this.view.showGameResult(winner);
  }

  // Event handling

  handleGridClick = (event) => {
    if (this.currentPlayer.name === "computer") return;

    const cell = event.target.closest(".game-cell");
    if (cell) {
      const coordinates = [cell.dataset.row, cell.dataset.col];
      this.processMove(coordinates, event);
    }
  };

  attachGameBoardListeners() {
    this.view.gameGrid.forEach((grid) => {
      grid.addEventListener("click", this.handleGridClick);
    });
  }

  removeGameBoardListeners() {
    this.view.gameGrid.forEach((grid) => {
      grid.removeEventListener("click", this.handleGridClick);
    });
  }

  // Form Handling
  setupFormListeners(form) {
    const playerTypeSelectors = form.querySelectorAll('select[name$="-type"]');
    playerTypeSelectors.forEach((select) => {
      select.addEventListener("change", (event) => {
        this.toggleNameInputState(event);
      });
    });

    const startGameBtn = form.querySelector('button[type="submit"]');
    startGameBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.handleStartClick(form);
    });
  }

  handleStartClick(form) {
    const playerFormsData = form.querySelectorAll(".menu-col");
    this.assignPlayers(playerFormsData);
    this.setupPlayersFleet();
  }

  toggleNameInputState(event) {
    const isComputer = event.target.value === "computer";
    const nameInput = event.target
      .closest(".menu-col")
      .querySelector('input[type="text"]');
    nameInput.disabled = isComputer;
    this.view.toggleNameLabel(event);
  }
}
