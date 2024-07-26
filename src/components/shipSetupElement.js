export default function shipSetupElement() {
  const shipSetup = document.createElement("div");
  shipSetup.id = "ship-menu";

  shipSetup.innerHTML = `
    <div class="menu-head">
      <h2>Available Ships</h2>
      <div class="tooltip">
        <span>Drag and drop your ships on gameboard to position them.</span> 
        <span>Click on ship's to change ship orientation.</span>
      </div>
    </div>
    <div class="ship-container">
        <div>Prowlers:</div>
        <div class="ships-wrapper">
            <div class="object-wrapper" id="prowler1">
              <div class="game-object" data-length="1"></div>
            </div>
            <div class="object-wrapper" id="prowler2">
              <div class="game-object" data-length="1"></div>
            </div>
            <div class="object-wrapper" id="prowler3">
              <div class="game-object" data-length="1"></div>
            </div>
            <div class="object-wrapper" id="prowler4">
              <div class="game-object" data-length="1"></div>
            </div>
        </div>
        <div>Sea Serpent:</div>
        <div class="ships-wrapper">
            <div class="object-wrapper" id="serpent1">
              <div class="game-object" data-length="2"></div>
            </div>
            <div class="object-wrapper" id="serpent2">
              <div class="game-object" data-length="2"></div>
            </div>
            <div class="object-wrapper" id="serpent3">
              <div class="game-object" data-length="2"></div>
            </div>
        </div>
        <div>Tempest Titan:</div>
        <div class="ships-wrapper">
            <div class="object-wrapper" id="titan1">
              <div class="game-object" data-length="3"></div>
            </div>
            <div class="object-wrapper" id="titan2">
              <div class="game-object" data-length="3"></div>
            </div>
        </div>
        <div>Leaviathan Lord:</div>
        <div class="ships-wrapper">
            <div class="object-wrapper" id="lord1">
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
    });
  }, 0);

  return shipSetup;
}
