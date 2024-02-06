function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let number = Math.floor(Math.random() * 3);
    return choices[number];
}

function playround(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return("It's a tie!!");
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return("You lose! Paper beats Rock");
        } else {
            return ("You win! Rock beats Scissors");
        }
        }
    }

const playerSelection = "rock";
const computerSelection = getComputerChoice();

