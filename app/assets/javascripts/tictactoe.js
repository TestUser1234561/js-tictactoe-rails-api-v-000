

$(document).ready(attachListeners)

function attachListeners() {
  $('td').click((target) => { if(!$(target).text && !checkWinner()) { doTurn(target) } })
}
