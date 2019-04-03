console.log('logic running.....');
//game variables
let moves = 0; //moves
let board = ['', '', '', '', '', '', '', '', '']; //gameplay array
let combo = ['', '', '', '', '', '', '', ''];
let currentPlayer = null;
let player1 = null;
let player2 = null;
let playerIcon = null;
let computerIcon = null;
let currentIcon = null;
//^^^^game variables ^^^

//Switc Icon function that sets players icon on display
const switchIcon = function() {
  if (moves % 2 === 0) {
    currentIcon = playerIcon;
  } else {
    currentIcon = computerIcon;
  }
}
//Switch Player function to pass correct data to board variable
const switchPlayer = function() {
  if (moves % 2 === 0) {
    currentPlayer = player1;
  } else {
    currentPlayer = player2;
  }
}

const makeMove = function(boardSquare) {
  // add the currentPlayer's piece to the board array
  board[boardSquare] = currentPlayer;
  // check that board piece hasnt already been picked
  // check that the game is still active i.e. win or draw
  checkForWin(currentPlayer);
}


const checkForWin = function(currentPlayer) {
  //top row
  if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer){

}
  //middle row
  if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer){

  }
  //bottom row
  if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer){

  }
  //left column
  if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer){

  }
  //middle column
  if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer){

  }
  //middle column
  if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer){

  }
  //left to right diagonal
  if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer){

  }
  //right to left diagonal
  if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer){

  }
}
