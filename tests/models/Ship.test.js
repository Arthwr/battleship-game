import { describe, expect, test } from "@jest/globals";
import Ship from "../../src/modules/models/Ship";

describe("Ship Model", () => {
  test("Should create a ship with given length", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
  });

  test("Should register and increment hit counter", () => {
    const ship = new Ship(4);
    ship.hit();
    expect(ship.hits).toBe(1);
    expect(ship.length).toBe(4);
  });

  test("Should sink the ship after enough hits", () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
