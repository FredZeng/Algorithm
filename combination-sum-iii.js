/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  if (n > 45) return [];

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let arr = [];

  let backtrace = function (stack, sum, start) {
    if (stack.length >= k || sum > n) {
      if (stack.length == k && sum == n) {
        arr.push([...stack]);
      }
      return;
    }

    for (let i = start; i < numbers.length; i++) {
      stack.push(numbers[i]);

      backtrace(stack, sum + numbers[i], i + 1);

      stack.pop();
    }
  };

  backtrace([], 0, 0);

  return arr;
};
