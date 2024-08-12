import GameController from "./modules/controller/GameController";
import Game from "./modules/models/Game";
import View from "./modules/view/View";
import "./styles/index.css";

const game = new GameController(new Game(), new View());
game.init();
