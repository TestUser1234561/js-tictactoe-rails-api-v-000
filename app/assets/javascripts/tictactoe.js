$(document).ready(attachListeners)

const win = [
  [0, 1, 2]
  [3, 4, 5]
  [6, 7, 8]
  [0, 3, 6]
  [1, 4, 7]
  [2, 5, 8]
  [0, 4, 8]
  [6, 4, 2]
];
let turn = 0;
let currentGame = 0;


function attachListeners() {
  $('td').click((target) => { if(!$(target).text && !checkWinner()) { doTurn(target) } })
}
