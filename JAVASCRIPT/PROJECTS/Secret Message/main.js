let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log('before pop: ',secretMessage.length)
let pop = secretMessage.pop()
console.log(pop);
console.log('after pop: ', secretMessage.length);
secretMessage.push('to');
secretMessage.push('Program');

/*change the word 'easily' to 'right' by acessing the index*/
const find = (str) =>{
  if(str==='easily'){
    return str; 
  }
  else
    'error'
}
secretMessage[secretMessage.findIndex(find)]= 'right';
console.log(secretMessage);

/*removing the first element*/
secretMessage.shift();
//console.log(secretMessage);

/*add Programming to the beginning*/
secretMessage.unshift('Programming');
//console.log(secretMessage);

/*remove the strings get, right, the, first, time,, and replace them with the single string know,*/
secretMessage.splice(6,5, 'know,')
//console.log(secretMessage);

console.log(secretMessage.join(' '))