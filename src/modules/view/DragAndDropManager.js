import isWithinBounds from "../../utils/isWithinBounds";

export default class DragAndDropManager {
  constructor() {
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  // prettier-ignore
  handleDragStart(event) {
    event.stopPropagation(); 

    const ship = event.currentTarget;

    const shipId = ship.id;
    if (!shipId) {
      event.preventDefault();
      return;
    }

    const targetCell = document.elementFromPoint(event.clientX, event.clientY);
    const shipIndex = [...targetCell.parentNode.children].indexOf(targetCell);

    event.dataTransfer.setData("text/plain", JSON.stringify({ shipId, shipIndex }));
  }

  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  // prettier-ignore
  handleDrop(event) {
    event.preventDefault();
    
    const data = event.dataTransfer.getData("text/plain").trim();    
    if (!data) return;

    const { shipId, shipIndex } = JSON.parse(data);
    const ship = document.getElementById(shipId);
    const drop = event.target;

    if (!ship && !drop.classList.contains("game-cell")) return;

    const newPosition = this.calculateNewPosition(drop, ship.dataset.direction, shipIndex, ship.dataset.length);
    const dropZone = document.querySelector(newPosition);

    if (dropZone && event.target.classList.contains("game-cell")) {
      dropZone.appendChild(ship);
    }
  }

  setupDragAndDrop(gameGrid) {
    this.setupShipListeners();
    this.setupCellListeners(gameGrid);
  }

  setupShipListeners() {
    const ships = document.querySelectorAll(".ship-wrapper");
    ships.forEach((ship) => {
      ship.setAttribute("draggable", true);
      ship.addEventListener("dragstart", this.handleDragStart);
    });
  }

  setupCellListeners(gameGrid) {
    gameGrid.forEach((grid) => {
      if (grid.id !== "computer") {
        const gameCells = grid.querySelectorAll(".game-cell");
        gameCells.forEach((cell) => {
          cell.addEventListener("dragover", this.handleDragOver);
          cell.addEventListener("drop", this.handleDrop);
        });
      }
    });
  }

  // Utility
  calculateNewPosition(target, direction, offset, length) {
    const [row, col] = [Number(target.dataset.row), Number(target.dataset.col)];

    const [newRow, newCol] =
      direction === "horizontal" ? [row, col - offset] : [row - offset, col];

    if (isWithinBounds(newRow, newCol, direction, length)) {
      return `.game-cell[data-row="${newRow}"][data-col="${newCol}"]`;
    }
  }
}
