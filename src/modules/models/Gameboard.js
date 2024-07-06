export default class Gameboard {
  static ROW = 10;
  static COLUMN = 10;

  constructor(row = Gameboard.ROW, column = Gameboard.COLUMN) {
    this.grid = new Array(row).fill(Array(column).fill(null));
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

    if (targetCell === 1) return false;
    if (targetCell === null) {
      this.grid[x - 1][y - 1] = 1;  // Record missed attack
    } else {
      targetCell.hit(); 
    }

    return true;
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
