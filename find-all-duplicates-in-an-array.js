/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let arr = [];

  for (let i = 0, len = nums.length; i < len; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      arr.push(index + 1);
    }

    nums[index] *= -1;
  }

  return arr;
};
