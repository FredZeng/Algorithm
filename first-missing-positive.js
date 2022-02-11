/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  swapNums(nums, 0);

  for (var i = 0, len = nums.length; i < len; i++) {
    if (i !== nums[i] - 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
};

var swapNums = function (nums, i) {
  if (i >= nums.length) {
    return;
  }
  if (nums[i] <= 0 || nums[i] >= nums.length) {
    swapNums(nums, ++i);
    return;
  }

  let num = nums[i];
  if (num == i + 1 || nums[num - 1] == num) {
    swapNums(nums, ++i);
    return;
  }

  var temp = nums[num - 1];
  nums[num - 1] = num;
  nums[i] = temp;

  swapNums(nums, i);
};
