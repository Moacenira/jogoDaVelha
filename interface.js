document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    square.addEventListener('click', handleClick)
  })
})
function handleClick(event) {
  let square = event.target
  let position = square.id

  if (handleMove(position)) {
      setTimeout(() => {
      alert('o jogo acabou! \n O vencedor foi o jogador ' + playerTime)
    }, 10);
  };
  updateSquares();
}
function updateSquares(position){
  let square=document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`

}

function updateSquares() {
  let squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    let position = square.id
    let symbol = board[position]

    if (Symbol != '') {
      square.innerHTML = `<div class='${symbol}'></div>`
    }
  })
}
