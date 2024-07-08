import GameController from "./modules/controller/GameController";
import Player from "./modules/models/Player";
import Gameboard from "./modules/models/Gameboard";
import Ship from "./modules/models/Ship";
import View from "./modules/view/View";
import "./styles/index.css";

const players = [
  new Player("User", new Gameboard()),
  new Player("Computer", new Gameboard()),
];

// Place 4 ships with length 1
players[0].gameBoard.place(new Ship(1), [9, 9]);
players[0].gameBoard.place(new Ship(1), [9, 7]);
players[0].gameBoard.place(new Ship(1), [6, 8]);
players[0].gameBoard.place(new Ship(1), [4, 9]);

// Place 3 ships with length 2
players[0].gameBoard.place(new Ship(2), [[10, 1],[10,2]]);
players[0].gameBoard.place(new Ship(2), [[8, 1],[7,1]]);
players[0].gameBoard.place(new Ship(2), [[2, 8],[2,9]]);

// Place 2 ships with length 3
players[0].gameBoard.place(new Ship(2), [[7, 3],[7,4], [7,5]]);
players[0].gameBoard.place(new Ship(2), [[4, 3],[4,4], [4,5]]);

// Place 1 ships with length 4
players[0].gameBoard.place(new Ship(2), [[2, 2],[2,3], [2,4], [2,5]]);

const game = new GameController(players, new View());
game.setupNewGame();
