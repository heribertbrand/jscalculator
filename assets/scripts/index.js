// GET HTML SCREEN ELEMENT TO DISPLAY OPERATIONS
const printElement = document.querySelector('.js-screen')

// store calculation like '1 - 2' or '10 + 5 / 3' IN A VARIABLE
let calculation = ''

// PRINT INPUTS
const updateCalculation = (character) => {
    return printElement.value += character;
}

// PERFORM CALCULATION
const evaluateOperation = () => {
   return printElement.value = eval(printElement.value)
}

// RESET THE APP || CLEAR ALL OPERATION
const clearScreen = () => {
  return printElement.value = ''
}

// DELETE PER INPUT
const delleteCharacter = () => {
  const stretch = printElement.value.split('')
  if (stretch) {
    stretch.pop()
  }
  return printElement.value = stretch.join('')
}

/*
const dep = 'five'
let spllit = dep.split('')
console.log(spllit)
let del = spllit.pop()
console.log(del)
console.log(spllit.join(''))
*/
