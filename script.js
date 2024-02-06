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
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "paper") {
                    return("You lose! Paper beats Rock");
                } else {
                    return("You win! Rock beats Scissors");
                }
            break;
            case "paper":
                if (computerSelection === "rock") {
                    return("You win! Paper beats Rock");
                } else {
                    return("You lose! Scissors beats Paper");
                }
            break;
            case "scissors":
                if (computerSelection === "rock") {
                    return("You lose! Rock beats Scissors");
                } else {
                    return("You win! Scissors beats Paper");
                }
            break;
        }
    }
}    
    

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playround(playerSelection, computerSelection));