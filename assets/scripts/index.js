// GET HTML SCREEN ELEMENT TO DISPLAY OPERATIONS
const printElement = document.querySelector('.js-screen')

// store calculation like '1 - 2' or '10 + 5 / 3' IN A VARIABLE
// let calculation = ''

// PRINT INPUTS
function updateCalculation (character) {
  printElement.value += character;
}

// PERFORM CALCULATION
function evaluateOperation () {
  printElement.value = eval(printElement.value)
}

// RESET THE APP || CLEAR ALL OPERATION
function clearScreen () {
  printElement.value = ''
}

// DELETE PER INPUT
function delleteCharacter () {
  const stretch = printElement.value.split('')
  if (stretch) {
    stretch.pop()
  }
  printElement.value = stretch.join('')
}

/*
const dep = 'five'
let spllit = dep.split('')
console.log(spllit)
let del = spllit.pop()
console.log(del)
console.log(spllit.join(''))
*/
