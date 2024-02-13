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
        return("tie");
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "paper") {
                    return("lose");
                } else {
                    return("win");
                }
            break;
            case "paper":
                if (computerSelection === "rock") {
                    return("win");
                } else {
                    return("lose");
                }
            break;
            case "scissors":
                if (computerSelection === "rock") {
                    return("lose");
                } else {
                    return("win");
                }
            break;
        }
    }
}    

const results = document.querySelector('#results');
const resultMessage = document.createElement('p');

const rock = document.querySelector('#Rock');
rock.addEventListener('click', () => {
    resultMessage.textContent = playround("Paper", getComputerChoice());
    results.appendChild(resultMessage.cloneNode(true));
});

const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => {
    console.log(playround("Paper", getComputerChoice()));
});

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => {
    console.log(playround("Scissors", getComputerChoice()));
});