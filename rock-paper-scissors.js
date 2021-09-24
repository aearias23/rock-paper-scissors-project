//I am making a rock paper scissors game.
//In the HTML file I need to figure out how to have the user input the data.

//Create an array with 'rock', 'paper', and 'scissors'.
const weapons = ['Rock', 'Paper', 'Scissors'];
//Have the function select rock, paper, scissors randomly
computerPlay = function() {
    return weapons[Math.floor(Math.random() * weapons.length)];
}
//Create a function to play a single game following two parameters-- 
//playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    let weapon = prompt("Choose your weapon! Rock, paper, or scissors...");
    alert("Your weapon of choice is " + weapon);

    computerPlay()
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

//and then return a string that declares the winner of the round like,
//'You Lose! Paper beats Rock"
// Make the function's playerSelection parameter case-insensitve.

//Make a new function, game(). Put the previous function into this one to
//play a 5 round game that keeps score and reports a winner or loser.
//Perfect time to learn loops. You can also call playRound() function.

//use prompt() to input data from user.
