//Some supportive text variables
let playAgain = " Select another weapon to play again.";
let playerScore=0;
let computerScore=0;
let draws=0;

//Random Computer Play
function computerRandom() {
    let random = Math.random();
    if (random < 0.34)
    randomWeapon = ("rock");
    else if (random <= 0.67)
    randomWeapon = ("paper");
    else
    randomWeapon = ("scissors");

    return randomWeapon;
}

//Results of game determined and score adjusted
function playRound(playerChoice,computerChoice) {
    if (computerChoice === "rock" && playerChoice === "paper") {
        playerScore += 1;
        document.getElementById("results").innerText = "Computer selected rock, you win!" + playAgain; 
    }
    else if (computerChoice === "paper" && playerChoice === "scissors") {
        playerScore += 1;
        document.getElementById("results").innerText = "Computer selected paper, you win!" + playAgain;
    }
    else if (computerChoice === "scissors" && playerChoice === "rock") {
        playerScore += 1;
        document.getElementById("results").innerText = "Computer selected scissors, you win!" + playAgain;
    }
    else if (computerChoice === "rock" && playerChoice === "scissors"){
        document.getElementById("results").innerText = "Computer selected rock, you lose!" + playAgain;
        computerScore += 1; 
    }
    else if (computerChoice === "scissors" && playerChoice === "paper"){
        document.getElementById("results").innerText = "Computer selected scissors, you lose!" + playAgain;
        computerScore += 1; 
    }
    else if (computerChoice === "paper" && playerChoice === "rock"){
        document.getElementById("results").innerText = "Computer selected paper, you lose!" + playAgain;
        computerScore += 1;
    }
    else {
        document.getElementById("results").innerText = "You both picked " + computerChoice + ". It's a tie!" + playAgain;
        draws += 1;
    }

    document.getElementById("p1").innerText = playerScore;
    document.getElementById("p2").innerText = computerScore;
    document.getElementById("p3").innerText = draws;
    if (computerScore >= 5) {
        document.getElementById("results").innerText = "Game over, the computer wins! Refresh the browser to start over.";
    }
    else if (playerScore >= 5) {
        document.getElementById("results").innerText = "Game over, the you win! Refresh the browser to start over.";
    }
}

const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");

console.log(playerRock);
console.log(playerPaper);
console.log(playerScissors);

playerRock.addEventListener("click", () => playRound("rock",computerRandom()));
playerPaper.addEventListener("click", () => playRound("paper",computerRandom()));
playerScissors.addEventListener("click", () => playRound("scissors",computerRandom()));
    