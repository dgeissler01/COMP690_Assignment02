// DECLARE COINFLIP AND SET IT TO A RANDOM NUMBER
let coinFlip = Math.round(Math.random())
console.log(coinFlip)

// PROMPT USER TO SELECT "HEADS OR TAILS"
let choice = prompt('Please select Heads or Tails (entries are case-sensative).')

// ASSIGN HEAD OR TALES VALUE TO randomNum AND COMPARE TO USER INPUT
if (coinFlip > 0) {
    coinFlip = 'Heads'
    if (choice === 'Heads') {
        alert('The flip was heads and you chose heads...you win!')
    } else {
        alert('The flip was heads and you chose tails...you lose!')
    } 
}

if (coinFlip === 0) {
    coinFlip = 'Tails'
    if (choice === 'Heads') {
        alert('The flip was tails and you chose heads...you lose!')
    } else {
        alert('The flip was tails and you chose tails...you win!')
    }
}



// // **FIRST ATTEMPT BEFORE REALIZING INSTRUCTIONS ARE TO USE NESTED IF STATEMENTS**
// // DECLARE COINFLIP AND SET IT TO A RANDOM NUMBER
// let coinFlip = Math.round(Math.random())
// console.log(coinFlip)

// // ASSIGN HEADS OR TALES VALUE TO VARIABLE 
// if (coinFlip > 0) {
//     coinFlip = 'Heads'
// } else {
//     coinFlip = 'Tails'
// }   

// // PROMPT USER TO SELECT "HEADS OR TAILS"
// let choice = prompt('Please select Heads or Tails (entries are case-sensative).')

// // CONDITIONAL LOGIC TO DETERMINE WINNER OR LOSER
// if (choice === coinFlip) {
//     alert(`The flip was ${coinFlip} and you chose ${choice}...you win!`)
// } else {
//     alert(`The flip was ${coinFlip}, but you chose ${choice}...you lose!`)
// }