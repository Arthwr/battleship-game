import grid from "../../components/grid";
import introElement from "../../components/introElement";
import resultElement from "../../components/resultElement";
import shipSetupElement from "../../components/shipSetupElement";

export default class View {
  constructor() {
    this.gameWrapper = document.querySelector(".wrapper");
    this.gameContainer = document.getElementById("game-container");
    this.gameGrid = [];
  }

  // Display methods
  displayGameGrid(players) {
    const combinedGridHTML = grid(players);
    this.gameContainer.innerHTML = combinedGridHTML;
    this.gameGrid = document.querySelectorAll(".grid");
  }

  displayPlayerShips(player) {
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

  showIntroScreen() {
    this.gameContainer.innerHTML = "";
    const { intro, form } = introElement();
    this.gameContainer.appendChild(intro);
    return form;
  }

  showGameResult(winner) {
    const winnerMsg = resultElement(winner);
    this.gameWrapper.prepend(winnerMsg);
  }

  showShipSetupView(player) {
    if (player.name !== "computer") {
      this.gameContainer.innerHTML = ``;
      const shipMenu = shipSetupElement();
      this.gameWrapper.prepend(shipMenu);
      this.displayGameGrid(player);
      this.attachShipDirectionListeners();
    }
  }

  showGameView(players, currentPlayer) {
    this.gameContainer.innerHTML = "";
    this.displayGameGrid(players);
    players.forEach((player) => this.displayPlayerShips(player));
    this.highlightCurrentPlayerLabel(currentPlayer);
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

  highlightCurrentPlayerLabel(currentPlayer) {
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

  // Utility methods
  toggleNameLabel(event) {
    const labelInput = event.target
      .closest(".menu-col")
      .querySelector('label[for$="-name"');
    labelInput.classList.toggle("disabled-label");
  }

  toggleShipDirection(event) {
    const ship = event.currentTarget;
    if (!ship.closest(".game-cell")) return;

    const gameObject = ship.querySelector(".game-object");
    if (ship.dataset.direction === "horizontal") {
      ship.dataset.direction = "vertical";
      gameObject.style.flexDirection = "column";
    } else {
      ship.dataset.direction = "horizontal";
      gameObject.style.flexDirection = "row";
    }
  }

  attachShipDirectionListeners() {
    const shipWrappers = document.querySelectorAll(".ship-wrapper");
    shipWrappers.forEach((ship) => {
      ship.addEventListener("click", this.toggleShipDirection);
    });
  }
}
