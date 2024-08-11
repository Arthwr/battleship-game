import { SHIPS } from "../data/constants";
import Ship from "./Ship";
import calculateShipCoordinates from "../../utils/calculateShipCoordinates";
import isWithinBounds from "../../utils/isWithinBounds";
import isValidPlacement from "../../utils/isValidPlacement";

export class Player {
  constructor(gameBoard = null, name) {
    this.gameBoard = gameBoard;
    this.name = name;
  }

  grid() {
    return this.gameBoard ? this.gameBoard.grid : null;
  }
}

export class HumanPlayer extends Player {
  constructor(gameBoard = null, name) {
    super(gameBoard, name);
  }
}

export class ComputerPlayer extends Player {
  constructor(gameBoard = null) {
    super(gameBoard, "computer");
    this.attackHistory = new Set();
    this.gameBoardHistory = new Set();
    this.populateGameBoard();
  }

  populateGameBoard() {
    const maxAttemptsPerShip = 50;
    const maxResets = 10;

    for (let resetCount = 0; resetCount < maxResets; resetCount++) {
      if (this.attemptToPlaceAllShips(maxAttemptsPerShip)) {
        return;
      }
      console.log("Taking another reset attempt: ", resetCount);
      this.resetGameBoard();
    }
    throw new Error("Failed to place all ships after multiple resets");
  }

  attemptToPlaceAllShips(maxAttemptsPerShip) {
    for (const ship of SHIPS) {
      for (let i = 0; i < ship.count; i++) {
        if (!this.placeSingleShip(ship, maxAttemptsPerShip)) {
          return false;
        }
      }
    }

    return true;
  }

  placeSingleShip(ship, maxAttemptsPerShip) {
    const { rowCount, columnCount } = this.gameBoard.getDimensions();

    for (let attempts = 0; attempts < maxAttemptsPerShip; attempts++) {
      const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
      const row = Math.floor(Math.random() * (rowCount - 1)) + 1;
      const col = Math.floor(Math.random() * (columnCount - 1)) + 1;
      const coordinates = calculateShipCoordinates(ship.length, direction, row, col);

      if (isWithinBounds(row, col, direction, ship.length) && isValidPlacement(coordinates, this.gameBoardHistory)) {
        this.placeShipOnBoard(ship, coordinates);
        return true;
      }
    }

    return false;
  }

  placeShipOnBoard(ship, coordinates) {
    this.gameBoard.place(new Ship(ship.length, ship.name), coordinates);
    coordinates.forEach(([x, y]) => {
      this.gameBoardHistory.add(`${x},${y}`);
    });
  }

  resetGameBoard() {
    this.gameBoardHistory.clear();
    this.gameBoard.clear();
  }

  chooseRandomMove(opponentGameBoard) {
    let row, col;
    const { rowCount, columnCount } = opponentGameBoard.getDimensions();

    do {
      row = Math.floor(Math.random() * (rowCount - 1)) + 1;
      col = Math.floor(Math.random() * (columnCount - 1)) + 1;
    } while (this.attackHistory.has(`${row}, ${col}`));

    this.attackHistory.add(`${row}, ${col}`);
    return [row, col];
  }
}
