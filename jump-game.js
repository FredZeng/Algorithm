/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length == 1) return true;
  if (nums[0] == 0) return false;

  let maxIndex = nums[0];

  for (let i = 1, len = nums.length - 1; i < len; i++) {
    if (maxIndex >= i) {
      maxIndex = Math.max(maxIndex, i + nums[i]);
    } else {
      return false;
    }
  }

  return maxIndex >= nums.length - 1;
};
