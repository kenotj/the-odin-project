const repeatString = function(i_sInputString, i_nNum)
{
  // rejection case
  if(i_nNum < 0) return "ERROR";

  let sResult = "";
  for(let nCount = 0; nCount < i_nNum; nCount++)
  {
    sResult += i_sInputString;
  }
  return sResult;
};

// Do not edit below this line
module.exports = repeatString;
