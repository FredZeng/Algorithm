/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var res = [];

  var backtrace = function (left, right, stack) {
    if (left > right) {
      return;
    }
    if (left == 0) {
      res.push(stack.join('') + new Array(right).fill(')').join(''));
      return;
    }

    if (left == right) {
      stack.push('(');
      backtrace(left - 1, right, stack);
      stack.pop();
    } else if (right > left) {
      stack.push('(');
      backtrace(left - 1, right, stack);
      stack.pop();

      stack.push(')');
      backtrace(left, right - 1, stack);
      stack.pop();
    }
  };

  backtrace(n, n, []);

  return res;
};
