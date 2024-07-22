import { ComputerPlayer, HumanPlayer } from "../Player";
import Gameboard from "../Gameboard";

export default class PlayerFactory {
  static createPlayer(playerData) {
    const playerOption = playerData.querySelector("select").value;
    const nameInput = playerData.querySelector("input").value;
    return playerOption === "computer"
      ? new ComputerPlayer(new Gameboard())
      : new HumanPlayer(new Gameboard(), nameInput);
  }
}
