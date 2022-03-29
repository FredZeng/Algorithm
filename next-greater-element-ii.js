/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const len = nums.length;

  let stack = [nums[len - 1]];
  let arr = new Array(len).fill(-1);

  for (let i = 2 * len - 2; i >= 0; i--) {
    let index = i % len;

    while (stack.length > 0 && stack[stack.length - 1] <= nums[index]) {
      stack.pop();
    }

    if (stack.length > 0) {
      arr[index] = stack[stack.length - 1];
    }

    stack.push(nums[index]);
  }

  return arr;
};
