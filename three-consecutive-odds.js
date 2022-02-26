/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  if (arr.length < 3) return false;

  let oddCount = 0;

  for (let i = 0, len = arr.length; i < len && oddCount < 3; i++) {
    if (arr[i] % 2 == 1) {
      oddCount++;
    } else {
      oddCount = 0;
    }
  }

  return oddCount >= 3;
};
