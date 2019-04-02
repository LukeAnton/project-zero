console.log('running');

$(function(){
//initial pick icon size
  $('.x').css('width', '40px');   //set icon size in pick menue
  $('.o').css('width', '40px');   //set icon size in pick menue

//game variables
let player = null;                     //player icon
let computer = null;                   //computer icon
let moves = 0;                         //moves
let board = ['','','','','','','','']; //gameplay array
//^^^^game variables ^^^

//game play
$('.inplay').click(function(){
    $(this).html(player)
    moves += 1;
    console.log(moves);
    console.log(player);

});
//Instructions function process
$('.instructions').click(function(){
  $('.decide').html(' The object of Tic Tac Toe is to get three in a row. You play on a three by three game board. The first player is known as X and the second is O. Players alternate placing Xs and Os on the game board until either oppent has three in a row or all nine squares are filled. X always goes first, and in the event that no one has three in a row, the stalemate is called a cat game.');
  $('.decide').css({'font-family':'Indie Flower',
                    'font-size':'30px',
                    'margin':'1px 60px 0 60px'});
  $('h1').css({'margin-top':'150px'});
  $('h1').html('How to play');
  $('.st0').hide();
  $('.toGame').css({'visibility':'visible'});
  $('.instructions').hide();
  $('.game-container').hide();
})
//back to original state
$('.toGame').click(function(){
  window.location = "http://127.0.0.1:3000/";
})
//^^^^Instructions function process^^^^


//choose player x click function
$('.x').click(function(){
  console.log('clicked');
  $('.x').css('width', '80px');
  $('.o').css('width', '80px');
  player = '<img class="x" src="svg/x.svg" alt="">';
  computer = '<img class="o" src="svg/o.svg" alt="">';
  $('.x').hide();
  $('.o').hide();

});
//choose player o click function
$('.o').click(function(){
  console.log('clicked');
  player = '<img class="x" src="svg/o.svg" alt="">';
  computer = '<img class="o" src="svg/o.svg" alt="">';
  $('.x').hide();
  $('.o').hide();
});
//^^^choose player click function^^^
//game play ^^^

//combination checks
console.log(player);
console.log(typeof player);


























});
