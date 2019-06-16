
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
/*function hold(scores, roundscore, activePlayer, dice){
    scores[activePlayer]+=roundscore
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer]

} 
document.querySelector('.btn-hold').addEventListener('click', hold(scores, roundscore, activePlayer, dice))*/
var scores, roundscore, activePlayer, dice, gamePlaying;


init();

document.querySelector('.btn-new').addEventListener('click',init);

   

document.querySelector('.btn-roll').addEventListener('click',function() {
    if(gamePlaying){
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');

        var dice= Math.floor((Math.random()*6)+1);

        var diceDom= document.querySelector('.dice');
        diceDom.style.display= 'block';
        diceDom.src= 'dice-'+dice+'.png';

        if(dice!=1){
            roundscore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundscore;
            //document.querySelector('#current-'+activePlayer).textContent= roundscore;
        }
        else{
            
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){ 
        scores[activePlayer]+=roundscore;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

        if(scores[activePlayer]>=10){
            document.querySelector('#name-'+activePlayer).textContent= 'Winner';
        
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            roundscore=0;
            gamePlaying=false;
        }
        else{
            nextPlayer();

        }
    }


});

function nextPlayer(){
 
    activePlayer ===0 ? activePlayer =1 : activePlayer=0;
    roundscore=0;


    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;

    //removing and adding classes
    //classList
    //document.querySelector('.player-0-panel').classList.remove('active')
// document.querySelector('.player-1-panel').classList.add('active')

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.querySelector('.dice').style.display='none';
}

function init(){
    scores=[0,0];
    roundscore=0;
    activePlayer=Math.round((Math.random()));
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-1').textContent='0';
    document.getElementById('score-0').textContent='0';
    document.querySelector('#name-0').textContent= 'PLAYER 1';
    document.querySelector('#name-1').textContent= 'PLAYER 2';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    gamePlaying=true;


}