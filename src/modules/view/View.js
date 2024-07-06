import grid from "../../components/grid";

export default class View {
  constructor() {
    this.gameContainer = document.getElementById("game-container");
  }

  updateView(players) {
    this.gameContainer.innerHTML = "";
    this.renderGrid(players)
  }

  renderGrid(players) {
    const combinedGridHTML = grid(players);
    this.gameContainer.innerHTML = combinedGridHTML;
  }
}
