export default class DragAndDropManager {
  constructor() {
    this.dragStartHandler = this.dragStartHandler.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  dragStartHandler(event) {
    const shipElement = event.target.closest(".ship-wrapper");

    if (!shipElement) {
      event.preventDefault();
      return;
    }
    
    const shipId = shipElement.id;
    event.dataTransfer.setData("text/plain", shipId);
  }

  handleDragOver(event) {
    event.preventDefault();
  }

  handleDrop(event) {
    const shipId = event.dataTransfer.getData("text/plain");
    const shipElement = document.getElementById(shipId);

    if (shipElement && event.target.classList.contains("game-cell")) {
      event.preventDefault();
      event.target.appendChild(shipElement);
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
      ship.addEventListener("dragstart", this.dragStartHandler);
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
}
