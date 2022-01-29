/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  var map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  var res = [];
  var lastIndex = digits.length - 1;

  /**
   * @param {number} index
   * @param {string[]} stack
   */
  var backtrace = function (index, str) {
    if (index > lastIndex) {
      res.push(str);
      return;
    }

    var digit = digits[index];
    map[digit].forEach((it) => {
      backtrace(index + 1, `${str}${it}`);
    });
  };

  backtrace(0, '');

  return res;
};
