export default function calculateShipCoordinates(length, direction, row, col) {
  const coordinates = [];

  for (let i = 0; i < length; i++) {
    if (direction === "horizontal") {
      coordinates.push([row, col + i]);
    } else if (direction === "vertical") {
      coordinates.push([row + i, col]);
    }
  }

  return coordinates;
}
