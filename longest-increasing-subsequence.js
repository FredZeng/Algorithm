/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length == 1) return 1;

  let arr = [nums[0]];
  for (let i = 1, len = nums.length; i < len; i++) {
    let num = nums[i];
    if (num > arr[arr.length - 1]) {
      arr.push(num);
    } else {
      let index = binarySearch(arr, num);
      arr[index] = num;
    }
  }
  return arr.length;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + ((right - left) >> 1);

    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
};
