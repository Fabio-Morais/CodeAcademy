let raceNumber = Math.floor(Math.random() * 1000);
let early;
if(raceNumber >= 1000)
  early=true;
else 
  early=false;
let runnerAge= 19;
if(runnerAge > 18 && early)
  raceNumber +=1000;
if(runnerAge > 18 && early)
  console.log('9:30 -> Number: '+ raceNumber);
else if(runnerAge > 18 && !early)
  console.log('11:00 -> Number: '+ raceNumber);
else if(runnerAge < 18)
  console.log('12:30 -> Number: '+ raceNumber);
else 
  console.log('Approach the registration desk')
