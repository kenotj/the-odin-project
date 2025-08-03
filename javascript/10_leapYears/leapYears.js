const leapYears = function(i_nYear)
{
  return i_nYear % 4 === 0
     && (i_nYear % 100 !== 0 || i_nYear % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
