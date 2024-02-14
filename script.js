let playerScore = 0;
let computerScore = 0;

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
        updateScore("tie");
        return("tie");
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "paper") {
                    updateScore("lose");
                    return("lose");
                } else {
                    updateScore("win");
                    return("win");              
                }
            break;
            case "paper":
                if (computerSelection === "rock") {
                    updateScore("win");
                    return("win");
                } else {
                    updateScore("lose");
                    return("lose");
                }
            break;
            case "scissors":
                if (computerSelection === "rock") {
                    updateScore("lose");
                    return("lose");
                } else {
                    updateScore("win");
                    return("win");
                }
            break;
        }
    }
}    

const results = document.querySelector('#results');
const resultMessage = document.createElement('p');
const score = document.querySelector('#score');
const scoreDetail = document.createElement('p');

const rock = document.querySelector('#Rock');
rock.addEventListener('click', () => {
    score.appendChild(scoreDetail);
    scoreDetail.textContent = `Player ${playerScore}, Computer ${computerScore}`;
    resultMessage.textContent = playround("Rock", getComputerChoice());
    results.appendChild(resultMessage.cloneNode(true));
});

const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => {
    resultMessage.textContent = playround("Paper", getComputerChoice());
    results.appendChild(resultMessage.cloneNode(true));
});

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => {
    resultMessage.textContent = playround("Scissors", getComputerChoice());
    results.appendChild(resultMessage.cloneNode(true));
});

function updateScore(result) {
    // add switch statement to update score
    // output score text to score paragraph
};
