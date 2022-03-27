/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  if (k == 0) return;

  let lastIndex = nums.length - 1;
  reverse(nums, 0, lastIndex);
  reverse(nums, 0, k - 1);
  reverse(nums, k, lastIndex);
};

let reverse = function (nums, start, end) {
  let temp;
  while (start < end) {
    temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    start++;
    end--;
  }
};
