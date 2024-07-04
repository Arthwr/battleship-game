import { describe, expect, test } from "@jest/globals";
import Gameboard from "../../src/modules/models/Gameboard";
import Ship from "../../src/modules/models/Ship";

describe("Gameboard Model", () => {
  describe("Should create correct grid with given rows and columns", () => {
    const board = new Gameboard(4, 4);

    test("grid should have given number of rows", () => {
      expect(board.grid).toHaveLength(4);
    });

    test("each row should have given number of columns", () => {
      board.grid.forEach((row) => {
        expect(row).toHaveLength(4);
      });
    });

    test("each element in the rows should be initially null", () => {
      board.grid.forEach((row) => {
        row.forEach((cell) => {
          expect(cell).toBeNull();
        });
      });
    });
  });

  test("Places correctly ship at gameboard", () => {
    const board = new Gameboard(10, 10);
    const newShip = new Ship(3);
    const coordinates = [
      [10, 1],
      [10, 2],
      [10, 3],
    ];
    board.place(newShip, coordinates);
    expect(board.grid[9][0]).toBe(newShip);
    expect(board.grid[9][1]).toBe(newShip);
    expect(board.grid[9][2]).toBe(newShip);
  });
});
