import { GameBoardConfig } from "../modules/data/constants";

export default function getBufferZone(positions) {
  const bufferZone = new Set();

  for (const [x, y] of positions) {
    // prettier-ignore
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

function isCellWithinBounds(x, y) {
  return x >= 1 && x <= GameBoardConfig.MAX_ROWS && y >= 1 && y <= GameBoardConfig.MAX_COLUMNS;
}
