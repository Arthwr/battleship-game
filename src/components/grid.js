export default function grid(players) {
  let gridsHTML = "";

  players.forEach((player) => {
    const { rowCount, columnCount } = player.gameBoard.getDimensions();

    let xAxisLabelHTML = "";
    for (let col = 1; col <= columnCount; col++) {
      const label = String.fromCharCode(64 + col);
      xAxisLabelHTML += `<div class="label-cell">${label}</div>`;
    }

    let yAxisLabelHTML = "";
    for (let row = 1; row <= rowCount; row++) {
      yAxisLabelHTML += `<div class="label-cell">${row}</div>`;
    }

    let playerGridHTML = `
      <div class="gameboard">
        <div class="label-row">
          <div class="label-cell"></div>
        ${xAxisLabelHTML}
        </div>
        <div class="grid-wrap">
          <div class="label-column">${yAxisLabelHTML}</div>
          <div id="${player.name}" class="grid">
    `;

    for (let row = 1; row <= rowCount; row++) {
      let rowHTML = `<div class="row" data-row="${row}">`;
      for (let col = 1; col <= columnCount; col++) {
        rowHTML += `<div class="game-cell" data-row="${row}" data-col="${col}"></div>`;
      }
      rowHTML += "</div>";
      playerGridHTML += rowHTML;
    }
    playerGridHTML += `
        </div>
      </div>
    </div>
    `;
    gridsHTML += playerGridHTML;
  });

  return gridsHTML;
}
