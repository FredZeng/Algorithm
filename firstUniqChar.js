/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const arr = new Array(26).fill(0);

  const start = 'a'.charCodeAt(0);

  for (let i = 0, len = s.length; i < len; i++) {
    arr[s.charCodeAt(i) - start]++;
  }

  for (let i = 0, len = s.length; i < len; i++) {
    if (arr[s.charCodeAt(i) - start] == 1) {
      return s[i];
    }
  }

  return ' ';
};
