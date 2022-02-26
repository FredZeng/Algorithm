/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let arr = new Array(nums.length).fill(-1);
  let min = nums[0];

  for (let i = 1, len = nums.length; i < len; i++) {
    arr[i] = nums[i] > min ? nums[i] - min : -1;

    min = Math.min(nums[i], min);
  }

  return Math.max.apply(null, arr);
};
