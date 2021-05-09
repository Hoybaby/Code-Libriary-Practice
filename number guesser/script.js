let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
    return Math.floor(Math.random() * 9)
}

let compareGuesses =(humanGuess, computerGuess,secretTarget) => {

    let humanG = Math.abs(secretTarget - humanGuess);
    let computerG = Math.abs(secretTarget - computerGuess);
    return humanG <= computerG;

    // if (humanGuess < computerGuess) {
    //     updateScore('human');
    // } else if (humanGuess > computerGuess) {
    //     updateScore('computer');
    // } else {
    //     console.log('error has occurced')
    // }
    // return humanGuess <= computerGuess;


    // if(Math.abs((humanGuess - secretTarget)) < Math.abs((computerGuess - secretTarget))) {
    //     return humanScore++;
    // } else if (Math.abs((humanGuess - secretTarget)) > Math.abs((computerGuess - secretTarget))) {
    //     return computerScore++;
    // } else if (Math.abs((humanGuess - secretTarget)) === Math.abs((computerGuess - secretTarget))) {
    //     return humanScore++;
    // } else {
    //     return console.log('error has occured')
    // }
}

let updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

const advanceRound= () => {
    currentRoundNumber += 1;
}

var obj;

console.log(obj)