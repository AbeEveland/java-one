const numberOfCupsOfCoffe = 2
const fullName = ' Abe Eveland'
console.log(
  `My name is ${fullName} and I drink about ${numberOfCupsOfCoffe} cups of coffe per day.`
)

const userName = window.prompt('What is your name?')
if (userName != null) {
  console.log(`Hello ${userName}!`)
}
const firstOperand = parseFloat(window.prompt('enter a number'))

if (firstOperand != null) {
  console.log('Thankyou! ' + firstOperand + ' is a great number.')
}
const secondOperand = parseFloat(window.prompt('enter a number'))
if (secondOperand != null) {
  console.log('Thankyou! ' + secondOperand + ' is a great number.')
}

const sum = firstOperand + secondOperand
console.log(`The total of your numbers is ${sum}`)

const difference = firstOperand - secondOperand
console.log(`The difference of your numbers is ${difference}`)

const remainder = firstOperand / secondOperand
console.log(`The remainder of your numbers is ${remainder}`)

const quotient = firstOperand * secondOperand
console.log(`The quotient of your numbers is ${quotient}`)

const numbers = [
  6,
  17,
  65,
  20,
  20,
  44,
  39,
  57,
  34,
  17,
  76,
  11,
  60,
  48,
  94,
  50,
  42,
  51,
  48,
  31,
  16,
  17,
  99,
  72,
  97,
  49,
  35,
  7,
  23,
  3,
  4,
  94,
  38,
  14,
  63,
  80,
  9,
  65,
  73,
  97,
  37,
  30,
  89,
  100,
  39,
  42,
  63,
  71,
  77,
  80,
  89,
  91,
  5,
  6,
  89,
  89,
  84,
  35,
  62,
  29,
  58,
  64,
  89,
  33,
  78,
  50,
  41,
  64,
  99,
  67,
  1,
  38,
  56,
  35,
  49,
  90,
  81,
  69,
  37,
  36,
  39,
  16,
  60,
  70,
  36,
  44,
  59,
  33,
  49,
  67,
  44,
  50,
  15,
  87,
  51,
  52,
  67,
  86,
  91,
  56,
]

let smallest = numbers[0]
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < smallest) {
    smallest = numbers[index]
  }
  console.log(`The smallest number is ${smallest}.`)
}
let largest = numbers[0]
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > largest) {
    largest = numbers[index]
  }
  console.log(`The largest number is ${largest}.`)
}

const sums = numbers.Sum
console.log(sums)
