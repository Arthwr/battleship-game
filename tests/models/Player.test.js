import { describe, expect, test } from "@jest/globals";
import Player from "../../src/modules/models/Player";
import Gameboard from "../../src/modules/models/Gameboard";

describe("Player Model", () => {
  test("should return null if gameboard is not specified", () => {
    const newPlayer = new Player("Computer");
    expect(newPlayer.grid()).toBeNull();
  });

  test("should correctly create player with given board", () => {
    const newBoard = new Gameboard(10, 10);
    const newPlayer = new Player("User", newBoard);
    const playerGrid = newPlayer.grid();

    expect(newPlayer.name).toBe("User");
    // Check number of rows
    expect(playerGrid).toHaveLength(10);
    // Check number of columns
    playerGrid.forEach((row) => {
      expect(row).toHaveLength(10);
    });
  });
});
