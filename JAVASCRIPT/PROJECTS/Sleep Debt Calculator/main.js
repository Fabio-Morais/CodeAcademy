function getSleepHours(day){
  day=day.toLowerCase();
  switch(day){
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 9;
      break;    
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 7;
      break;    
    case 'friday':
      return 8;
      break;    
    case 'saturday':
      return 7;
      break;    
    case 'sunday':
      return 5;
      break;
    default:
      return 'ERROR'
      break;
  }
}
const getActualSleepHours = () => {
  let sum=0;
  var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  for(let i=0; i<days.length; i++)
    {
      sum+= getSleepHours(days[i]);
    }
  return sum;
}
const getIdealSleepHours  = () =>{
  let idealHours = 8;
  return idealHours*7;
}

const calculateSleepDebt  = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  console.log('actual:' + actualSleepHours);
    console.log('ideal: '+ idealSleepHours);

  if(actualSleepHours === idealSleepHours)
    console.log('ideal amount sleep');
  else if(actualSleepHours < idealSleepHours){
    console.log('you should get some rest');
		console.log('you need ' + (idealSleepHours-actualSleepHours) + 'h more')
  }
  else if(actualSleepHours > idealSleepHours)
    console.log('you got more sleep than needed');

}
calculateSleepDebt();

