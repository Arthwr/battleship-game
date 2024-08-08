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

  // prettier-ignore
  populateGameBoard() {
    const { rowCount, columnCount } = this.gameBoard.getDimensions();

    for (const ship of SHIPS) {
      for (let i = 0; i < ship.count; i++) {
        let placed = false;

        while (!placed) {
          const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
          const row = Math.floor(Math.random() * (rowCount - 1)) + 1;
          const col = Math.floor(Math.random() * (columnCount - 1)) + 1;
          const coordinates = calculateShipCoordinates(ship.length, direction, row, col);

          if (isWithinBounds(row, col, direction, ship.length) && isValidPlacement(coordinates, this.gameBoardHistory)) {
            this.gameBoard.place(new Ship(ship.length), coordinates);
            coordinates.forEach(([x, y])=> {
              this.gameBoardHistory.add(`${x},${y}`);
            })
            placed = true;
          }
        }
      }
    }
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
