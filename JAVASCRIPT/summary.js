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










/**********************************************************************/
/**********************************************************************/









/**********************************************************************/
/**********************************************************************/

