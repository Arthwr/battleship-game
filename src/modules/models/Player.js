export default class Player {
  constructor(name, gameBoard = null) {
    this.name = name;
    this.gameBoard = gameBoard;
  }

  grid() {
    return this.gameBoard ? this.gameBoard.grid : null;
  }
}
