import GameController from "./modules/controller/GameController";
import Game from "./modules/models/Game";
// import Gameboard from "./modules/models/Gameboard";
// import { ComputerPlayer, HumanPlayer } from "./modules/models/Player";
// import Ship from "./modules/models/Ship";
import View from "./modules/view/View";
import "./styles/index.css";

const game = new GameController(new Game(), new View());
game.init();

// const players = [
//   new HumanPlayer(new Gameboard(10, 10), "Arthur"),
//   new ComputerPlayer(new Gameboard(10, 10)),
// ];
// const game = new GameController(new Game(players, players[0]), new View());
// game.initApp();

// // Player -------------------------------------------------------------
// // Place 4 ships with length 1
// players[0].gameBoard.place(new Ship(1), [9, 9]);
// players[0].gameBoard.place(new Ship(1), [9, 7]);
// players[0].gameBoard.place(new Ship(1), [6, 8]);
// players[0].gameBoard.place(new Ship(1), [4, 9]);

// // Place 3 ships with length 2
// players[0].gameBoard.place(new Ship(2), [
//   [10, 1],
//   [10, 2],
// ]);
// players[0].gameBoard.place(new Ship(2), [
//   [8, 1],
//   [7, 1],
// ]);
// players[0].gameBoard.place(new Ship(2), [
//   [2, 8],
//   [2, 9],
// ]);

// // Place 2 ships with length 3
// players[0].gameBoard.place(new Ship(3), [
//   [7, 3],
//   [7, 4],
//   [7, 5],
// ]);
// players[0].gameBoard.place(new Ship(3), [
//   [4, 3],
//   [4, 4],
//   [4, 5],
// ]);

// // Place 1 ships with length 4
// players[0].gameBoard.place(new Ship(4), [
//   [2, 2],
//   [2, 3],
//   [2, 4],
//   [2, 5],
// ]);

// // Computer ------------------------------------------------------------
// // Place 4 ships with length 1
// players[1].gameBoard.place(new Ship(1), [5, 9]);
// players[1].gameBoard.place(new Ship(1), [1, 10]);
// players[1].gameBoard.place(new Ship(1), [3, 8]);
// players[1].gameBoard.place(new Ship(1), [7, 7]);

// // Place 3 ships with length 2
// players[1].gameBoard.place(new Ship(2), [
//   [10, 4],
//   [10, 3],
// ]);
// players[1].gameBoard.place(new Ship(2), [
//   [8, 1],
//   [7, 1],
// ]);
// players[1].gameBoard.place(new Ship(2), [
//   [7, 4],
//   [7, 3],
// ]);

// // Place 2 ships with length 3
// players[1].gameBoard.place(new Ship(3), [
//   [9, 8],
//   [9, 7],
//   [9, 6],
// ]);
// players[1].gameBoard.place(new Ship(3), [
//   [4, 3],
//   [4, 4],
//   [4, 5],
// ]);

// // Place 1 ships with length 4
// players[1].gameBoard.place(new Ship(4), [
//   [2, 2],
//   [2, 3],
//   [2, 4],
//   [2, 5],
// ]);

// game.setupNewGame();
