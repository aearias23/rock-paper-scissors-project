//I am making a rock paper scissors game.
//In the HTML file I need to figure out how to have the user input the data.
let playerScore = 0
let computerScore = 0
let roundWinner = ''
//Create an array with 'rock', 'paper', and 'scissors'.
const weapons = ['rock', 'paper', 'scissors'];
//Have the function select rock, paper, scissors randomly
function computerPlay() {
    return weapons[Math.floor(Math.random() * weapons.length)];
}
//Create a function to play a single game following two parameters-- 
//computerSelection and playerSelection 
const computerSelection = computerPlay();
let playerSelection = 'rock';

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        roundWinner = 'tie'
    } 
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
        )
     {
        playerScore++
        roundWinner = 'player'
        return playerSelection + " VS " + computerSelection + ". You win!"
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
//and then return a string that declares the winner of the round like,
//'You Lose! Paper beats Rock"

// Make the function's playerSelection parameter case-insensitve.

//Make a new function, game(). Put the previous function into this one to
//play a 5 round game that keeps score and reports a winner or loser.


//Perfect time to learn loops. You can also call playRound() function.

//use prompt() to input data from user.