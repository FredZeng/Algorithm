/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let last = nums[0];
  let max = nums[0];

  for (let i = 1, len = nums.length; i < len; i++) {
    last = Math.max(nums[i], nums[i] + last);
    max = Math.max(max, last);
  }

  return max;
};
// var maxSubArray = function (nums) {
//   if (nums.length === 1) return nums[0];

//   let arr = [nums[0]];

//   for (let i = 1, len = nums.length; i < len; i++) {
//     arr[i] = nums[i];
//     let sum = arr[i] + arr[i - 1];

//     if (sum > arr[i]) {
//       arr[i] = sum;
//     }
//   }

//   return Math.max.apply(null, arr);
// };
