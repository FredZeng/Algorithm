/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  if (nums.length === 1) {
    return [[], nums];
  }

  nums.sort((a, b) => a - b);
  let res = [];

  let backtrace = function (start, stack) {
    res.push([...stack]);

    for (let i = start, len = nums.length; i < len; i++) {
      if (i > start && nums[i] == nums[i - 1]) {
        continue;
      }

      stack.push(nums[i]);
      backtrace(i + 1, stack);
      stack.pop();
    }
  }

  backtrace(0, []);

  return res;
};
