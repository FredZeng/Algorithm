/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];

  for (let i = 0, len = s.length; i < len; i++) {
    var top = stack[stack.length - 1];

    if (s[i] == top) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
};
