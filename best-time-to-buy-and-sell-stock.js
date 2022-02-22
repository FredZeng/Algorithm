/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length == 1) return 0;

  let arr = new Array(prices.length).fill(0);
  let min = prices[0];

  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] >= min) {
      arr[i] = prices[i] - min;
    } else {
      min = prices[i];
    }
  }

  return Math.max.apply(null, arr);
};
