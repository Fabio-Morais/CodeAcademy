const team = {
  _player:[{
  firstName: 'Pablo', lastName: 'Sanchez', age: 11},
   {
  firstName: 'Fabio', lastName: 'Morais', age: 21}       ],
  _games:[{
  opponent: 'Broncos', teamPoints: 42, opponentPoints: 27
},
 {  opponent: 'porto', teamPoints: 4,pponentPoints: 7
}],
  
  get players(){
    return this._player;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    let player = {
      firstName,
      lastName,
      age
    };
    this._player.push(player);
  },
  addGame(opponent, teamPoints, pponentPoints){
    let game={
      opponent,
      teamPoints,
      pponentPoints
    };
    this._games.push(game);
  }
  
}
team.addPlayer('Steph ', 'Curry ', 28);
team.addPlayer('Lisa  ', 'Leslie  ', 24);
team.addPlayer('Bugs   ', 'Bunny  ', 76);
team.addGame('benfica', 20,22)
console.log(team.games)
console.log(team.players)