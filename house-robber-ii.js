/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 3) return Math.max.apply(null, nums);

  return Math.max(dp(nums, 0, nums.length - 1), dp(nums, 1, nums.length));
};

let dp = function (nums, start, end) {
  let arr = new Array(nums.length);
  arr[start] = nums[start];
  arr[start + 1] = Math.max(nums[start], nums[start + 1]);

  for (let i = start + 2; i < end; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i]);
  }

  return arr[end - 1];
};
