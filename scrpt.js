//global variables
const MAX_ROUNDS = 5;
let userScore = 0;
let computerScore = 0;

//search in html for all buttons
const buttons = document.querySelectorAll("button");
//run thru all the buttons
//every time a button is clicked get html id and pass it to playRound function
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
    });
});

//search in html container to show scores and round choices
const container = document.querySelector("#container");

//create div to display user score
const userResult = document.createElement("div");
userResult.classList.add("usrResult");
userResult.textContent = `user score: ${userScore}`;
container.appendChild(userResult);

//create div to display computer score
const compResult = document.createElement("div");
compResult.classList.add("pcResult");
compResult.textContent = `comp score: ${computerScore}`;
container.appendChild(compResult);

//create div to display round message
const displayMessage = document.createElement("div");
displayMessage.classList.add("dspMessage");
container.appendChild(displayMessage);

//function to simulate random choice of computer
function getComputerChoice(){
    let rps = Math.floor(Math.random() * 3);
    if(rps === 0){
        return "rock";
    }
    else if(rps === 1){
        return "paper";
    }
    else {
        return "scissor";
    }
}

//function to play one round of the game rock paper scissor
function playRound(humanChoice, computerChoice){

    if(computerChoice === "rock" && humanChoice === "paper"){
        userScore++;
        displayMessage.textContent = `you win ${humanChoice} beats ${computerChoice}`;
    }
    else if (computerChoice === "rock" && humanChoice === "scissor"){
        computerScore++;
        displayMessage.textContent = `you lose ${computerChoice} beats ${humanChoice}`;
    }
    else if (computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        displayMessage.textContent = `you lose ${computerChoice} beats ${humanChoice}`;
    }
    else if (computerChoice === "paper" && humanChoice === "scissor"){
        userScore++;
        displayMessage.textContent = `you win ${humanChoice} beats ${computerChoice}`;
    }
    else if (computerChoice === "scissor" && humanChoice === "rock"){
        userScore++;
        displayMessage.textContent = `you win ${humanChoice} beats ${computerChoice}`;
    }
    else if (computerChoice === "scissor" && humanChoice === "paper"){
        computerScore++;
        displayMessage.textContent = `you lose ${computerChoice} beats ${humanChoice}`;
    }
    else{
        displayMessage.textContent = "it is a tie play again";
    }
    //show running user and computer score
    userResult.textContent = `user score: ${userScore}`;
    compResult.textContent = `comp score: ${computerScore}`;

    //setTimeout delays the alert message showing the score on screen first then alert
    //it resets the score back to 0 once 5 rounds are reached
    //it would be ideal to make a reset function here and call after the alert message
    if (userScore === MAX_ROUNDS) {
        setTimeout(() => {
            alert("User is the winner!");
            userScore = 0;
            computerScore = 0;
            userResult.textContent = `user score: ${userScore}`;
            compResult.textContent = `comp score: ${computerScore}`;
            displayMessage.textContent = "new game make your choice";
        }, 10);
    } 
    else if (computerScore === MAX_ROUNDS) {
        setTimeout(() => {
            alert("PC is the winner!");
            userScore = 0;
            computerScore = 0;
            userResult.textContent = `user score: ${userScore}`;
            compResult.textContent = `comp score: ${computerScore}`;
            displayMessage.textContent = "new game make your choice";
        }, 10);
    }
}