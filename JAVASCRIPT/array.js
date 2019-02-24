
MAIS INFO-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('lol','sec'); //insere no fim
console.log(chores)

chores.length//comprimento

/********************************/
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

const remove=chores.pop();
console.log(chores) //['wash dishes', 'do laundry', 'take out trash', 'cook dinner']
console.log(remove)//'mop floor'

/********************************/
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); //remove primeiro elemento
console.log(groceryList)

groceryList.unshift('popcorn') //insere na primeira posiçao
console.log(groceryList)

console.log(groceryList.slice(1,4))//[ 'bananas', 'coffee beans', 'brown rice' ]