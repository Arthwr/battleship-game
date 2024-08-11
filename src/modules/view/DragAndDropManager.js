import isWithinBounds from "../../utils/isWithinBounds";

export default class DragAndDropManager {
  constructor() {
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  // prettier-ignore
  handleDragStart(event) {
    event.stopPropagation();

    const ship = event.currentTarget;
    const shipId = ship.id;
    const targetCell = document.elementFromPoint(event.clientX, event.clientY);
    const shipIndex = [...targetCell.parentNode.children].indexOf(targetCell);

    event.dataTransfer.setData("text/plain", JSON.stringify({ shipId, shipIndex }));
    this.toggleElementVisibility(ship);
  }

  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";

    return false;
  }

  handleDragEnd(event) {
    const ship = event.currentTarget;
    this.toggleElementVisibility(ship);
  }

  // prettier-ignore
  handleDrop(event) {
    event.preventDefault();
    
    const data = event.dataTransfer.getData("text/plain");  
    const { shipId, shipIndex } = JSON.parse(data);
    const ship = document.getElementById(shipId);
    const drop = event.target;
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
      ship.addEventListener("dragend", this.handleDragEnd);
    });
  }

  setupCellListeners(gameGrid) {
    gameGrid.forEach((grid) => {
      if (grid.id !== "computer") {
        const gameCells = grid.querySelectorAll(".game-cell");
        gameCells.forEach((cell) => {
          cell.addEventListener("dragover", this.handleDragOver);
          cell.addEventListener("drop", this.handleDrop);
          this.disableUserSelect(cell);
        });
      }
    });
  }

  // Utility
  toggleElementVisibility(element) {
    setTimeout(() => {
      element.style.opacity = element.style.opacity === "0" ? "1" : "0";
    }, 0);
  }

  disableUserSelect(cell) {
    cell.style.userSelect = "none";
  }

  calculateNewPosition(target, direction, offset, length) {
    const [row, col] = [Number(target.dataset.row), Number(target.dataset.col)];

    const [newRow, newCol] =
      direction === "horizontal" ? [row, col - offset] : [row - offset, col];

    if (isWithinBounds(newRow, newCol, direction, length)) {
      return `.game-cell[data-row="${newRow}"][data-col="${newCol}"]`;
    }
  }
}
