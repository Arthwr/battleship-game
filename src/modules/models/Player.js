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
    const { rowCount, columnCount } = this.gameBoard.getDimensions();

    for (let resetCount = 0; resetCount < maxResets; resetCount++) {
      this.gameBoardHistory.clear();
      this.gameBoard.clear();

      console.log("Took another full reset");
      let success = true;
      for (const ship of SHIPS) {
        for (let i = 0; i < ship.count; i++) {
          let placed = false;
          let attempts = 0;

          while (!placed && attempts < maxAttemptsPerShip) {
            const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
            const row = Math.floor(Math.random() * (rowCount - 1)) + 1;
            const col = Math.floor(Math.random() * (columnCount - 1)) + 1;
            const coordinates = calculateShipCoordinates(
              ship.length,
              direction,
              row,
              col
            );
            if (
              isWithinBounds(row, col, direction, ship.length) &&
              isValidPlacement(coordinates, this.gameBoardHistory)
            ) {
              this.gameBoard.place(
                new Ship(ship.length, ship.name),
                coordinates
              );
              coordinates.forEach(([x, y]) => {
                this.gameBoardHistory.add(`${x},${y}`);
              });
              placed = true;
            }
            attempts++;
          }

          if (!placed) {
            success = false;
            break;
          }
        }
        if (!success) break;
      }
      if (success) return;
    }
    throw new Error("Failed to place all ships after multiple resets");
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
