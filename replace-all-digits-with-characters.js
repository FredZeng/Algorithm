/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let arr = s.split('');

  for (let i = 1, len = arr.length; i < len; i += 2) {
    arr[i] = shift(s[i - 1], parseInt(s[i]));
  }

  return arr.join('');
};

var shift = function (c, x) {
  if (x == 0) return c;

  return String.fromCharCode(c.charCodeAt(0) + x);
};
