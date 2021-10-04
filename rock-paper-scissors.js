//I am making a rock paper scissors game.

let playerScore = 0
let computerScore = 0
let roundWinner = ''
//Create an array with 'rock', 'paper', and 'scissors'.
const weapons = ['rock', 'paper', 'scissors', 'ROCK', 'PAPER', 'SCISSORS'];
// Make the function's playerSelection parameter case-insensitve.

//Have the function select rock, paper, scissors randomly
function computerPlay() {
    return weapons[Math.floor(Math.random() * weapons.length)];
}
//Create a function to play a single game following two parameters-- 
//computerSelection and playerSelection 
const computerSelection = computerPlay();
const playerSelection = prompt('Choose yoour weapon! Rock, paper, scissors.');

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection);
    roundWinner = 'tie';
}
    if (
        (playerSelection==='rock' && computerSelection==='scissors') ||
        (playerSelection==='paper' && computerSelection==='rock') ||
        (playerSelection==='scissors' && computerSelection==='paper') 
    );
    {
        roundWinner = 'player';
    }
    if(
        (computerSelection==='rock' && playerSelection==='paper') ||
        (computerSelection==='paper' && playerSelection==='scissors') ||
        (computerSelection==='scissors' && playerSelection==='rock')
    );
    {
        roundWinner = 'computer';
    }
//and then return a string that declares the winner of the round like,
//'You Lose! Paper beats Rock"
if (
    (playerSelection==='rock' && computerSelection==='scissors') ||
    (playerSelection==='paper' && computerSelection==='rock') ||
    (playerSelection==='scissors' && computerSelection==='paper')
) 
{
//In the HTML file I need to figure out how to have the user input the data.
    document.getElementById("demo").innerHTML = playerSelection + ' VS ' 
            + computerSelection + '. You win!';
}  else if (
    (computerSelection==='rock' && playerSelection==='paper') ||
    (computerSelection==='paper' && playerSelection==='scissors') ||
    (computerSelection==='scissors' && playerSelection==='rock')
) {
    document.getElementById("demo").innerHTML = playerSelection + ' VS '
            + computerSelection + '. You lose!';
} else if (playerSelection === computerSelection) {
    document.getElementById("demo").innerHTML = playerSelection + ' VS ' 
            + computerSelection + '. It\'s a tie!';
};




//Make a new function, game(). Put the previous function into this one to
//play a 5 round game that keeps score and reports a winner or loser.
//Perfect time to learn loops. You can also call playRound() function.
//use prompt() to input data from user.