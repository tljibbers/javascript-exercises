const add = function(a, b) {
  return a + b;
	
};

const subtract = function(b, a) {
	return b - a;
};

const sum = function(sumArr) {
	const fullSum = sumArr.reduce(function(accumulator, next)
{
    return accumulator += next;
});

  return fullSum;
};

const multiply = function(multArr) {
  const fullMult = multArr.reduce(function(acc, next){
      return acc = acc * next;
  });

};

const power = function(a, b) {
  return Math.pow(a, b);
	
};

const factorial = function(a) {

  if((a == 1) || (a == 0))
  {
    return 1;
  }
  else
  {
    return a * factorial(a - 1);
  }

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
