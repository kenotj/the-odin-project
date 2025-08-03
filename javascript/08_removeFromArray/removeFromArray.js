const removeFromArray = function()
{
  if(arguments.length < 2)
    return;

  let vArray = arguments[0];
  for(let nArgIdx = 1; nArgIdx < arguments.length; ++nArgIdx)
  {
    vArray = vArray.filter((nVal) => nVal !== arguments[nArgIdx]);
  }
  return vArray;
};

// Do not edit below this line
module.exports = removeFromArray;
