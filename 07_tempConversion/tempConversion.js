const convertToCelsius = function(fahrenheit) {
    celsiusConvert = (fahrenheit - 32) * (5/9);
    cC = celsiusConvert.toFixed(1);
    return cC;

};

const convertToFahrenheit = function(celsius) {
    fahrenheitConvert = (celsius * 9/5 + 32);
    fC = fahrenheitConvert.toFixed(1);
    return fC;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
