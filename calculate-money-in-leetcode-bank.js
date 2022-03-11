/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let sum = 0;

  for (let i = 1, money = 1, week = 0; i <= n; i++) {
    if (i % 7 == 1) {
      week++;
      money = week;
    }

    sum += money;
    money++;
  }

  return sum;
};
