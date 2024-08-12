import { describe, expect, test } from "@jest/globals";
import { HumanPlayer, ComputerPlayer } from "../../src/modules/models/Player";
import Gameboard from "../../src/modules/models/Gameboard";

describe("Player Model", () => {
  test("should correctly create computer player", () => {
    const newPlayer = new ComputerPlayer(new Gameboard(10, 10));
    expect(newPlayer.name).toBe("computer");
  });

  test("should correctly create human player with given board", () => {
    const newBoard = new Gameboard(10, 10);
    const newPlayer = new HumanPlayer(newBoard, "User");
    const playerGrid = newPlayer.grid();

    expect(newPlayer.name).toBe("User");
    // Check number of rows
    expect(playerGrid).toHaveLength(10);
    // Check number of columns
    playerGrid.forEach((row) => {
      expect(row).toHaveLength(10);
    });
  });

  test("should correctly return move set for computer chooseRandomMove method", () => {
    const opponentBoard = new Gameboard(10, 10);
    const computerPlayer = new ComputerPlayer(new Gameboard(10, 10));
    const move = computerPlayer.chooseRandomMove(opponentBoard);

    expect(move).toHaveLength(2);
    expect(typeof move[0]).toBe("number");
    expect(typeof move[1]).toBe("number");
    expect(move[0]).toBeGreaterThanOrEqual(1);
    expect(move[1]).toBeGreaterThanOrEqual(1);
    expect(move[0]).toBeLessThanOrEqual(opponentBoard.getDimensions().rowCount);
    expect(move[1]).toBeLessThanOrEqual(opponentBoard.getDimensions().columnCount);
  });
});
