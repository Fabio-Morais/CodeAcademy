const plantNeedsWater = (day)=> { //arrow function synta
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
/*************************************/
const plantNeedsWater = function(day) { //function expression
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
/*************************************/
function plantNeedsWater (day) {// functon declaration
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

/*************************************/

const squareNum = num => num * num;
/*** IT'S EQUAL TO */
function squareNum(num)
	return num*num
/*************************************/

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
/*** IT'S EQUAL TO */
function plantNeedsWater(day){
	if(day=== 'Wednesday')
		return true;
	else 
		return false;