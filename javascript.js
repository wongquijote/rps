function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  if (rand === 0) {
    return 'rock';
  } else if (rand === 1) {
    return 'paper';
  } else if (rand === 2) {
    return 'scissors';
  }
}

function getHumanChoice() {
  let choice = prompt("Choose rock, paper, scissors").toLowerCase();
  const choices = ['rock', 'paper', 'scissors'];
  while (!choices.includes(choice)) {
    choice = prompt("Not a valid input! Please choose rock, paper, scissors").toLowerCase();
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`You tie! ${capitalizeFirstLetter(humanChoice)} is the same as ${computerChoice}`);
  } else if ((humanChoice  === 'rock' && computerChoice === 'scissors') ||
   (humanChoice === 'paper' && computerChoice === 'rock') || 
   (humanChoice === 'scissors' && computerChoice === 'paper')) {
    console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}`);
    humanChoice++;
   } else {
    console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}`);
    computerChoice++;
   }
}

function test() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    test();
  }
  console.log(``)
}