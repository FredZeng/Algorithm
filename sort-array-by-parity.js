/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // 找到第一个奇数坐标
    while (nums[left] % 2 == 0) {
      left++;
    }

    // 找到第一个偶数坐标
    while (nums[right] % 2 == 1) {
      right--;
    }

    if (left > right) break;

    let tmp = nums[left];
    nums[left] = nums[right];
    nums[right] = tmp;

    left++;
    right--;
  }

  return nums;
};
