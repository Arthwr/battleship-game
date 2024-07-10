import {
  describe,
  expect,
  test,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import GameController from "../../src/modules/controller/GameController";

describe("GameController class", () => {
  let players;
  let mockView;
  let controller;

  beforeEach(() => {
    jest.clearAllMocks();

    players = [
      {
        name: "User",
        gameBoard: {
          receiveAttack: jest.fn(),
          getDimensions: jest.fn().mockReturnValue({
            rowCount: 10,
            columnCount: 10,
          }),
        },
      },
      {
        name: "Computer",
        gameBoard: {
          receiveAttack: jest.fn(),
          getDimensions: jest.fn().mockReturnValue({
            rowCount: 10,
            columnCount: 10,
          }),
        },
      },
    ];

    mockView = {
      updateCell: jest.fn(),
      updateView: jest.fn(),
      gameGrid: [],
    };

    controller = new GameController(players, mockView);
  });

  afterEach(() => {
    jest.clearAllMocks();

    controller = new GameController(players, mockView);
  });

  test("first player is always User", () => {
    expect(controller.currentPlayer).toBe(players[0]);
    expect(controller.currentPlayer.name).toBe("User");
  });

  test("do not allow to current active player to interact with his own board on his turn", () => {
    const receiveAttackSpy = jest.spyOn(players[0].gameBoard, "receiveAttack");
    controller.handleBoardClick(controller.currentPlayer, [1, 1]);
    expect(receiveAttackSpy).not.toHaveBeenCalled();
  });

  test("handleBoardClick stop execution, if attackStatus is 'already_attacked'", () => {
    players[1].gameBoard.receiveAttack.mockReturnValue("already_attacked");
    controller.handleBoardClick(players[1], [3, 3]);

    expect(players[1].gameBoard.receiveAttack).toHaveBeenCalledWith([3, 3]);
    expect(mockView.updateCell).not.toHaveBeenCalled();
  });

  test("handleBoardClick returns 'hit' attackStatus", () => {
    const receiveAttackSpy = jest
      .spyOn(players[1].gameBoard, "receiveAttack")
      .mockReturnValue("hit");

    controller.handleBoardClick(players[1], [2, 2]);
    expect(receiveAttackSpy).toHaveBeenCalledWith([2, 2]);
    expect(mockView.updateCell).toHaveBeenCalledWith("Computer", [2, 2], "hit");
  });

  test("handleBoardClick returns 'missed' attackStatus", () => {
    const receiveAttackSpy = jest
      .spyOn(players[1].gameBoard, "receiveAttack")
      .mockReturnValue("missed");

    controller.handleBoardClick(players[1], [1, 1]);
    expect(receiveAttackSpy).toHaveBeenCalledWith([1, 1]);
    expect(mockView.updateCell).toHaveBeenCalledWith(
      "Computer",
      [1, 1],
      "missed"
    );
  });
});
