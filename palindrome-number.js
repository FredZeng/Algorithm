/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  let num = 0;
  let y = x;

  while (y) {
    num = num * 10 + (y % 10);
    y = Math.floor(y / 10);
  }

  return num === x;
};
