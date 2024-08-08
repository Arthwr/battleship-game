import { GameBoardConfig } from "../data/constants";

export default class Gameboard {
  constructor(
    row = GameBoardConfig.MAX_ROWS,
    column = GameBoardConfig.MAX_COLUMNS
  ) {
    this.grid = Array.from({ length: row }, () =>
      new Array(column).fill(null).map(() => ({ ship: null, attacked: false }))
    );
  }

  getDimensions() {
    const rowCount = this.grid.length;
    const columnCount = this.grid[0].length;

    return { rowCount, columnCount };
  }

  place(ship, coordinates) {
    // Check if coordinates are single pair
    if (!Array.isArray(coordinates[0])) {
      const [x, y] = coordinates;
      this.grid[x - 1][y - 1] = { ship, attacked: false };
    } else {
      coordinates.forEach(([x, y]) => {
        this.grid[x - 1][y - 1] = { ship, attacked: false };
      });
    }
  }

  receiveAttack(coordinates) {
    const [x, y] = coordinates;
    const targetCell = this.grid[x - 1][y - 1];

    if (targetCell.attacked) return "already_attacked";

    targetCell.attacked = true;

    if (targetCell.ship === null) {
      return "missed";
    } else {
      targetCell.ship.hit();
      return "hit";
    }
  }

  isClear() {
    return this.grid.every((row) =>
      row.every(
        (cell) =>
          cell === 1 ||
          cell.ship === null ||
          (cell.attacked && cell.ship.isSunk())
      )
    );
  }
}
