const sumAll = function (min, max) {
  let sum = 0;
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  else if (min < 0 || max < 0) return "ERROR";
  else {
    //swaps variables if min is > than max
    if (min > max) [min, max] = [max, min];

    //add each iteration of min to sum
    for (let i = min; i <= max; i++) sum += i;
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
