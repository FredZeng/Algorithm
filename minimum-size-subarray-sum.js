/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = (j = 0);
  let result = 0;
  let sum = 0;

  while (j < nums.length) {
    sum += nums[j];

    while (sum >= target) {
      result = result == 0 ? j - i + 1 : Math.min(result, j - i + 1);

      sum -= nums[i];
      i++;
    }

    j++;
  }

  return result;
};
