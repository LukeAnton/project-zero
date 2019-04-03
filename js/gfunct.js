console.log('gameboard running');
$(function() {

      //initial pick icon size
      $('.x').css('width', '40px'); //set icon size in pick menue
      $('.o').css('width', '40px'); //set icon size in pick menue


      //game play
      $('.inplay').click(function() {
        $(this).attr("data-board")
        $(this).html(currentIcon)
        switchPlayer();
        switchIcon();
        checkForWin();
        moves += 1

        boardNumber = $(this).attr("data-board");
        makeMove(boardNumber);
        console.log(board);


        //console.log(moves);
        //console.log(player);

      });

      //choose player x click function
      $('.x').click(function() {
        //set player icons
        currentPlayer = 'X';
        player1 = 'X';
        player2 = 'O';
        playerIcon = '<img class="x" src="svg/x.svg" alt="">';
        computerIcon = '<img class="o" src="svg/o.svg" alt="">';
        //^^set player icons^^
        $('.x').hide();
        $('.o').hide();
        $('.x').css('width', '80px');
        $('.o').css('width', '80px');
        //pick icon state
        $('span').html('Lets Play!');
        $('#pick').css({'font-size':'50px',
                        'letter-spacing':'10px'});
        $('.arrow').hide();
      //^^pick icon state^^
      });
      //choose player o click function
      $('.o').click(function() {
        currentPlayer = 'O';
        player1 = 'O';
        player2 = 'X';
        playerIcon = '<img class="o" src="svg/o.svg" alt="">';
        computerIcon = '<img class="x" src="svg/x.svg" alt="">';
        //pick icon state
        $('.x').hide();
        $('.o').hide();
        $('span').html('Lets Play!');
        $('#pick').css({'font-size':'50px',
                        'letter-spacing':'10px'});
        $('.arrow').hide();
        //^^pick icon state^^
      });
      //^^^choose player click function^^^
      //^^^game play ^^^

      //Instructions function process
      $('.instructions').click(function() {
        $('.decide').html(' The object of Tic Tac Toe is to get three in a row. You play on a three by three game board. The first player is known as X and the second is O. Players alternate placing Xs and Os on the game board until either oppent has three in a row or all nine squares are filled. X always goes first, and in the event that no one has three in a row, the stalemate is called a cat game.');
        $('.decide').css({
          'font-family': 'Indie Flower',
          'font-size': '30px',
          'margin': '1px 60px 0 60px'
        });
        $('h1').css({
          'margin-top': '150px'
        });
        $('h1').html('How to play');
        $('.st0').hide();
        $('.grid-container').hide();
        $('.toGame').css({
          'visibility': 'visible'
        });
        $('.instructions').hide();
        $('.game-container').hide();
      })
      //back to original state
      $('.toGame').click(function() {
        window.location = "http://127.0.0.1:3000/";
      })
      //^^^^Instructions function process^^^^


      //combination checks

});
