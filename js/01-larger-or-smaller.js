//DISPLAY APPLICATION NAME AND PURPOSE
alert('Welcome to the Larger or Smaller Application')
alert('We will detrmine if the Number entered into the first prompt is LARGER, SMALLER, or THE SAME as the Number entered into the second prompt.')

// DECLARE VARIABLES
let x, y

// COLLECT USER DATA
x = parseInt(prompt('Please enter the first Number.'))
y = parseInt(prompt('Please enter the second Number.'))

// COMPARE INTEGERS AND DISPLAY RESULTS
if (x > y) {
    document.write(`<h3> The First integer is ${x}.<br> The Second integer is ${y}.<br> ${x} is LARGER than ${y}!</h3>`)
} else if (x < y) {
    document.write(`<h3> The First integer is ${x}.<br> The Second integer is ${y}.<br> ${x} is SMALLER than ${y}!</h3>`)
} else {
    document.write(`<h3> The First integer is ${x}.<br> The Second integer is ${y}.<br> ${x} is THE SAME as ${y}!</h3>`)
}

console.log(typeof(x))
console.log(typeof(y))