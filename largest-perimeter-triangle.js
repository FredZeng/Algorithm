/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums = nums.sort((a, b) => b - a);

  let a, b, c;

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    a = nums[i];
    b = nums[i + 1];
    c = nums[i + 2];

    if (b + c > a) {
      return a + b + c;
    }
  }

  return 0;
};
