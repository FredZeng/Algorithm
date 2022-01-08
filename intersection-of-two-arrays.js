/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  const res = new Set();

  nums2.forEach(it => {
    if (set.has(it)) {
      res.add(it);
    }
  });

  return Array.from(res);
};
