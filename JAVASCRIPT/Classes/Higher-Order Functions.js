const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

let time2p2= timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)

const checkConsistentOutput= (func, num) =>{
  let num1= func(num);
  let num2= func(num);
  if(num1 === num2)
    return num1;
  else 
    return 'This function returned inconsistent results'
}

console.log(checkConsistentOutput(addTwo, 4) )
