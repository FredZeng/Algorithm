/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  return traverse(s, 0, s.length - 1, 1);
};

var traverse = function (s, left, right, chance) {
  if (left >= right) return true;

  while (left < right) {
    if (s[left] !== s[right]) {
      if (chance == 1) {
        return traverse(s, left + 1, right, 0) || traverse(s, left, right - 1, 0);
      } else {
        return false;
      }
    } else {
      left++;
      right--;
    }
  }

  return true;
};
