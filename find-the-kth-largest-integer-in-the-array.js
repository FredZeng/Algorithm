/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
  if (nums.length <= 10) {
    nums = nums.sort((a, b) => {
      if (a == b) return 0;

      return a.length < b.length || (a.length == b.length && a < b) ? -1 : 1;
    });
    return nums[nums.length - k];
  }

  let mid = nums.length >> 1;
  let left = [];
  let right = [];

  nums.forEach((it) => {
    if (
      it.length < nums[mid].length ||
      (it.length == nums[mid].length && it < nums[mid])
    ) {
      left.push(it);
    } else if (
      it.length > nums[mid].length ||
      (it.length == nums[mid].length && it > nums[mid])
    ) {
      right.push(it);
    } else {
      if (left.length > right.length) {
        right.push(it);
      } else {
        left.push(it);
      }
    }
  });

  if (right.length >= k) {
    return kthLargestNumber(right, k);
  } else {
    return kthLargestNumber(left, k - right.length);
  }
};
