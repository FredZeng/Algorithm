/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  nums = Array.from(new Set(nums));
  nums.sort((a, b) => a - b);

  let res = 1;

  for (var i = 1, tmp = 1, len = nums.length; i < len; i++) {
    if (nums[i] - 1 == nums[i - 1]) {
      tmp++;
    } else {
      res = Math.max(res, tmp);
      tmp = 1;
    }
  }

  res = Math.max(res, tmp);

  return res;
};
