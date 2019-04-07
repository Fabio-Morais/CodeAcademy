
let _={
  clamp(number, lower, upper){
    return Math.min(Math.max(number, lower), upper);
  },
  inRange(number, start,end){

    if(end===undefined)
      {
        end=start;
        start=0;
      }
    if(start>end){
      let aux=end;
      end=start;
      start=aux;
    }

    if(Math.min(number, start,end) === number)
      return false;
    else if(Math.max(number, start,end) != end)
      return false;
    else 
      return true;
  },
  words(string){
    let aux= string.split(' ');
    return aux;
  },
  pad(string, length){
    let begin, end;
    let newString;
    if(length> string.length){
      let x= (length-string.length)/2;      
   		begin= Math.floor(x);
      end= length- string.length - begin;
      newString= ' '.repeat(begin) + string + ' '.repeat(end);
      return newString;
    }
    else
      return string;
  },
  has(object, key){
      for(keyIt in object)
        {
          if(Object.keys(object) == key)
          	return true
        }
    return false;
    
  },
  invert(object){
    let invertObject={};
    console.log(object)
    for(let key in object)
      {
        const value= object[key]
        invertObject = { [value] : key }
        //ao usar [value] assumimos que  variavel e nao 
        //colocado a string value, mas sim o valor de value
      }

    return invertObject;
  },
  findKey(object, pedicateFunction){
		for(key in object){
       if(pedicateFunction(object[key]))
        return key;
    }
     
  },
  drop(array, number){
    var newArray=[];
    if(number === undefined)
    	number=1;
    for(let i=number; i<array.length; i++)
    	newArray.push(array[i]);  
    
    return newArray;
},
  dropWhile(array, fun){
    var newArray=[];
    let i;
     for(i=0; i<array.length; i++)
     {
       if(fun(array[i], i , array)===false)
					break;
     }
    for(let j=i; j<array.length; j++)
      newArray.push(array[j]); 
  return newArray;
  },
  dropWhile2(array, fun){
    const cb = (element, index) => {
      return !fun(element, index, array)
    };
      let dropNumber = array.findIndex(cb);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
  },
  chunk(array, size){
    let NewArray=[];
        console.log(array)
    console.log(size)

    if(size === undefined)
      size=1;
    for(let i=0; i<array.length; i+=size)
    {
      NewArray.push(array.slice(i, i+size));
    }
    console.log(NewArray)
    return NewArray;
  }
  
}


// Do not write or modify code below this line.
module.exports = _;