/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let map = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    if (map[nums[i]]) {
      map[nums[i]][0]++;
      map[nums[i]][2] = i;
    } else {
      map[nums[i]] = [1, i, i];
    }
  }

  let res = nums.length;
  let max = 1;

  Object.values(map).forEach((it) => {
    if (it[0] > max) {
      max = it[0];
      res = it[2] - it[1] + 1;
    } else if (it[0] == max) {
      res = Math.min(res, it[2] - it[1] + 1);
    }
  });

  return res;
};
