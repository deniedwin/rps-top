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

    if(lwComputerChoice === "rock" && lwHumanChoice === "paper"){
        userScore++;
        console.log(`you win ${lwHumanChoice} beats ${lwComputerChoice}`);
    }
    else if (lwComputerChoice === "rock" && lwHumanChoice === "scissor"){
        console.log(`you lose ${lwComputerChoice} beats ${lwHumanChoice}`);
        computerScore++;
    }
    else if (lwComputerChoice === "paper" && lwHumanChoice === "rock"){
        console.log(`you lose ${lwComputerChoice} beats ${lwHumanChoice}`);
        computerScore++;
    }
    else if (lwComputerChoice === "paper" && lwHumanChoice === "scissor"){
        console.log(`you win ${lwHumanChoice} beats ${lwComputerChoice}`);
        userScore++;
    }
    else if (lwComputerChoice === "scissor" && lwHumanChoice === "rock"){
        console.log(`you win ${lwHumanChoice} beats ${lwComputerChoice}`);
        userScore++;
    }
    else if (lwComputerChoice === "scissor" && lwHumanChoice === "paper"){
        console.log(`you lose ${lwComputerChoice} beats ${lwHumanChoice}`);
        computerScore++;
    }
    else{
        console.log("tie play again");
    }
}

function playGame(){
    let maxRounds = 5;
    for(let i = 0; i < maxRounds; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`user score = ${userScore}, computer score = ${computerScore}`);
    return 0;
}