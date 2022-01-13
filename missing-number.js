/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var res = nums.length;
  for (var i = 0, len = nums.length; i < len; i++) {
    res ^= nums[i] ^ i;
  }
  return res;
};