/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length == 2) {
    return [0, 1];
  }

  var map = {
    [nums[0]]: 0,
  };

  for (var i = 1, len = nums.length; i < len; i++) {
    var remain = target - nums[i];
    if (map[remain] !== undefined) {
      return [map[remain], i];
    } else {
      map[nums[i]] = i;
    }
  }

  return [-1, -1];
};
