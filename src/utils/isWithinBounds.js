import { GameBoardConfig } from "../modules/data/constants";

export default function isWithinBounds(row, col, direction, length) {
  const [maxRow, maxCol] = [GameBoardConfig.MAX_ROWS, GameBoardConfig.MAX_COLUMNS];
  length = Number(length);
  row = Number(row);
  col = Number(col);

  return direction === "horizontal"
    ? col >= 0 && col + length - 1 <= maxCol
    : row >= 0 && row + length - 1 <= maxRow;
}
