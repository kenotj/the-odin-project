const convertToCelsius = function(i_fahrenheit)
{
  // (32°F − 32) × 5/9 = 0°C
  return Number(((i_fahrenheit - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(i_nCelsius)
{
  // (0°C × 9/5) + 32 = 32°F
  return Number(((i_nCelsius * (9/5)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
