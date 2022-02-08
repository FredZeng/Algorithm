/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let value = 1;
  let tmp = 1;

  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      tmp++;
    } else {
      value = Math.max(value, tmp);
      tmp = 1;
    }
  }

  return Math.max(value, tmp);
};
