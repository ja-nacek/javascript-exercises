const add = function (...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};

const subtract = function (...args) {
  let result = 0;
  let number1 = args[0];
  let number2 = args[1];
  return number1 - number2;
};

const sum = function (array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current);
};

const power = function (number1, number2) { // 2, 3
  return Math.pow(number1, number2);
};

const factorial = function (number) {
  let product = 1;
  for (let i = number; i > 0; i--) {
    product *= i;
  }
  return product;
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
