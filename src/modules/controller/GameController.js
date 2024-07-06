export default class GameController {
  constructor(players, view) {
    this.players = players;
    this.view = view;
  }
  
  setupNewGame() {
    this.view.updateView(this.players);
  }
}
