/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n == 0) return 0;
  if (n <= 2) return 1;

  let max = 0;
  let dp = [0, 1, 1];

  for (let i = 3; i < n + 1; i++) {
    let j = i >> 1;
    let k = i % 2;

    if (k == 0) {
      dp[i] = dp[j];
    } else {
      dp[i] = dp[j] + dp[j + 1];
    }

    max = Math.max(max, dp[i]);
  }

  return max;
};
