/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let leftIndex = 0;
  let rightIndex = 1;
  let maxLen = 1;

  let searchEdge = (left, right) => {
    while (left > 0 && right + 1 < s.length && s[left - 1] == s[right + 1]) {
      left--;
      right++;
    }

    return [left, right];
  };

  for (let i = 1, len = s.length; i < len; i++) {
    if (s[i - 1] == s[i + 1]) {
      let edges = searchEdge(i - 1, i + 1);
      let len = edges[1] - edges[0] + 1;
      if (maxLen < len) {
        maxLen = len;
        leftIndex = edges[0];
        rightIndex = edges[1] + 1;
      }
    }
    if (s[i] == s[i - 1]) {
      let edges = searchEdge(i - 1, i);
      let len = edges[1] - edges[0] + 1;
      if (maxLen < len) {
        maxLen = len;
        leftIndex = edges[0];
        rightIndex = edges[1] + 1;
      }
    }
  }

  return s.slice(leftIndex, rightIndex);
};
