//I am making a rock paper scissors game.

let playerScore = 0
let computerScore = 0
let roundWinner = ''
//Create an array with 'rock', 'paper', and 'scissors'.
const weapons = ['rock', 'paper', 'scissors'];
// Make the function's playerSelection parameter case-insensitve.

//Have the function select rock, paper, scissors randomly
function computerPlay() {
    return weapons[Math.floor(Math.random() * weapons.length)];
}
//Create a function to play a single game following two parameters-- 
//computerSelection and playerSelection 
let computerSelection = computerPlay();
let playerSelection = prompt('Choose your weapon! Rock, paper, scissors.');

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        
        roundWinner = 'It\'s a tie!'
}
    if (
        (playerSelection==='rock' && computerSelection==='scissors') ||
        (playerSelection==='paper' && computerSelection==='rock') ||
        (playerSelection==='scissors' && computerSelection==='paper') 
    )
    {
        roundWinner = 'You win!'
        playerScore++
    }
    if (
        (playerSelection==='rock' && computerSelection==='paper') ||
        (playerSelection==='paper' && computerSelection==='scissors') ||
        (playerSelection==='scissors' && computerSelection==='rock') 
    )
    {
        roundWinner = 'You lose!'
        computerScore++
    }
//and then return a string that declares the winner of the round like,
//'You Lose! Paper beats Rock"
//In the HTML file I need to figure out how to have the user input the data.
     document.write(playerSelection + ' vs. ' + computerSelection + '. ' + roundWinner);
}
//Make a new function, game(). Put the previous function into this one to
//play a 5 round game that keeps score and reports a winner or loser.
function game() {
    let playerScore = 0
    let computerScore = 0
    playRound(playerSelection, computerSelection);
    for (let i = 0; i === playerScore === 5 || computerScore === 5; i++) {
        if (playerScore === 5) {
            greeting('You have won five rounds. Return home, you have' 
                    + ' survived this battle...warrior')
        } if (computerScore === 5) {
            greeting('You have lost five rounds. You may rest now, warrior.' 
                    + ' Thank you for your sacrifice')
        }
    } 
}
//Perfect time to learn loops. You can also call playRound() function.
//use prompt() to input data from user.
