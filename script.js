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
    let resultMessage = "";
    let endResultMessage = "";

    for (let i = 0; i < 5; i++ ) {
        playerSelection = prompt("Please enter your choice");
        const computerSelection = getComputerChoice();
        let result = playround(playerSelection, computerSelection);
        switch (result) {
            case "Winner":
                wins++;
                resultMessage = `You won! ${playerSelection} beats ${computerSelection}`;
                break;
            case "Loser":
                loses++;
                resultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
                break;
            case "Tie":
                ties++;
                resultMessage = "It's a tie";
                break;
        }
        console.log(resultMessage);
    }

    if (wins > loses) {
        endResultMessage = `You win! you won ${wins} rounds`;
    } else if (loses > wins) {
        endResultMessage = `You lose! you won ${wins} rounds`;
    } else {
        endResultMessage = `It's a tie, you won ${wins} rounds`;
    }
    console.log(endResultMessage);
    }


playGame();