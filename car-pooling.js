/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let arr = new Array(1001).fill(0);
  let end = 0;

  for (let i = 0; i < trips.length; i++) {
    const [passengers, j, k] = trips[i];

    arr[j] += passengers;
    arr[k] -= passengers;

    end = Math.max(end, k);
  }

  end += 1;

  for (let i = 1, cur = arr[0]; i < end; i++) {
    if (cur > capacity) {
      return false;
    }
    cur = cur + arr[i];
  }

  return true;
};
