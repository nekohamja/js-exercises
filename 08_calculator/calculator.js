// declaring anonymous function shortcut (=>)
const add = (a, b) => {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((total, current) => total * current);
};

const power = function (number, power) {
  return Math.pow(number, power);
};

const factorial = function (number) {
  if (number < 0 || number === 0) return 1;
  else {
    for (let i = number - 1; i >= 1; i--) number *= i;
    return number;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
