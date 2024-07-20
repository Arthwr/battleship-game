export default function introElement() {
  const intro = document.createElement("div");
  intro.id = "menu";

  intro.innerHTML = `
    <form>
        <h2>Choose Players</h2>
        <div>
            <div class="menu-col">
                <div>
                    <label for="player1-type">Player:</label>
                    <select id="player1-type" name="player1-type">
                        <option>Human</options>
                        <option>Computer</options>
                    </select>
                </div>
                <div>
                    <label for="player1-name">Name:</label>
                    <input id="player1-name" name="player1-name" type="text"></input>
                </div>
            </div>
            <div class="menu-col">
                <div>
                    <label for="player2-type">Player:</label>
                    <select id="player2-type" name="player2-type">
                        <option>Human</options>
                        <option>Computer</options>
                    </select>
                </div>
                <div>
                    <label for="player2-name">Name:</label>
                    <input id="player2-name" name="player2-name" type="text"></input>
                </div>
            </div>
        </div>
        <button type="submit">Start Game</button>
    </form>
    `;

  return intro;
}
