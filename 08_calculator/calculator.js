const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
	return arr.reduce((total,curr)=>total+curr,0);
};

const multiply = function(arr) {
  return arr.reduce((x,y)=> x*y);
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
  let factorial =1 ;
  if(x===0){
    factorial = 1;
  }
  else{
    for(let i =1; i<=x; i++){
      factorial*=i;
    }
  }
	return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
