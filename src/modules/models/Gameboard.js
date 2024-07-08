export default class Gameboard {
  static ROW = 10;
  static COLUMN = 10;

  constructor(row = Gameboard.ROW, column = Gameboard.COLUMN) {
    this.grid = Array.from({ length: row }, () => new Array(column).fill(null));
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
      this.grid[x - 1][y - 1] = ship;
    } else {
      coordinates.forEach(([x, y]) => {
        this.grid[x - 1][y - 1] = ship;
      });
    }
  }

  receiveAttack(coordinates) {
    const [x, y] = coordinates;
    const targetCell = this.grid[x - 1][y - 1];

    if (targetCell === 1) return "already_attacked";
    if (targetCell === null) {
      this.grid[x - 1][y - 1] = 1;
      return "missed";
    } else {
      targetCell.hit();
      return "hit";
    }
  }

  isClear() {
    return this.grid.every((row) =>
      row.every(
        (cell) =>
          cell === null ||
          cell === 1 ||
          (typeof cell === "object" && cell.isSunk())
      )
    );
  }
}
