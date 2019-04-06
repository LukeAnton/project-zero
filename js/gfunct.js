console.log('gameboard running');

$(function() {

      //initial pick icon size
      $('.x').css('width', '40px'); //set icon size in pick menue
      $('.o').css('width', '40px'); //set icon size in pick menue

      //game play
      $('.inplay').click(function() {
        $(this).attr("data-board")
        switchPlayer();
        switchIcon();
        checkForWin();
        $(this).html(currentIcon)
        //console.log($('.inplay').attr("data-board")); //test
        boardNumber = $(this).attr("data-board");
        moves += 1;
        makeMove(boardNumber);
        console.log(board);
        //draw function



        checkForDraw();
        if (draw === 'draw'){
          $('.draw').css({
            'visibility': 'visible'
          })
          $('#lines').css({
            'opacity': '.5'
          })
        }

        //combo checks
        if (combo === 'combo1') {
          $('.combo1').css({
            'visibility': 'visible'
          });
          $('.resetGame').css({
            'visibility': 'visible'
          })
          $('#lines').css({
            'opacity': '.5'
          })
        }
        if (combo === 'combo2') {
          $('.combo2').css({
            'visibility': 'visible'
          });
          $('.resetGame').css({
            'visibility': 'visible'
          })
          $('#lines').css({
            'opacity': '.5'
          })
        }
        if (combo === 'combo3') {
          $('.combo3').css({
            'visibility': 'visible'
          });
          $('.resetGame').css({
            'visibility': 'visible'
          })
          $('#lines').css({
            'opacity': '.5'
          })
        }
        if (combo === 'combo4') {
          $('.combo4').css({
            'visibility': 'visible'
          });
          $('.resetGame').css({
            'visibility': 'visible'
          })
          $('#lines').css({
            'opacity': '.5'
          })
        }
        if (combo === 'combo5') {
          $('.combo5').css({
            'visibility': 'visible'
          });
          $('.resetGame').css({
            'visibility': 'visible'
          })
          $('#lines').css({
            'opacity': '.5'
          })
        }
        if (combo === 'combo6') {
          $('.combo6').css({
            'visibility': 'visible'
          });
          $('.resetGame').css({
            'visibility': 'visible'
          })
          $('#lines').css({
            'opacity': '.5'
          })
        }
        if (combo === 'combo7') {
          $('.combo7').css({
            'visibility': 'visible'
          });
          $('.resetGame').css({
            'visibility': 'visible'
          })
          $('#lines').css({
            'opacity': '.5'
          })
        }
        if (combo === 'combo8') {
          $('.combo8').css({
            'visibility': 'visible'
          });
          $('.resetGame').css({
            'visibility': 'visible'
          })
          $('#lines').css({
            'opacity': '.5'
          })
        }
        //end combo checks
        //winner
        if (winner === 'X') {
          $('span').html('<span class="winnerx">X</span> WINS');
          $('.winnerx').css({
            'color': '#F15D72',
            'font-size': '60px'
          });
        }
        if (winner === 'O') {
          $('span').html('<span class="winnero">O</span> WINS');
          $('.winnero').css({
            'color': '#BEDB7F',
            'font-size': '60px'
          });
        }
      });

      $('.resetGame').click(function() {
        window.location = "https://lukeanton.github.io/project-zero/";
        //window.location = "http://127.0.0.1:3000/";
      });
      $('.draw').click(function() {
        window.location = "https://lukeanton.github.io/project-zero/";
        //window.location = "http://127.0.0.1:3000/";
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
        $('.social').hide();
        $('.x').hide();
        $('.o').hide();
        $('.x').css('width', '80px');
        $('.o').css('width', '80px');
        //pick icon state
        $('span').html('Lets Play!');
        $('#pick').css({
          'font-size': '50px',
          'letter-spacing': '10px'
        });
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
        $('.social').hide();
        $('.x').hide();
        $('.o').hide();
        $('span').html('Lets Play!');
        $('span').css({'margin-top':'50px'});
        $('#pick').css({
          'font-size': '50px',
          'letter-spacing': '10px'
        });
        $('.arrow').hide();
        //^^pick icon state^^
      });

});
