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
let games = 0;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(elem) {
  games++;
  const humanChoice = elem.value;
  const computerChoice = getComputerChoice();
  const output = document.createElement("div");
  const bod = document.querySelector("body");
  bod.appendChild(output);
  if (humanChoice === computerChoice) {
    output.innerText = `You tie! ${capitalizeFirstLetter(humanChoice)} is the same as ${computerChoice}`;
    console.log(`You tie! ${capitalizeFirstLetter(humanChoice)} is the same as ${computerChoice}`);
  } else if ((humanChoice  === 'rock' && computerChoice === 'scissors') ||
   (humanChoice === 'paper' && computerChoice === 'rock') || 
   (humanChoice === 'scissors' && computerChoice === 'paper')) {
    output.innerText = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}`;
    console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}`);
    humanScore++;
   } else {
    output.innerText = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}`;
    console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}`);
    computerScore++;
   }
   if (games === 5) {
    const finalScore = document.createElement("div");
    bod.appendChild(finalScore);
    const winner = humanScore > computerScore ? 'You win!' : humanScore < computerScore ? 'You lose!' : 'You tie!';
    finalScore.innerText = winner + ` The score is You: ${humanScore} Computer: ${computerScore}`;
    console.log(`The score is You: ${humanScore} Computer: ${computerScore}`);
   }
}

const choiceList = document.querySelectorAll("button");
for (let i = 0; i < choiceList.length; i++) {
  choiceList[i].addEventListener('click', function (e) {
    playRound(this);
  });
}