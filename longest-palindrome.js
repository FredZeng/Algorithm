/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = {};

  for (let i = 0, len = s.length; i < len; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  let odd = false;
  let sum = 0;

  Object.values(map).forEach((it) => {
    if (it % 2 == 0) {
      sum += it;
    } else {
      sum += it - 1;
      odd = true;
    }
  });

  if (odd) {
    sum += 1;
  }

  return sum;
};
