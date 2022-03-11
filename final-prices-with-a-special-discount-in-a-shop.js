/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  for (let i = 0, len = prices.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (prices[i] >= prices[j]) {
        prices[i] -= prices[j];
        break;
      }
    }
  }

  return prices;
};
