/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);

  return nums;
};

let quickSort = function (nums, left, right) {
  if (left >= right) return;

  let target = nums[left];
  let i = left;
  let j = right;

  while (i < j) {
    while (i < j && nums[j] >= target) {
      j--;
    }
    nums[i] = nums[j];
    nums[j] = target;

    while (i < j && nums[i] < target) {
      i++;
    }
    nums[j] = nums[i];
    nums[i] = target;
  }

  quickSort(nums, left, i - 1);
  quickSort(nums, i + 1, right);
};
