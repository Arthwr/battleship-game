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
