export default function grid(players) {
  let gridsHTML = "";

  players.forEach((player) => {
    const { rowCount, columnCount } = player.gameBoard.getDimensions();

    let playerGridHTML = "";
    for (let row = 1; row <= rowCount; row++) {
      let rowHTML = '<div class="row">';
      for (let col = 1; col <= columnCount; col++) {
        rowHTML += `<div class="cell" data-row="${row}" data-col="${col}"></div>`;
      }
      rowHTML += "</div>";
      playerGridHTML += rowHTML;
    }
    playerGridHTML = `<div id="${player.name}" class="grid">${playerGridHTML}</div>`;
    gridsHTML += playerGridHTML;
  });

  return gridsHTML;
}
