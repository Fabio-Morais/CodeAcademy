const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i=0; i<vacationSpots.length; i++){
  console.log('I would love to visit '+ vacationSpots[i])
}

/**************************************************/

/*Verificar se existe igual em 2 arrays*/

var bobsFollowers = ['rita','ana','maria','joana'];
var tinasFollowers = ['paulo','rita','ana'];
var mutualFollowers =[]

for(let i=0; i<bobsFollowers.length; i++){
  for(let j=0; j<tinasFollowers.length; j++){
    if(bobsFollowers[i]===tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    	console.log(bobsFollowers[i])
    }
  }
}

/**************************************************/

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard
while(currentCard!='spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  /*gera um numero de 0 a 4 com casas decimais, math.floor vai
  arredondar o numero para baixo, logo o maximo seria 3,999 que arredonda para 3*/
  console.log(currentCard)
}
