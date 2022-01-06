/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  var map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (var i = 0, len = s.length; i < len; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      var top = stack.pop();

      if (map[top] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
