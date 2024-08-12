export default function createRevealCheckBox() {
  const checkBoxElement = document.createElement("div");
  checkBoxElement.id = "reveal-check";
  checkBoxElement.innerHTML = `
    <input id="reveal" type="checkbox"></input>
    <label for="reveal">Reveal ships?</label>
    `;

  return checkBoxElement;
}
