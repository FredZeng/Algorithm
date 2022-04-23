/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  if (nums.length == 1) return 0;

  let n = nums.length - 1;
  let sum = nums.reduce((a, b) => a + b, 0);
  let last = 0;
  for (let i = 1; i < nums.length; i++) {
    last += i * nums[i];
  }
  let max = last;

  for (let i = nums.length - 2; i >= 0; i--) {
    last = last - n * nums[i + 1] + sum - nums[i + 1];

    max = Math.max(max, last);
  }

  return max;
};
