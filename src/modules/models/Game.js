import PlayerFactory from "./factories/PlayerFactory";
import Ship from "./Ship";

export default class Game {
  #players;
  #currentPlayer;

  constructor() {
    this.#players = [];
    this.#currentPlayer = null;
  }

  getCurrentPlayer() {
    return this.#currentPlayer;
  }

  getPlayers() {
    return this.#players;
  }

  getHumanPlayers() {
    return this.#players.filter((player) => player.name !== "computer");
  }

  setupPlayers(playersData) {
    const playersArray = [...playersData];
    this.#players = playersArray.map((playersData) =>
      PlayerFactory.createPlayer(playersData)
    );
    this.#setFirstPlayer();
  }

  storePlayerShips(player, data) {
    data.forEach((ship) => {
      player.gameBoard.place(new Ship(ship.length), ship.coordinates);
    });
  }

  processMove(coordinates) {
    const opponent = this.#getNextPlayer();
    const attackStatus = opponent.gameBoard.receiveAttack(coordinates);
    if (attackStatus !== "already_attacked") {
      return { opponentName: opponent.name, status: attackStatus };
    }

    return null;
  }

  checkWinner() {
    if (this.#players[0].gameBoard.isClear()) return this.#players[1].name;
    if (this.#players[1].gameBoard.isClear()) return this.#players[0].name;

    return null;
  }

  endTurn(attackStatus, callback) {
    this.#determineNextPlayer(attackStatus);

    if (this.#currentPlayer.name === "computer") {
      setTimeout(() => {
        this.#performComputerTurn(callback);
      }, 1000);
    }
  }

  #performComputerTurn(callback) {
    const opponentGameBoard = this.#getNextPlayer().gameBoard;
    const computerMove =
      this.#currentPlayer.chooseRandomMove(opponentGameBoard);

    if (computerMove) {
      callback(computerMove);
    }
  }

  #setFirstPlayer() {
    this.#currentPlayer =
      this.#players.find((player) => player.name !== "computer") ||
      this.#players[0];
  }

  #getNextPlayer() {
    return this.#players.find((player) => player !== this.#currentPlayer);
  }

  #switchPlayer() {
    this.#currentPlayer = this.#getNextPlayer();
  }

  #determineNextPlayer(prevAttackStatus) {
    // Extra turn for successfull hit on a ship
    if (prevAttackStatus !== "hit") {
      this.#switchPlayer();
    }
  }
}
