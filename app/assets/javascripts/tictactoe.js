$(document).ready(attachListeners)

const win = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [3, 4, 5], [1, 4, 7], [6, 4, 2],
  [6, 7, 8], [2, 5, 8]
];
let turn = 0;
let currentGame = 0;


function attachListeners() {
  $('td').click((target) => { if(!$(target).text && !checkWinner()) { doTurn(target) } })
}
