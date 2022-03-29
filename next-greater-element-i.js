/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 求 nums2 的下一个更大元素
  let lastIndex = nums2.length - 1;

  let map = new Map();
  map.set(nums2[lastIndex], -1);

  let stack = [nums2[lastIndex]];

  for (let i = lastIndex - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }

    map.set(nums2[i], stack.length > 0 ? stack[stack.length - 1] : -1);
    stack.push(nums2[i]);
  }

  return nums1.map((it) => map.get(it));
};
