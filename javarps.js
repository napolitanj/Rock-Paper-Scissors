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


//Establish the computer's weapon with random operation
let computerChoice = randomPlay();

console.log("The computer has picked " + computerChoice);


//Prompt for player input.
function playerWeapon() {
    let weapon = "sciSSors";
    let playerInput = weapon.toLowerCase();

    return playerInput;
}

let playerChoice = playerWeapon();

console.log("You have selected " +playerChoice);

//Results of game determined
function playRound() {

    if (computerChoice === "rock" && playerChoice === "paper")
    console.log("Paper beats rock, you are victorious!");
    else if (computerChoice === "paper" && playerChoice === "scissors")
    console.log("Scissors beats paper, you have won!");
    else if (computerChoice === "scissors" && playerChoice === "rock")
    console.log("Rock beats scissors, you have smashed your way to victory!");
    else if (computerChoice === "rock" && playerChoice === "scissors")
    console.log("Rock smashes scissors. You died, dumbass.");
    else if (computerChoice === "scissors" && playerChoice === "paper")
    console.log("Scissors cut paper. You bled out, dipshit.");
    else if (computerChoice === "paper" && playerChoice === "rock")
    console.log("Rock can't beat paper. You ded.");
    else
    console.log("You both picked " + computerChoice + ". It's a tie!");

}

playRound();