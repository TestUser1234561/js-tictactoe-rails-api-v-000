$(document).ready(attachListeners)

const WIN_COMBOS = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [3, 4, 5], [1, 4, 7], [6, 4, 2],
  [6, 7, 8], [2, 5, 8]
];
let turn = 0;
let game = 0;

function attachListeners() {
  $('td').click((target) => { if(!$(target).text() && !checkWinner()) { doTurn(target) } })
  $('#save').click(() => { saveGame() })
  $('#previous').click(() => { showPreviousGames() })
  $('#clear').click(() => { resetBoard() })
}

function player() { retun turn % 2 ? 'O' : 'X' }

function doTurn(s) {
  console.log(player())
  $(s).text(player())
  turn++;
  if (checkWinner()) {
    console.log(true)
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
  console.log(board)

  WIN_COMBOS.forEach((combo) => {
    if(board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      setMessage(`Player ${board[combo[0]]} Won!`);
      return true
    }
  })

  return false;
}
