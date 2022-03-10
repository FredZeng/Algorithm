/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let map = new Map();

  nums.forEach((it) => {
    map.set(it, (map.get(it) || 0) + 1);
  });

  let max = 0;

  for (let key of map.keys()) {
    if (map.has(key + 1)) {
      max = Math.max(max, map.get(key) + map.get(key + 1));
    }

    if (map.has(key - 1)) {
      max = Math.max(max, map.get(key) + map.get(key - 1));
    }
  }

  return max;
};
