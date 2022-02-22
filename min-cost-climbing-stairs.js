/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = new Array(cost.length + 1);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] || 0);
  }

  return dp[dp.length - 1];
};
