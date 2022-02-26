/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let arr = new Array(nums.length);

  for (let i = 0, len = nums.length; i < len; i++) {
    arr[i] = nums[nums[i]];
  }

  return arr;
};
