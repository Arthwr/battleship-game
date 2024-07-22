import capitalizeString from "../utils/capitalizeString";

export default function resultElement(winner) {
  const resultElement = document.createElement("div");
  resultElement.className = "result";
  resultElement.innerHTML = `Game has ended! <b>${capitalizeString(winner)}</b> has won the game!</div>`;
  return resultElement;
}
