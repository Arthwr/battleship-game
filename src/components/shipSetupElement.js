export default function shipSetupElement() {
  const shipSetup = document.createElement("div");
  shipSetup.id = "ship-menu";

  shipSetup.innerHTML = `
    <h2>Available Ships</h2>
    <div>
        <div>Prowlers:</div>
        <div class="ships-wrapper">
            <div class="object-wrapper">
              <div class="game-object" data-length="1"></div>
            </div>
            <div class="object-wrapper">
              <div class="game-object" data-length="1"></div>
            </div>
            <div class="object-wrapper">
              <div class="game-object" data-length="1"></div>
            </div>
            <div class="object-wrapper">
              <div class="game-object" data-length="1"></div>
            </div>
        </div>
        <div>Sea Serpent:</div>
        <div class="ships-wrapper">
            <div class="object-wrapper">
              <div class="game-object" data-length="2"></div>
            </div>
            <div class="object-wrapper">
              <div class="game-object" data-length="2"></div>
            </div>
            <div class="object-wrapper">
              <div class="game-object" data-length="2"></div>
            </div>
        </div>
        <div>Tempest Titan:</div>
        <div class="ships-wrapper">
            <div class="object-wrapper">
              <div class="game-object" data-length="3"></div>
            </div>
            <div class="object-wrapper">
              <div class="game-object" data-length="3"></div>
            </div>
        </div>
        <div>Leaviathan Lord:</div>
        <div class="ships-wrapper">
            <div class="object-wrapper">
              <div class="game-object" data-length="4"></div>
            </div>
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

      const objWrapper = ship.closest(".object-wrapper");
      objWrapper.style.width = `${length * 2}rem`;
      objWrapper.setAttribute("draggable", "true");
    });
  }, 0);

  return shipSetup;
}
