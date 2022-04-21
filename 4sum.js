/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];

  nums.sort((a, b) => a - b);

  let arr = [];

  for (let i = 0, len = nums.length - 3; i < len; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let triple = threeSum(nums, i + 1, target - nums[i]);

    if (triple.length > 0) {
      triple.forEach((it) => {
        it.unshift(nums[i]);
        arr.push(it);
      });
    }
  }

  return arr;
};

let threeSum = function (nums, start, target) {
  let arr = [];

  for (let i = start, len = nums.length - 2; i < len; i++) {
    if (i > start && nums[i] == nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum == target) {
        if (arr.length > 0 && arr[0][1] == nums[left] && arr[0][2] == nums[right]) {
          // do nothing
        } else {
          arr.unshift([nums[i], nums[left], nums[right]]);
        }
        left++;
        right--;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return arr;
};
