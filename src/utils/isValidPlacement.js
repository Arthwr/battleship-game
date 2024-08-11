import { GameBoardConfig } from "../modules/data/constants";

export default function isValidPlacement(coordinates, occupiedCells) {
  const bufferZone = getBufferZone(coordinates);

  for (const [x, y] of coordinates) {
    if (occupiedCells.has(`${x},${y}`)) {
      return false;
    }
  }

  for (const bufferCell of bufferZone) {
    if (occupiedCells.has(bufferCell)) {
      return false;
    }
  }
  
  return true;
}

// prettier-ignore
function getBufferZone(positions) {
  const bufferZone = new Set();

  for (const [x, y] of positions) {
    const surroundingCells = [
        [x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1], // adjacent cells
        [x - 1, y - 1], [x - 1, y + 1], [x + 1, y - 1], [x + 1, y + 1] // diagonal cells
    ];

    surroundingCells.forEach(([x, y]) => {
      if (isCellWithinBounds(x, y)) {
        bufferZone.add(`${x},${y}`);
      }
    });
  }

  return bufferZone;
}

// prettier-ignore
function isCellWithinBounds(x, y) {
    return x >= 1 && x <= GameBoardConfig.MAX_ROWS && y >= 1 && y <= GameBoardConfig.MAX_COLUMNS;
}
