let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
    });
});

const container = document.querySelector("#container");

const userResult = document.createElement("div");
userResult.classList.add("usrResult");
userResult.textContent = `user score: ${userScore}`;
container.appendChild(userResult);

const compResult = document.createElement("div");
compResult.classList.add("pcResult");
compResult.textContent = `comp score: ${computerScore}`;
container.appendChild(compResult);

const displayMessage = document.createElement("div");
displayMessage.classList.add("dspMessage");
//append here
container.appendChild(displayMessage);

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

function playRound(humanChoice, computerChoice){

    let lwHumanChoice = humanChoice.toLowerCase();
    let lwComputerChoice = computerChoice.toLowerCase();

    if(lwComputerChoice === "rock" && lwHumanChoice === "paper"){
        userScore++;
        displayMessage.textContent = `you win ${lwHumanChoice} beats ${lwComputerChoice}`;
    }
    else if (lwComputerChoice === "rock" && lwHumanChoice === "scissor"){
        computerScore++;
        displayMessage.textContent = `you lose ${lwComputerChoice} beats ${lwHumanChoice}`;
    }
    else if (lwComputerChoice === "paper" && lwHumanChoice === "rock"){
        computerScore++;
        displayMessage.textContent = `you lose ${lwComputerChoice} beats ${lwHumanChoice}`;
    }
    else if (lwComputerChoice === "paper" && lwHumanChoice === "scissor"){
        userScore++;
        displayMessage.textContent = `you win ${lwHumanChoice} beats ${lwComputerChoice}`;
    }
    else if (lwComputerChoice === "scissor" && lwHumanChoice === "rock"){
        userScore++;
        displayMessage.textContent = `you win ${lwHumanChoice} beats ${lwComputerChoice}`;
    }
    else if (lwComputerChoice === "scissor" && lwHumanChoice === "paper"){
        computerScore++;
        displayMessage.textContent = `you lose ${lwComputerChoice} beats ${lwHumanChoice}`;
    }
    else{
        displayMessage.textContent = "it is a tie play again";
    }
    //show userScore
    userResult.textContent = `user score: ${userScore}`;
    compResult.textContent = `comp score: ${computerScore}`;

    //setTimeout here delays the alert message showing the score on screen first then alert
    if (userScore === 5) {
        setTimeout(() => alert("User is the winner!"), 10);
    } else if (computerScore === 5) {
        setTimeout(() => alert("PC is the winner!"), 10);
    }
}