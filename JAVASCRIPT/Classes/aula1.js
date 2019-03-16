console.log('string' + 'comp');
console.log(5);
console.log('string'.length);
console.log('string'.toUpperCase());
console.log(Number.isInteger(5));

var myName= 'Fabio'
var myCity= 'porto'
console.log(`My name is ${myName}. My favorite city is ${myCity}`)

/**************************************************************/

let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);
newVariable = 1
console.log(typeof newVariable);

/**************************************************************/
let tool = '';
tool='marker'
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil= tool || 'pen'
/*
if(tool)
	writingUtensil=tool
else
	writingUtensil= 'pen'
*/

console.log(`The ${writingUtensil} is mightier than the sword.`);

/**************************************************************/

let favoritePhrase = 'Love That!';

(favoritePhrase === 'Love That!') ? console.log('I love that!'):
console.log("I don't love that!");

/**************************************************************/

let athleteFinalPosition = 's';

switch(athleteFinalPosition ){
    
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
    
  default:
    console.log('No medal awarded.');
    break;
}