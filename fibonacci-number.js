/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  var arr = [0, 1, 1];

  for (let i = 2; i < n + 1; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  return arr[n];
};
