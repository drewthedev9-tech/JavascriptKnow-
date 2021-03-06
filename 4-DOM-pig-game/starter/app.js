/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//  shorthand way of using many variables.
 var scores, roundScore, activePlayer,gamePlaying;
//  dice;

// inint function down bottom.
init();

// math object with random 
dice = Math.floor(Math.random() * 6) + 1;


// Score-0 is the id in teh HTML. then change the text ( textContent) withe dice variable above.
// document.querySelector('#current-' + activePlayer).textContent = dice;

// SETTER.
// inner HTML can chnge an HTML element or in thsis case add. textContent cannot do this it only works on text.
// would have added the <em></em>
// document.querySelector('#current-' + activePlayer).innerHTML ='<em>' +  dice + '</em>' ;

// GETTER.
//  reads teh html text insode the elementid current-o in the HTML // 43
// var x = document.querySelector('#score-0').textContent; 
// console.log(x);




//  Call back function - a function in another function called as a paremter
// of that function. the event listener will cal the btn function.

// anonymous function - a function with out a name. usually not on the outside
// of the code. like the btn function above.
// like the one in event listener.

document.querySelector('.btn-roll').addEventListener('click', function(){
        console.log(gamePlaying);
        if (gamePlaying){
                // 1.random number.
            var dice = Math.floor(Math.random() * 6) + 1;
            // display the result.
            var diceDOM = document.querySelector('.dice')
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';
            // update the round score only If they havent rolled a 1.

            if (dice !== 1 ){
                // add score to the variable roundScore above.
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
            nextplayer();
            }
        
        }   
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying){
            // Add CURRENT score to global score.
        scores[activePlayer] += roundScore;
        // update UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won the game.
        if (scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // next player
            nextplayer();
        }
    }

});


// Net Player funtion.
function nextplayer(){
     // Next player
    
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     //  Reset rpundscore to 0 when activePlayer = 0;
     roundScore = 0;

    
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';
 // Removing and adding classes with Javascript.
 // selects player-0-panel and removes the active class.
 document.querySelector('.player-0-panel').classList.toggle('active');
 // then selects the payer1 panel and adds classlist active. 
//  adding a different class to a html element swapping its style.
 document.querySelector('.player-1-panel').classList.toggle('active');
 
 // document.querySelector('.player-0-panel').classList.remove('active');
 // document.querySelector('.player-1-panel').classList.add('active');
 
 // takes the dice away when 1 is rolled.
 document.querySelector('.dice').style.display = 'none';

}

// New game function. once clicking on the new game btn.
// by running teh inti function.
document.querySelector('.btn-new').addEventListener('click', init);

// init function restrting the game and sets everything to 0 getting everything 
// via DOM.
function init(){
        scores = [0,0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying=true;
        //  style changer. inline style in the HTML.
        document.querySelector('.dice').style.display = 'none';
        
        //  set all values to 0 in the HTML. for the start of game using 
        // getElementId
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        // removes inner style from both players.
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        // remove active red dot from both players.
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        // puts the acctive class back on player 1 as game restarts.
        document.querySelector('.player-0-panel').classList.add('active');
        
   }
   
  