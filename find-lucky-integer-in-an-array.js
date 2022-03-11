/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let map = new Map();

  arr.forEach((it) => {
    if (it > arr.length) return true;

    if (map.has(it)) {
      let total = map.get(it) + 1;
      map.set(it, total);
    } else {
      map.set(it, 1);
    }
  });

  let res = -1;

  for (let it of map.keys()) {
    if (it > res && it == map.get(it)) {
      res = it;
    }
  }

  return res;
};
