// console.log("hello rock paper scissor");

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
    let userInput = prompt("choose: rock, paper or scissor");
    return userInput;
}