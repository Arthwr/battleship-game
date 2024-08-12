import getBufferZone from "./getBufferZone";

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
