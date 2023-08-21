const fibonacci = function (number) {
  if (number < 0) {
    return "OOPS";
  } else {
    let num1 = 0,
      num2 = 1,
      sum;
    for (let i = 1; i < number; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return num2;
  }
};

// Do not edit below this line
module.exports = fibonacci;
