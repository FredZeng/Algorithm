/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  var map = {};

  nums.forEach((it) => {
    if (map[it]) {
      map[it]++;
    } else {
      map[it] = 1;
    }
  });

  return nums.sort((a, b) => {
    if (map[a] !== map[b]) {
      return map[a] - map[b];
    }

    return b - a;
  });
};
