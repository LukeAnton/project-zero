console.log('logic running.....');
//game variables
let moves = 0; //moves              //move count for end game draw display
let board = ['', '', '', '', '', '', '', '', '']; //gameplay array
let combo = null;                   //check for combo and apply dash
let currentPlayer = null;           //current player variable for switch player
let player1 = null;                 //player 1 variables
let player2 = null;                 //player 2 variables
let playerIcon = null;              //same as above but for icon display in grid
let computerIcon = null;
let currentIcon = null;
let winner = null;                  //winner variable for winner icon display
//^^^^game variables ^^^

//Switch Icon function that sets players icon on display
const switchIcon = function() {    //player switch function
  if (moves % 2 === 0) {           //if move tally even assign player
    currentIcon = playerIcon;
  } else {
    currentIcon = computerIcon;    //assigns player 2 data to send to board array
  }
}
//Switch Player function to pass correct data to board variable
const switchPlayer = function() {   //icon switch function
  if (moves % 2 === 0) {            //if move tally even assign icon
    currentPlayer = player1;
  } else {
    currentPlayer = player2;        //assigns player 2 icon
  }
}

const makeMove = function(boardSquare) {
  board[boardSquare] = currentPlayer;  //assigns clicked grid space players data to array
  checkForWin(currentPlayer);         //check for win
}


const checkForWin = function(currentPlayer) {
  //top row
  if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) {
    combo = 'combo1'            //assigns combo for dash
    winner = currentPlayer;     //assigns current player for player win display
  }
  //middle row
  if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) {
    combo = 'combo2'
    winner = currentPlayer;
  }
  //bottom row
  if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) {
    combo = 'combo3'
    winner = currentPlayer;
  }
  //left column
  if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) {
    combo = 'combo4'
    winner = currentPlayer;
  }
  //middle column
  if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) {
    combo = 'combo5'
    winner = currentPlayer;
  }
  //middle column
  if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) {
    combo = 'combo6'
    winner = currentPlayer;
  }
  //left to right diagonal
  if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) {
    combo = 'combo7'
    winner = currentPlayer;
  }
  //right to left diagonal
  if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) {
    combo = 'combo8'
    winner = currentPlayer;
  }
}
