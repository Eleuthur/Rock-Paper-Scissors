function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let number = Math.floor(Math.random() * 3);
    return choices[number];
}

function playround(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let lose = "Loser";
    let win = "Winner";
    let tie = "Tie";

    if (playerSelection === computerSelection) {
        return(tie);
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "paper") {
                    return(lose);
                } else {
                    return(win);
                }
            break;
            case "paper":
                if (computerSelection === "rock") {
                    return(win);
                } else {
                    return(lose);
                }
            break;
            case "scissors":
                if (computerSelection === "rock") {
                    return(lose);
                } else {
                    return(win);
                }
            break;
        }
    }
}    
  
function playGame() {

    let wins = 0;
    let ties = 0;
    let loses = 0;
    for (let i = 0; i < 4; i++ ) {
        let result = playround(playerSelection, computerSelection);
        switch (result) {
            case "Winner":
                wins++;
                console.log('You won! ${playerSelection} beats ${computerSelection}');
                break;
            case "Loser":
                loses++;
                console.log('You lose! ${computerSelection} beats ${playerSelection}');
                break;
            case "Tie":
                ties++;
                console.log("It's a tie");
                break;
        }
    }
    }

const playerSelection = "rock";
const computerSelection = getComputerChoice();

playGame();