const convertToCelsius = function(farenheitTemp) {
  // celsiusStepOne = farenheitTemp - 32;
  // celsiusStepTwo = celsiusStepOne * 5;
  // celsiusStepThree = celsiusStepTwo / 9;
  // celsiusResultOne = Math.round(celsiusStepThree * 10);
  // celsiusResultTwo = celsiusResultOne / 10;

  celsiusResult = ((farenheitTemp - 32) * 5) / 9;
  resultCelsius = Math.round(celsiusResult * 10) / 10;
  return resultCelsius;
};

const convertToFahrenheit = function(celsiusTemp) {
  farenheitResult = (celsiusTemp * 9) / 5 + 32;
  resultFarenheit = Math.round(farenheitResult * 10) / 10;
  return resultFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
