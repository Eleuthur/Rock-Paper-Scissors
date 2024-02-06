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
    

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playround(playerSelection, computerSelection));