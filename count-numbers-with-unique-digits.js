/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n == 0) return 1;

  let sum = 10;

  for (let i = 1; i < n; i++) {
    let temp = 9;
    for (let j = 0; j < i; j++) {
      temp *= 9 - j;
    }

    sum += temp;
  }

  return sum;
};
