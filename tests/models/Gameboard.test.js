import { describe, expect, test, jest, beforeEach } from "@jest/globals";
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

    test("each ship object element in the rows should be initially null", () => {
      board.grid.forEach((row) => {
        row.forEach((cell) => {
          expect(cell.ship).toBeNull();
        });
      });
    });

    test("getDimensions method should return correct number of rows and columns", () => {
      expect(board.getDimensions()).toEqual({ rowCount: 4, columnCount: 4 });
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
    expect(board.grid[9][0].ship).toBe(newShip);
    expect(board.grid[9][1].ship).toBe(newShip);
    expect(board.grid[9][2].ship).toBe(newShip);
  });

  describe("Correctly execute receiveAttack function", () => {
    const board = new Gameboard(10, 10);
    const newShip = new Ship(2);
    const coordinates = [
      [6, 1],
      [6, 2],
    ];

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("receives hit on a ship", () => {
      const hitSpy = jest.spyOn(newShip, "hit");

      board.place(newShip, coordinates);
      board.receiveAttack([6, 1]);

      expect(hitSpy).toHaveBeenCalled();
    });

    test("registers miss and records it", () => {
      const hitSpy = jest.spyOn(newShip, "hit");

      board.place(newShip, coordinates);
      board.receiveAttack([4, 4]);

      expect(hitSpy).not.toHaveBeenCalled();
      expect(board.grid[3][3]).toBe(1);
    });

    test("return already_attacked msg if target cell was a hit miss before", () => {
      const hitSpy = jest.spyOn(newShip, "hit");

      board.place(newShip, coordinates);
      board.receiveAttack([4, 4]);

      expect(hitSpy).not.toHaveBeenCalled();
      expect(board.receiveAttack([4, 4])).toBe("already_attacked");
    });
  });

  describe("Correctly report if all or not ships on gameboard sunk", () => {
    test("all ships are sunk", () => {
      const board = new Gameboard(10, 10);

      const firstShip = new Ship(1);
      const secondShip = new Ship(3);

      const firstShipCoords = [1, 1];
      const secondShipCoords = [
        [5, 4],
        [5, 5],
        [5, 6],
      ];

      board.place(firstShip, firstShipCoords);
      board.place(secondShip, secondShipCoords);
      board.receiveAttack(firstShipCoords);
      secondShipCoords.forEach((cell) => {
        board.receiveAttack(cell);
      });

      expect(board.isClear()).toBe(true);
    });

    test("there are still ships on gameboard", () => {
      const board = new Gameboard(10, 10);

      const firstShip = new Ship(1);
      const secondShip = new Ship(2);

      const firstShipCoords = [2, 2];
      const secondShipCoords = [
        [7, 4],
        [7, 3],
      ];

      board.place(firstShip, firstShipCoords);
      board.place(secondShip, secondShipCoords);
      board.receiveAttack(firstShipCoords);
      board.receiveAttack(secondShipCoords[0]);
      board.receiveAttack([1, 1]);

      expect(board.isClear()).toBe(false);
    });
  });
});
