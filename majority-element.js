/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let res = nums[0];
  let count = 1;

  for (let i = 1, len = nums.length; i < len; i++) {
    if (0 === count) {
      res = nums[i];
      count = 1;
      continue;
    }
    if (res == nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return res;
};
