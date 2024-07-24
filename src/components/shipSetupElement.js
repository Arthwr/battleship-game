export default function shipSetupElement() {
  const shipSetup = document.createElement("div");
  shipSetup.id = "ship-menu";

  shipSetup.innerHTML = `
    <h2>Available Ships</h2>
    <div>
        <div>Prowlers:</div>
        <div class="ships-wrapper">
            <div class="game-object draggable" data-length="1"></div>
            <div class="game-object draggable" data-length="1"></div>
            <div class="game-object draggable" data-length="1"></div>
            <div class="game-object draggable" data-length="1"></div>
        </div>
        <div>Sea Serpent:</div>
        <div class="ships-wrapper">
            <div class="game-object draggable" data-length="2"></div>
            <div class="game-object draggable" data-length="2"></div>
            <div class="game-object draggable" data-length="2"></div>
        </div>
        <div>Tempest Titan:</div>
        <div class="ships-wrapper">
            <div class="game-object draggable" data-length="3"></div>
            <div class="game-object draggable" data-length="3"></div>
        </div>
        <div>Leaviathan Lord:</div>
        <div class="ships-wrapper">
            <div class="game-object draggable" data-length="4"></div>
        </div>
    </div>  
  `;

  setTimeout(() => {
    const ships = shipSetup.querySelectorAll(".game-object");
    ships.forEach((ship) => {
      const length = ship.getAttribute("data-length");
      if (length) {
        for (let i = length; i > 0; i--) {
            const shipCell = document.createElement("div");
            shipCell.classList.add("ship");
            ship.appendChild(shipCell);
        }
      }
    });
  }, 0);

  return shipSetup;
}
