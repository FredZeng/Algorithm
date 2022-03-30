/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 1 || k == 1) return nums;

  let queue = [];
  let result = [];

  for (let i = 0, len = nums.length, j = k - 1; i < len; i++) {
    if (i < k) {
      while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
        queue.pop();
      }
      queue.push(i);

      if (i == j) {
        result.push(nums[queue[0]]);
      }
    } else {
      while (queue.length > 0 && queue[0] <= i - k) {
        queue.shift();
      }
      while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
        queue.pop();
      }
      queue.push(i);

      result.push(nums[queue[0]]);
    }
  }

  return result;
};
