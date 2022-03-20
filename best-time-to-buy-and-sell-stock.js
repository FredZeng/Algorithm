/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length == 1) return 0;

  let max = 0;
  let min = prices[0];

  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] >= min) {
      max = Math.max(max, prices[i] - min);
    } else {
      min = prices[i];
    }
  }

  return max;
};
