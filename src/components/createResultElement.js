import capitalizeString from "../utils/capitalizeString";

export default function createResultElement(winner) {
  const resultElement = document.createElement("div");
  resultElement.className = "result";
  resultElement.innerHTML = `The game is over! <b>${capitalizeString(winner)}</b> is the winner!</div>`;
  return resultElement;
}
