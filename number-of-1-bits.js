/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  if (n <= 1) {
    return n;
  }

  var sum = 0;

  while (n > 0) {
    (n & 1) == 1 && sum++;
    n = n >>> 1;
  }

  return sum;
};
