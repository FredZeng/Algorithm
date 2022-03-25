/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n == 1) return ['()'];
  if (n == 2) return ['()()', '(())'];

  let result = [];

  let backtrace = function (left, right, stack) {
    if (left > right) return;
    if (left == 0) {
      result.push(stack + new Array(right).fill(')').join(''));
      return;
    }

    backtrace(left - 1, right, stack + '(');

    backtrace(left, right - 1, stack + ')');
  };

  backtrace(n, n, '');

  return result;
};
