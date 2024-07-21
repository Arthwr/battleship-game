export default function introElement() {
  const intro = document.createElement("div");
  intro.id = "menu";

  intro.innerHTML = `
    <form id="game-form">
        <h2>Choose Players</h2>
        <div>
            <div class="menu-col">
                <div>
                    <label for="player1-type">Player 1:</label>
                    <select id="player1-type" name="player1-type">
                        <option value="human">Human</options>
                        <option value="computer">Computer</options>
                    </select>
                </div>
                <div>
                    <label for="player1-name">Name:</label>
                    <input id="player1-name" name="player1-name" type="text" required></input>
                </div>
            </div>
            <div class="menu-col">
                <div>
                    <label for="player2-type">Player 2:</label>
                    <select id="player2-type" name="player2-type">
                        <option value="human">Human</options>
                        <option selected value="computer">Computer</options>
                    </select>
                </div>
                <div>
                    <label for="player2-name" class="disabled-label">Name:</label>
                    <input id="player2-name" name="player2-name" type="text" required disabled></input>
                </div>
            </div>
        </div>
        <button type="submit">Start Game</button>
    </form>
    `;

  const form = intro.querySelector("#game-form");
  return { intro, form };
}
