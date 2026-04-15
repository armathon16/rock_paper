console.log("Hello World");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));
console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);