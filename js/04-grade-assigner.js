// COLLECT THE NUMBER FROM THE USER BETWEEN 1 and 100
score = parseInt(prompt('Please enter your score.'))

// ENSURE SCORE IS BETWEEN 1 and 100 AND IF NOT, LET THE USER KNOW IT MUST BE
if (score < 1 || score > 100) {
    alert(`You've entered your score as ${score}. Please enter a number between 1 and 100.`)
} else if (isNaN(score) === true) {      // ENSURE USER INPUT IS A NUMBER AND NOT SOMETHING ELSE
    alert(`You've entered something that is not a number. Please enter a number between 1 and 100.`)
} else if (score >= 90) {                // LOGIC FOR CONSOLE LOG LETTER GRADES
    console.log('You received an A')
} else if (score >= 80) {
    console.log('You received an B')
} else if (score >= 70) {
    console.log('You received an C')
} else if (score >= 60) {
    console.log('You received an D')
} else {
    console.log('You received an F')
}
