/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  var memo = new Array(amount + 1).fill(amount + 1);
  memo[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (let j = 0, len = coins.length; j < len; j++) {
      const coin = coins[j];
      let remain = i - coin;

      if (remain < 0) continue;

      memo[i] = Math.min(memo[i], memo[remain] + 1);
    }
  }

  return memo[amount] == amount + 1 ? -1 : memo[amount];
};
