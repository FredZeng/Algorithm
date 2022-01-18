/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;
  let maxLen = 0;

  const map = new Map();

  while (j < s.length) {
    const char = s[j];
    const index = map.get(char);

    if (index !== undefined) {
      maxLen = Math.max(maxLen, j - i);

      for (; i < index + 1; i++) {
        map.set(s[i], undefined);
      }
    }

    map.set(char, j);
    j++;
  }

  return Math.max(maxLen, j - i);
};
