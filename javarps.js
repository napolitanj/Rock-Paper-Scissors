//Some supportive text variables
let playerWinRound = "You have won this round!" 
let computerWinRound = "The computer beat you this round!"
let draw = "You have tied the computer!"
let playerWin = "You have won 5 games and are the victor!"
let computerWin = "The computer has beaten you 5 times and is the victor!"


//Operation to randomly pick rock paper or scissors for computer
    function randomPlay() {
        let random = Math.random();
        if (random < 0.34)
        randomWeapon = ("rock");
        else if (random <= 0.67)
        randomWeapon = ("paper");
        else
        randomWeapon = ("scissors");

        return randomWeapon;
    }   

//Game function
function game() {
    let playerScore=0;
    let computerScore=0;
    let draws=0;

    //Determines whether or not to play a round based on score
    function playAgain() {
        if (playerScore === 5) {
            console.log("Game over, you win! Final score is computer: " + computerScore + " , player: " + playerScore + ", draws: " + draws + ".");
        }
        
        else if (computerScore === 5) {
            console.log("Game over, the computer beat you! Final score is computer: " + computerScore + " , player: " + playerScore + ", draws: " + draws + ".");
        }
        
        else if (draws === 100) {
            console.log("That was an unexpectedly large amount of draws. For the sake of preventing a crash, the game has eneded. Final score is computer: " + computerScore + " , player: " + playerScore + ", draws: " + draws + ".");
        }
       
        else if (playerScore < 5 && computerScore < 5) {
        console.log("Current Score:")
        console.log("Player score is " + playerScore)
        console.log("Computer score is " + computerScore)
        console.log("Number of draws are " + draws)
        playRound();
        }
    }


    //Results of game determined and score adjusted
    function playRound() {

        //Establish the computer's weapon with random operation
        let computerChoice = randomPlay();

        console.log("The computer has picked " + computerChoice);


        //Prompt for player input.
        function playerWeapon() {
        let weapon = prompt("You are under attack! Pick your weapon: rock, paper, or scissors?");
        let playerInput = weapon.toLowerCase();

        return playerInput;
        }
        let playerChoice = playerWeapon();

        console.log("You have selected " +playerChoice);

        if (computerChoice === "rock" && playerChoice === "paper") {
            playerScore += 1;
            console.log("Paper beats rock. " + playerWinRound);
            playAgain();
        }
        else if (computerChoice === "paper" && playerChoice === "scissors") {
            playerScore += 1;
            console.log("Scissors beats paper. " + playerWinRound);
            playAgain();
        }
        else if (computerChoice === "scissors" && playerChoice === "rock") {
            playerScore += 1;
            onsole.log("Rock beats scissors. " + playerWinRound);
            playAgain();
        }
        else if (computerChoice === "rock" && playerChoice === "scissors"){
            console.log("Rock smashes scissors. " + computerWinRound);
            computerScore += 1;
            playAgain();
        }
        else if (computerChoice === "scissors" && playerChoice === "paper"){
            console.log("Scissors cut paper. " + computerWinRound);
            computerScore += 1;
            playAgain();
        }
        else if (computerChoice === "paper" && playerChoice === "rock"){
            console.log("Rock can't beat paper. " + computerWinRound);
            computerScore += 1;
            playAgain();
        }
        else {
            console.log("You both picked " + computerChoice +". " + draw);
            draws += 1;
            playAgain();
        }
    }
    playRound();
   
}

game();