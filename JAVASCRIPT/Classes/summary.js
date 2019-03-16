/**********************************************************************/
/*************************| reverseArray() |*********************************************/
// Write your code here:

const reverseArray = array => {
  let newArray=[];
  for(let i=array.length-1; i>=0; i--)
    {
      newArray.push(array[i]);
    }
	return newArray;
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];

/**********************************************************************/
/**************************| CONVERTTOBABY() |********************************************/

const convertToBaby = (array) =>{
  let newArray= [];
  for(let i=0; i<array.length; i++)
    {
      newArray[i]= `baby ${array[i]}`;
    }
  return newArray
}

/**  OU **/

const convertToBaby = (array) =>{
  let newArray= [];
  newArray= array.map(string=> `baby ${string}`)
	return newArray;
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals)) 




/**********************************************************************/
/*********************************| smallestPowerOfTwo() |*************************************/


const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
           number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            x = 1;
            while (x < number) {
                  x = x * 2;
            }
            results.push(x);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]





/**********************************************************************/
/**********************************************************************/
//*declineEverything() and acceptEverything()*/

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = (array)=>{
  array.forEach(politelyDecline)
}

declineEverything(veggies)

const acceptEverything = array =>{
  array.forEach(element =>{
    console.log(`Ok, I guess I will eat some ${element}.`)
  })
}
acceptEverything(veggies)







/**********************************************************************/
/**********************************************************************/
/*	squareNums	*/


const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = (array) =>{
  let newArray= array.map(num =>{
    return num*num;
  })
  return newArray
};

console.log(squareNums(numbers))






/**********************************************************************/
/**********************************************************************/

/*	shoutGreetings	*/

// Write your code here:

const shoutGreetings = (array) =>{
  let newArray=[];
  newArray= array.map( str =>{
    str=str.toUpperCase();
    return `${str}!`
  })
  return newArray
}

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]







/**********************************************************************/
/**********************************************************************/
/*sortYears*/
const sortYears = (numbers) =>{
  numbers.sort(function(a, b) {
  return b - a; // se a-b, entao é crescente
});
  return numbers
}

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))


/**********************************************************************/
/**********************************************************************/
/*	justCoolStuff	*/

// Write your code here:

const justCoolStuff = (str1, str2) =>{
  let newArray=[];
  newArray= str1.filter(item => str2.includes(item))
	return newArray;
  }
/*
.includes retorna true se houver o elemento
.filter retorna sempre quando é true, nao retorna quando é false
*/
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]



/**********************************************************************/
/**********************************************************************/
/*	isTheDinnerVegan	*/


const isTheDinnerVegan = (object) =>{
  return object.every(item => item.source == 'plant')
}

const dinner = [{name: 'hamburger', source: 'plant'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false


