import createGrid from "../../components/createGrid";
import createFormElement from "../../components/createFormElement";
import createResultElement from "../../components/createResultElement";
import createShipSetupElement from "../../components/createShipSetupElement";
import DragAndDropManager from "./DragAndDropManager";
import isWithinBounds from "../../utils/isWithinBounds";

export default class View {
  constructor() {
    this.DragAndDropManager = new DragAndDropManager();
    this.gameWrapper = document.querySelector(".wrapper");
    this.gameContainer = document.getElementById("game-container");
    this.gridHTML = [];

    this.toggleShipDirection = this.toggleShipDirection.bind(this);
    this.toggleFormNameLabel = this.toggleFormNameLabel.bind(this);
    this.toggleNameLabel = this.toggleNameLabel.bind(this);
  }

  showPlayersForm(callBackHandler) {
    this.gameContainer.innerHTML = "";

    const form = this.#createPlayersForm();
    this.gameContainer.appendChild(form);

    this.#setupFormListeners(form, callBackHandler);
  }

  showShipSetup(player, callback) {
    this.gameContainer.innerHTML = "";
    this.gameWrapper.style.flexDirection = "row";
    this.#clearMenu();

    const shipSetupElement = createShipSetupElement();
    this.gameWrapper.prepend(shipSetupElement);
    this.#displayGameGrid(player);
    this.#setupShipDirectionListeners();
    this.#setupShipConfirmationListener(callback);
    this.DragAndDropManager.setupDragAndDrop(this.gridHTML);
  }

  showGameView(players, currentPlayer) {
    this.gameContainer.innerHTML = "";
    this.gameWrapper.style.flexDirection = "column";
    this.#clearMenu();
    
    this.#displayGameGrid(players);
    players.forEach((player) => this.#displayPlayerShips(player));
    this.updatePlayerLabel(currentPlayer);
  }

  showGameResult(winner) {
    const result = createResultElement(winner);
    this.gameWrapper.prepend(result);
  }

  // Update methods
  updateGameCell(playerName, coordinates, status) {
    const [row, col] = coordinates;
    const cellSelector = `.row[data-row="${row}"] .game-cell[data-col="${col}"]`;
    const gameBoard = document.getElementById(playerName);
    const cell = gameBoard.querySelector(cellSelector);

    switch (status) {
      case "missed":
        cell.classList.add("missed");
        break;
      case "hit":
        cell.classList.add("hit");
        break;
      default:
        console.log(`Unknown status ${status}`);
    }
  }

  updatePlayerLabel(currentPlayer) {
    const previousActiveLabel = document.querySelector(".player-label.active");
    if (previousActiveLabel) {
      previousActiveLabel.classList.remove("active");
    }

    const currentPlayerLabel = document.querySelector(
      `.player-label[data-player=${currentPlayer.name}]`
    );
    if (currentPlayerLabel) {
      currentPlayerLabel.classList.add("active");
    }
  }

  // Utility
  toggleShipDirection(event) {
    const ship = event.currentTarget;
    const gameObject = ship.querySelector(".game-object");
    const gameCell = gameObject.closest(".game-cell");

    if (!gameCell) return;

    const { direction: currentDirection, length } = ship.dataset;
    const isHorizontal = currentDirection === "horizontal";

    const newDirection = isHorizontal ? "vertical" : "horizontal";

    const isWithinGameBounds = isWithinBounds(
      gameCell.dataset.row,
      gameCell.dataset.col,
      newDirection,
      length
    );

    if (isWithinGameBounds) {
      ship.dataset.direction = newDirection;
      gameObject.style.flexDirection = isHorizontal ? "column" : "row";

      // Swap height with width based on direction
      if (isHorizontal) {
        ship.style.height = ship.style.width;
        ship.style.width = "2rem";
      } else {
        ship.style.width = ship.style.height;
        ship.style.height = "2rem";
      }
    }
  }

  toggleFormNameLabel(event) {
    const isComputer = event.target.value === "computer";
    const nameInput = event.target
      .closest(".menu-col")
      .querySelector('input[type="text"]');
    nameInput.disabled = isComputer;
    this.toggleNameLabel(event);
  }

  toggleNameLabel(event) {
    const labelInput = event.target
      .closest(".menu-col")
      .querySelector('label[for$="-name"');
    labelInput.classList.toggle("disabled-label");
  }

  #clearMenu() {
    const menu = document.getElementById("ship-menu");
    if (menu) menu.remove();
  }

  #setupShipConfirmationListener(callback) {
    const button = document.querySelector(".confirm-ships-btn");
    button.addEventListener("click", callback);
  }

  #setupShipDirectionListeners() {
    const shipWrappers = document.querySelectorAll(".ship-wrapper");
    shipWrappers.forEach((ship) => {
      ship.addEventListener("click", this.toggleShipDirection);
    });
  }

  // Form Handling
  #createPlayersForm() {
    this.gameContainer.innerHTML = "";
    const form = createFormElement();

    return form;
  }

  #setupFormListeners(form, clickCallback) {
    const playerTypeSelectors = form.querySelectorAll('select[name$="-type"]');
    playerTypeSelectors.forEach((select) => {
      select.addEventListener("change", (event) => {
        this.toggleFormNameLabel(event);
      });
    });

    const startGameBtn = form.querySelector('button[type="submit"]');
    startGameBtn.addEventListener("click", (e) => {
      e.preventDefault();
      clickCallback(form);
    });
  }

  // Display methods
  #displayGameGrid(players) {
    const combinedGridHTML = createGrid(players);
    this.gameContainer.innerHTML = combinedGridHTML;
    this.gridHTML = document.querySelectorAll(".grid");
  }

  #displayPlayerShips(player) {
    console.log(player);
    const gameBoard = player.grid();
    if (gameBoard !== null) {
      gameBoard.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell.ship && typeof cell.ship === "object") {
            const rowToRender = rowIndex + 1;
            const colToRender = colIndex + 1;
            const cellSelector = `.row[data-row="${rowToRender}"] .game-cell[data-col="${colToRender}"]`;
            const gameBoard = document.getElementById(player.name);
            const cell = gameBoard.querySelector(cellSelector);
            cell.classList.add("ship");
          }
        });
      });
    }
  }
}
