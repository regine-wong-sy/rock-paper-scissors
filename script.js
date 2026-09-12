function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) return "rock";
  else if (number === 1) return "paper";
  else return "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWins) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    resultDiv.textContent = playRound(humanChoice, computerChoice);
    scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
      resultDiv.textContent =
        humanScore === 5 ? "You won the game!" : "Computer won the game!";
    }
  });
});