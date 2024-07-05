export default class gameController {
  constructor(players, view) {
    this.players = players;
    this.view = view;
  }
  
  setupNewGame() {
    this.view.updateView();
  }
}
