/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  nums = nums.sort((a, b) => a - b);

  if (nums[0] > 0 || nums[nums.length - 1] < 0) return [];

  let res = [];

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum == 0) {
        let last = res[res.length - 1];
        if (last && last[0] == nums[i]) {
          if (last[1] != nums[left]) {
            res.push([nums[i], nums[left], nums[right]]);
          }
        } else {
          res.push([nums[i], nums[left], nums[right]]);
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};
