import GameController from "./modules/controller/GameController";
import Game from "./modules/models/Game";
import View from "./modules/view/View";
import "./styles/index.css";

const game = new GameController(new Game(), new View());
game.init();

// To do:
// 1. prevent ship collision from switching horizontal to vertical and vice versa;
// 2. prevent ship placement in close proximity of other ships (minimum 1 cell distance between each ship);
// 3. fix a bug where you can't place ship on a new position if at least 1 cell was occupied by that ship before;
// 4. show player id in result game message