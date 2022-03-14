/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let left = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    if (2 * left == sum - nums[i]) {
      return i;
    }

    left += nums[i];
  }

  return -1;
};
