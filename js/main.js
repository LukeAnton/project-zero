console.log('running');

$(function(){
//initial pick icon size
  $('.x').css('width', '40px');
  $('.o').css('width', '40px');

//game variables
let player = null;                     //
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


$('.instructions').click(function(){
  $('.decide').html('test');
  $('.decide').css('test');

  $('.st0').hide();
})


//choose player click function
$('.x').click(function(){
  console.log('clicked');
  $('.x').css('width', '80px');
  $('.o').css('width', '80px');
  player = '<img class="x" src="svg/x.svg" alt="">';
  computer = '<img class="o" src="svg/o.svg" alt="">';
  $('.x').hide();
  $('.o').hide();

});
//choose player click function
$('.o').click(function(){
  console.log('clicked');
  player = '<img class="x" src="svg/o.svg" alt="">';
  computer = '<img class="o" src="svg/o.svg" alt="">';
  $('.x').hide();
  $('.o').hide();


});
//^^^choose player click function^^^

//combination test
if($('.a') == $('#o')){
  console.log('player');
}


//game play ^^^
});
