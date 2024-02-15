let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('#results');
const resultMessage = document.createElement('p');
const score = document.querySelector('#score');
const scoreDetail = document.createElement('p');

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
                } else {
                    updateScore("win");              
                }
            break;
            case "paper":
                if (computerSelection === "rock") {
                    updateScore("win");
                } else {
                    updateScore("lose");
                }
            break;
            case "scissors":
                if (computerSelection === "rock") {
                    updateScore("lose");
                } else {
                    updateScore("win");
                }
            break;
        }
    }
}    

const rock = document.querySelector('#Rock');
rock.addEventListener('click', () => {
    playround("Rock", getComputerChoice());
});

const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => {
    playround("Paper", getComputerChoice());
});

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => {
    playround("Scissors", getComputerChoice());
});

function updateScore(result) {
    switch(result) {
        case "win":
            playerScore++;
            results.appendChild(resultMessage);
            resultMessage.textContent = `You won this round`;
            score.appendChild(scoreDetail);
            scoreDetail.textContent = `Current Score: Player ${playerScore}, Computer ${computerScore}`;
            break;
        case "lose":
            computerScore++;
            results.appendChild(resultMessage);
            resultMessage.textContent = `You lost this round`;
            score.appendChild(scoreDetail);
            scoreDetail.textContent = `Current Score: Player ${playerScore}, Computer ${computerScore}`;
            break;

        case "tie":
            results.appendChild(resultMessage);
            resultMessage.textContent = `This round was a tie`;
            score.appendChild(scoreDetail);
            scoreDetail.textContent = `Current Score: Player ${playerScore}, Computer ${computerScore}`;
            break;
    }
    if (playerScore === 5) {
        score.appendChild(scoreDetail);
        scoreDetail.textContent = `Congratulations you won the game, ${playerScore} to ${computerScore}`;
    } else if (computerScore === 5) {
        score.appendChild(scoreDetail);
        scoreDetail.textContent = `Sorry but you lost the game, ${computerScore} to ${playerScore}`;
    }
};
