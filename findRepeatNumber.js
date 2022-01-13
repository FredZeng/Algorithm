/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const map = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i];

    if (map[num]) {
      return num;
    }
    map[num] = 1;
  }

  return null;
};
