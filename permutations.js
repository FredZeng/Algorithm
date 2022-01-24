/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length == 1) {
    return [nums];
  } else if (nums.length == 2) {
    return [nums, [nums[1], nums[0]]];
  }

  let res = [];

  for (let i = 0, len = nums.length; i < len; i++) {
    const top = nums.pop();

    res.push(...permute(nums).map((it) => [top, ...it]));

    nums.unshift(top);
  }

  return res;
};
