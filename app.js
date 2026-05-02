// Define the choices
const choices = ["rock","paper","scissors"];
//  Define Rules
const rules ={
    rock:"scissors", 
    paper:"rock",
    scissors:"paper"
};
function getComputerChoice(){
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
function getPlayerChoice() {
let choice = ""
// validation loop: keep asking until the input is valid
while (!choices.includes(choice)){
    const input = prompt("choose: rock, paper, scissors");
    if (input===null) return null;
    choice = input.toLowerCase().trim();
}
return choice;
}
function playRound(computer, player) {
    if(player===computer){
        return {
            winner: "tie" , messsage: "It`s a tie!"
        };
    }
    // if the computer`s choice is one the player beats,
    if (rules[player] === computer){
        return {
            winner: "player", message: `You win! ${player} beats ${computer}`
        };
    } else {
        return {
            winner: "computer", message: `You lose! ${computer} beats ${player}`
        };
    }
}

// main function to wrap the game logic 
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    const playerSelection = getPlayerChoice();
    if (playerSelection === null) {
        console.log("Game cancelled.");
        return;
    }
    const computerSelection = getComputerChoice();
    if (playerSelection === null) {
        console.log("Game cancelled.");
        return;
    }
    // const computerSelection = getComputerChoice();
    const result = playRound(computerSelection, playerSelection);
    
    // update scores based on the returned object
    if (result.winner === "player") {
        playerScore++;
    } else if (result.winner === "computer") {
        computerScore++;
    }
    
    console.log(result.message);
    console.log(`Scores - Player: ${playerScore}, Computer: ${computerScore}`);
}

// Start the game
game();


