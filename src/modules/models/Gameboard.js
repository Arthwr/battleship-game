export default class Gameboard {
  constructor(row, column) {
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
    targetCell !== null ? targetCell.hit() : (this.grid[x - 1][y - 1] = 1);
  }
}
