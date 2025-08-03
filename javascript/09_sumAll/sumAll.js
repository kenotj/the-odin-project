const sumAll = function(i_nVal1, i_nVal2)
{
  // Rejection checks
  if ( typeof i_nVal1 !== 'number' || typeof i_nVal2 !== 'number' // values are NaN
    || i_nVal1 < 0 || i_nVal2 < 0                                 // values are less than 0
    || i_nVal1 % 1 !== 0 || i_nVal2 % 1 !== 0)                    // values are not integers
      return "ERROR";

  let nResult = 0;
  let nMin = Math.min(i_nVal1, i_nVal2);
  let nMax = Math.max(i_nVal1, i_nVal2);
  for(let nCounter = nMin; nCounter <= nMax; nCounter++)
  {
    nResult += nCounter;
  }
  return nResult;
};

// Do not edit below this line
module.exports = sumAll;
