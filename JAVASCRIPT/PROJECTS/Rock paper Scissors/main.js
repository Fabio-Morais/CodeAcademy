const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if((userInput=== 'rock') || (userInput === "paper") || (userInput=== 'scissors') ||(userInput=== 'bomb'))
  	return userInput;
  else 
  console.log('error')
};
/*bomb is a cheat, user always wins*/
var userInput;

userInput=getUserChoice('rock');

const getComputerChoice = () =>{
	let number = Math.floor(Math.random()*3);
  switch(number){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
      
  }
}
let computerChoi= getComputerChoice();


const determineWinner = (computerChoice, userChoice)  =>{
  if(userChoice=== 'bomb')
    return 'User wins';
  if(userChoice === computerChoice)
    return 'EMPATE'
  if(userChoice === 'rock'){
    if(computerChoice=== 'paper')
      return 'Computer wins'
    else if(computerChoice=== 'scissors')
      return 'User wins'
    else       
      return 'error determineWinner';
  }
  if(userChoice=== 'paper'){
    if(computerChoice=== 'rock')
      return 'User wins';
    else if(computerChoice=== 'scissors')
      return 'Computer wins';
    else 
      return 'error determineWinner';
    
  }
  if(userChoice=== 'scissors'){
    if(computerChoice=== 'paper')
      return 'User wins'
    else if(computerChoice=== 'rock')
      return 'Computer wins'
    else       
      return 'error determineWinner';
  }
  
}

const playGame = () =>{
console.log(`Computer choice: ${computerChoi}`);
console.log(`Your choice: ${userInput}`);
console.log(determineWinner(computerChoi,userInput ))
}

playGame()