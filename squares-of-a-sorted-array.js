/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const len = nums.length;

  if (nums[0] >= 0) {
    return nums.map((it) => it * it);
  }

  if (nums[len - 1] <= 0) {
    return nums.map((it) => it * it).reverse();
  }

  let left = 0,
    right = len - 1;

  let k = len - 1;
  let arr = new Array(len);

  while (k >= 0) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      arr[k--] = nums[left] * nums[left];
      left++;
    } else {
      arr[k--] = nums[right] * nums[right];
      right--;
    }
  }

  return arr;
};
