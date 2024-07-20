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
    jest.useFakeTimers();
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
          isClear: jest.fn(),
        },
      },
      {
        name: "computer",
        gameBoard: {
          receiveAttack: jest.fn(),
          getDimensions: jest.fn().mockReturnValue({
            rowCount: 10,
            columnCount: 10,
          }),
          isClear: jest.fn(),
        },
        chooseMove: jest.fn(),
      },
    ];

    mockView = {
      updateCell: jest.fn(),
      updateView: jest.fn(),
      gameGrid: [],
      updatePlayerLabel: jest.fn(),
    };

    controller = new GameController(players, mockView);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test("first player is always User", () => {
    expect(controller.currentPlayer).toBe(players[0]);
    expect(controller.currentPlayer.name).toBe("User");
  });

  test("switchPlayer method switches between User and Computer", () => {
    controller.switchPlayer();
    expect(controller.currentPlayer).toBe(players[1]);
    controller.switchPlayer();
    expect(controller.currentPlayer).toBe(players[0]);
  });

  test("getOpponent correctly identifies the opponent", () => {
    expect(controller.getOpponent()).toBe(players[1]);
    controller.switchPlayer();
    expect(controller.getOpponent()).toBe(players[0]);
  });

  test("current active player can't interact with his own board on his turn", () => {
    const receiveAttackSpy = jest.spyOn(players[0].gameBoard, "receiveAttack");
    controller.processMove([1, 1]);
    expect(receiveAttackSpy).not.toHaveBeenCalled();
  });

  test("processMove prevents attack on own board", () => {
    const simulatedEvent = {
      target: {
        closest: jest.fn().mockReturnValue({
          id: controller.currentPlayer.name,
        }),
      },
    };

    const coordinates = [1, 1];
    controller.processMove(coordinates, simulatedEvent);
    expect(mockView.updateCell).not.toHaveBeenCalled();
  });

  test("processMove stop execution, if attackStatus is 'already_attacked'", () => {
    players[1].gameBoard.receiveAttack.mockReturnValue("already_attacked");
    controller.processMove([3, 3]);

    expect(players[1].gameBoard.receiveAttack).toHaveBeenCalledWith([3, 3]);
    expect(mockView.updateCell).not.toHaveBeenCalled();
  });

  test("processMove returns 'hit' attackStatus", () => {
    const receiveAttackSpy = jest
      .spyOn(players[1].gameBoard, "receiveAttack")
      .mockReturnValue("hit");

    controller.processMove([2, 2]);
    expect(receiveAttackSpy).toHaveBeenCalledWith([2, 2]);
    expect(mockView.updateCell).toHaveBeenCalledWith("computer", [2, 2], "hit");
  });

  test("processMove returns 'missed' attackStatus", () => {
    const receiveAttackSpy = jest
      .spyOn(players[1].gameBoard, "receiveAttack")
      .mockReturnValue("missed");

    controller.processMove([1, 1]);
    expect(receiveAttackSpy).toHaveBeenCalledWith([1, 1]);
    expect(mockView.updateCell).toHaveBeenCalledWith(
      "computer",
      [1, 1],
      "missed"
    );
  });

  test("computer correctly chooses and processes a move", async () => {
    const getOpponentSpy = jest.spyOn(controller, "getOpponent");
    const chooseMoveSpy = jest.spyOn(players[1], "chooseMove");
    const processMoveSpy = jest.spyOn(controller, "processMove");

    controller.currentPlayer = players[1];
    chooseMoveSpy.mockReturnValue({ x: 1, y: 1 });

    await controller.computerTurn();

    expect(getOpponentSpy).toHaveBeenCalled();
    expect(chooseMoveSpy).toHaveBeenCalledWith(expect.any(Object));
    expect(processMoveSpy).toHaveBeenCalledWith({ x: 1, y: 1 });
  });

  test("correctly identifies the winner of the game", () => {
    const isClearSpy = jest
      .spyOn(players[0].gameBoard, "isClear")
      .mockReturnValue(true);

    expect(controller.getWinner()).toBe("computer");
    expect(isClearSpy).toHaveBeenCalled();
  });

  test("endTurn correctly ends the turn, switch players and initiates computer's turn", () => {
    const switchPlayerSpy = jest.spyOn(controller, "switchPlayer");
    const computerTurnSpy = jest.spyOn(controller, "computerTurn");

    controller.currentPlayer = players[0];

    controller.endTurn();
    expect(switchPlayerSpy).toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(computerTurnSpy).toHaveBeenCalled();
  });
});
