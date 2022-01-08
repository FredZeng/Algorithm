/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  var left = 0,
    right = nums.length - 1;

  while (left < right) {
    if ((nums[left] & 1) == 0 && (nums[right] & 1) == 1) {
      var temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
    if ((nums[left] & 1) == 1) {
      left++;
    }
    if ((nums[right] & 1) == 0) {
      right--;
    }
  }

  return nums;
};
