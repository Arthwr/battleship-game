export default function createShipSetupElement() {
  const shipSetup = document.createElement("div");
  shipSetup.id = "ship-menu";

  shipSetup.innerHTML = `
    <div class="menu-head">
      <h2>Available Ships</h2>
      <div class="tooltip">
        <span>Drag and drop your ships on the gameboard to position them.</span> 
        <span>Click on ships to change their orientation.</span>
      </div>
    </div>
    <div class="ship-container">
        <div>Prowlers:</div>
        <div class="ship-bay">
            <div class="ship-wrapper" id="prowler-1" data-length="1" data-direction="horizontal">
              <div class="game-object"></div>
            </div>
            <div class="ship-wrapper" id="prowler-2" data-length="1" data-direction="horizontal">
              <div class="game-object"></div>
            </div>
            <div class="ship-wrapper" id="prowler-3" data-length="1" data-direction="horizontal">
              <div class="game-object"></div>
            </div>
            <div class="ship-wrapper" id="prowler-4" data-length="1" data-direction="horizontal">
              <div class="game-object"></div>
            </div>
        </div>
        <div>Sea Serpent:</div>
        <div class="ship-bay">
            <div class="ship-wrapper" id="serpent-1" data-length="2" data-direction="horizontal">
              <div class="game-object"></div>
            </div>
            <div class="ship-wrapper" id="serpent-2" data-length="2" data-direction="horizontal">
              <div class="game-object"></div>
            </div>
            <div class="ship-wrapper" id="serpent-3" data-length="2" data-direction="horizontal">
              <div class="game-object"></div>
            </div>
        </div>
        <div>Tempest Titan:</div>
        <div class="ship-bay">
            <div class="ship-wrapper" id="titan-1" data-length="3" data-direction="horizontal">
              <div class="game-object"></div>
            </div>
            <div class="ship-wrapper" id="titan-2" data-length="3" data-direction="horizontal">
              <div class="game-object"></div>
            </div>
        </div>
        <div>Leaviathan Lord:</div>
        <div class="ship-bay">
            <div class="ship-wrapper" id="lord-1" data-length="4" data-direction="horizontal">
              <div class="game-object"></div>
            </div>
        </div>
    </div>  
    <button class="confirm-ships-btn">Confirm ship placement</button>
    <span class="error-msg"></span>
  `;

  setTimeout(() => {
    const ships = shipSetup.querySelectorAll(".ship-wrapper");
    ships.forEach((ship) => {
      const length = ship.getAttribute("data-length");
      if (length) {
        for (let i = length; i > 0; i--) {
          const shipObject = ship.querySelector(".game-object");
          const shipCell = document.createElement("div");
          shipCell.classList.add("ship-cell");
          shipObject.appendChild(shipCell);
        }
      }

      ship.style.width = `${length * 2}rem`;
    });
  }, 0);

  return shipSetup;
}
