/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var res = [];

  var backtrace = function (index, n, k, stack) {
    if (stack.length == k) {
      res.push([...stack]);
      return;
    }

    for (var i = index; i < n + 1; i++) {
      stack.push(i);

      backtrace(i + 1, n, k, stack);

      stack.pop();
    }
  };

  backtrace(1, n, k, []);

  return res;
};
