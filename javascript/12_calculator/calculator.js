const add = function(i_nLeft, i_nRight)
{
  return i_nLeft + i_nRight;
};

const subtract = function(i_nLeft, i_nRight)
{
  return i_nLeft - i_nRight;
};

const sum = function(i_vValueList)
{
  return i_vValueList.reduce((accum, val) => accum + val, 0);
};

const multiply = function(i_vValueList)
{
  // let nResult = 1;
  // for(let val of i_vValueList)
  //   nResult *= val;
  // return nResult;
  return i_vValueList.reduce((accum, val) => accum * val, 1);
};

const power = function(i_nValue, i_nExponent)
{
  return i_nValue ** i_nExponent;
};

const factorial = function(i_nValue)
{
  // Factorial of n = n! = n × (n - 1) × (n - 2) × ... × 1
  if(i_nValue == 0 || i_nValue == 1)
    return 1;
  return i_nValue * factorial(i_nValue - 1);
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
