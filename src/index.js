import GameController from "./modules/controller/GameController";
import Player from "./modules/models/Player";
import Gameboard from "./modules/models/Gameboard";
import View from "./modules/view/View";
import "./styles/index.css";

const players = [
  new Player("User", new Gameboard()),
  new Player("Computer", new Gameboard()),
];

const game = new GameController(players, new View());
game.setupNewGame();
