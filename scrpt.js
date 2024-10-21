// console.log("hello rock paper scissor");

let userScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    let userInput = prompt("user choose: rock, paper or scissor");
    return userInput;
}

function playRound(humanChoice, computerChoice){
    let lwHumanChoice = humanChoice.toLowerCase();
    let lwComputerChoice = computerChoice.toLowerCase();
    console.log(lwHumanChoice);
    console.log(lwComputerChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);