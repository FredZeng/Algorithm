/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

// var findKthLargest = function (nums, k) {
//   if (k == 1 && nums.length === 1) {
//     return nums[0];
//   }

//   let left = [],
//     right = [];

//   for (let i = 1, len = nums.length; i < len; i++) {
//     if (nums[i] > nums[0]) {
//       left.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//   }

//   if (left.length + 1 == k) {
//     return nums[0];
//   } else if (left.length >= k) {
//     return findKthLargest(left, k);
//   } else {
//     return findKthLargest(right, k - left.length - 1);
//   }
// };
