$(document).ready(attachListeners)

const WIN_COMBOS = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [3, 4, 5], [1, 4, 7], [6, 4, 2],
  [6, 7, 8], [2, 5, 8]
];
let turn = 0;
let game = 0;

function attachListeners() {
  $('td').click((e) => { if(!$(e.target).text() && !checkWinner()) { doTurn(e.target) } })
  $('#save').click(() => { saveGame() })
  $('#previous').click(() => { previousGames() })
  $('#clear').click(() => { resetBoard() })
}

var player = () => turn % 2 ? 'O' : 'X';
function updateState(s) { $(s).text(player()) }

function doTurn(s) {
  updateState(s);
  turn++;
  if (checkWinner()) {
    resetBoard()
  } else if (turn === 9) {
    console.log(false)
  }
}

function resetBoard() {
  $('td').empty();
  turn = 0;
  game = 0;
}

function setMessage(string) {
  $('#message').text(string);
}

function checkWinner() {
  let board = $('td').map((index, target) => { return $(target).text(); })
  let won = false

  WIN_COMBOS.forEach((combo) => {
    if(board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      setMessage(`Player ${board[combo[0]]} Won!`);
      won = true;
      return;
    }
  })

  return won;
}
