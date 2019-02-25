/*

.forEach() 
is used to execute the same code on every element in an array but does not change the array and returns undefined.

.map() 
executes the same code on every element in an array and returns a new array with the updated elements.

.filter() 
checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

.findIndex() 
returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

.reduce() 
iterates through an array and takes the values of the elements and returns a single value.
*/





https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods
/*************************************************************/
/*****FOR EACH*******/

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

/*Repete o mesmo codigo para cada elemento do vetor*/

fruits.forEach(item => console.log('I want to eat a '+item))

/*OU*/

function print(element){
  console.log('I want to eat a '+element);
}

fruits.forEach(print);

/*************************************************************/
/*MAP*/
/*
O método map chama a função callback recebida por parâmetro 
para cada elemento do Array original, em ordem, e constrói um 
novo array com base nos retornos de cada chamada. 
*/
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0]})
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => { return number/100})

console.log(smallNumbers)

/*************************************************************/
/*FILTER*/
/*
O método filter() cria uma nova array com todos os
elementos que passam no teste implementado pela função fornecida.
*/
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})
console.log(smallNumbers)
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(car => {
  return car.length > 7
})
console.log(longFavoriteWords);
/*************************************************************/
/*.reduce*/
/*
The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.


*/
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) =>{
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue:'+ currentValue+'\n\n');
  return accumulator + currentValue
} , 10)
console.log(newSum);
/*************************************************************/

/*EVERY*/
/*Todos os elementos serem iguais a uma condiçao*/
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords= words.filter((word)=> word.length>5)
console.log(interestingWords)

// Make sure to uncomment the code below and fix the incorrect code before running it

 console.log(interestingWords.every((word) => {
 return word.length>5
 } ));


