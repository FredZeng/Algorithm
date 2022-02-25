/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (s.length == 0) return 0;

  let stack = [];
  let dp = new Array(s.length).fill(0);

  for (let i = 0, len = s.length; i < len; i++) {
    let ch = s[i];

    if (stack.length == 0 && ch == ')') {
      dp[i] = 0;
      continue;
    }

    if (ch == '(') {
      dp[i] = 0;
      stack.push(i);
    } else {
      let index = stack.pop();
      dp[i] = i - index + 1 + (dp[index - 1] || 0);
    }
  }
  return Math.max.apply(null, dp);
};
